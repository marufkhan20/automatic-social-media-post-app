const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const sendMail = require("../services/emailService");
const Activity = require("../models/Activity");

// register controller
const registerController = async (req, res) => {
  const { firstName, lastName, role, email, password } = req.body;

  try {
    // check user already existing
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        error: {
          email: "Email is already exist, Please try to another email!",
        },
      });
    }

    // password hash
    const saltRounds = 10;
    bcrypt.genSalt(saltRounds, function (err, salt) {
      bcrypt.hash(password, salt, async function (err, hash) {
        if (err) {
          return res.status(500).json({
            error: err,
          });
        }

        // Create New User
        const newUser = new User({
          firstName,
          lastName,
          role,
          email,
          password: hash,
          managers: [],
          users: [],
        });

        let user = await newUser.save();

        // create new activity
        const newActivity = new Activity({
          time: new Date(),
          user: user?._id,
          activity: "Create New Account",
        });

        await newActivity.save();

        if (user?._id) {
          res.status(201).json(user);
        }
      });
    });
  } catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
};

// login controller
const loginController = async (req, res) => {
  const { email, password } = req.body;

  // check user available
  const user = await User.findOne({ email });

  if (!user) {
    return res.status(400).json({
      error: {
        email: "User not found! Please try again!!",
      },
    });
  }

  // check password correct or incorrect
  bcrypt.compare(password, user.password, async function (err, result) {
    if (err) {
      return res.status(500).json({
        error: "Server Error Occurred!",
      });
    }

    if (!result) {
      return res.status(400).json({
        error: {
          password: "Email or Password Incorrect!",
        },
      });
    }

    // create new activity
    const newActivity = new Activity({
      time: new Date(),
      user: user?._id,
      activity: "Logged in",
    });

    await newActivity.save();

    // prepare the user object to generate token
    const userObject = {
      _id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      profilePic: user?.profilePic,
      email: user.email,
      role: user?.role,
      plan: user?.plan,
      refreshDate: user?.refreshDate,
    };

    // generate token
    const token = jwt.sign(userObject, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRY,
    });

    res.status(200).json({
      user: userObject,
      token,
    });
  });
};

// forgot password controller
const fortgotPasswordController = async (req, res) => {
  try {
    const { email } = req.body || {};

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({
        error: {
          email: "User Not found!!",
        },
      });
    }

    if (user?._id) {
      // prepare the user object to generate token
      const userObject = {
        _id: user._id,
        email: user.email,
      };

      // generate token
      const token = jwt.sign(userObject, process.env.JWT_SECRET, {
        expiresIn: "10m",
      });

      // generate 4 digit random verify code
      const verifyLink = `${process.env.CLIENT_URL}/reset-password/${token}`;

      // send mail with verify code
      sendMail({
        from: process.env.ADMIN_EMAIL,
        to: email,
        subject: "Forgot Your Account Password.",
        html: require("../services/forgotEmailTemplate")(verifyLink),
      });

      res.status(200).json(user);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: "Server error occurred!!",
    });
  }
};

// reset password controller
const resetPasswordController = async (req, res) => {
  try {
    let { token } = req.params || {};
    const { password } = req.body || {};

    if (!token) {
      return res.status(401).json({
        error: {
          password: "Verification Failure!!",
        },
      });
    }

    token = token.replace("Bearer ", "");

    const decode = jwt.verify(token, process.env.JWT_SECRET);

    if (decode?._id) {
      // password hash
      const saltRounds = 10;
      bcrypt.genSalt(saltRounds, function (err, salt) {
        bcrypt.hash(password, salt, async function (err, hash) {
          if (err) {
            return res.status(500).json({
              error: err,
            });
          }

          // get user
          const user = await User.findById(decode?._id);

          // Create New User
          user.password = hash;

          await user.save();

          // create new activity
          const newActivity = new Activity({
            time: new Date(),
            user: user?._id,
            activity: "Reset Password",
          });

          await newActivity.save();

          res.status(200).json(user);
        });
      });
    }
  } catch (err) {
    console.error(err);
    res.status(401).json({
      error: {
        password: "Token Expire!!",
      },
    });
  }
};

// change password controller
const changePasswordController = async (req, res) => {
  try {
    const { _id } = req.user || {};
    const { password } = req.body || {};

    // update password
    const saltRounds = 10;
    bcrypt.genSalt(saltRounds, function (err, salt) {
      bcrypt.hash(password, salt, async function (err, hash) {
        if (err) {
          return res.status(500).json({
            error: err,
          });
        }

        const updatedUser = await User.findByIdAndUpdate(_id, {
          $set: { password: hash },
        });

        if (updatedUser?._id) {
          // create new activity
          const newActivity = new Activity({
            time: new Date(),
            user: updatedUser?._id,
            activity: "Change Password",
          });

          await newActivity.save();

          res.status(201).json(updatedUser);
        }
      });
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: "Server error occurred!!",
    });
  }
};

module.exports = {
  registerController,
  loginController,
  fortgotPasswordController,
  resetPasswordController,
  changePasswordController,
};
