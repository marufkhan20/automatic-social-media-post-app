const Package = require("../models/Package");
const Subscription = require("../models/Subscription");
const User = require("../models/User");
const stripe = require("stripe")(
  "sk_test_51LRnDyH3L9RCLevZoGrUbNqVAl445o6nt2MVPw8bwOyvYbJbQV5AKDsQ2Hj4XEG2Mhz6aiYtMZpj8KryafbcZVue00ebStF5jd"
);
const jwt = require("jsonwebtoken");
const Activity = require("../models/Activity");

// getAllPackagesController
const getAllPackagesController = async (req, res) => {
  try {
    const packages = await Package.find();
    res.status(200).json(packages);
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: "Server error occurred",
    });
  }
};

// get all subscriptions controller
const getAllSubscriptionsController = async (req, res) => {
  try {
    const subscriptions = await Subscription.find();
    res.status(200).json(subscriptions);
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: "Server error occurred!",
    });
  }
};

// get all subscriptions by user id controller
const getAllSubscriptionsByUserIdController = async (req, res) => {
  try {
    const { _id } = req.user || {};
    const subscriptions = await Subscription.find({ user: _id });
    res.status(200).json(subscriptions);
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: "Server error occurred!",
    });
  }
};

// create new package controller
const createNewPackageController = async (req, res) => {
  try {
    const { name, price, offers, productId } = req.body || {};
    console.log("body", req.body);
    const newPackage = new Package({
      name,
      price,
      productId,
      offers,
    });

    await newPackage.save();

    res.status(201).json(newPackage);
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: "Server error occurred!",
    });
  }
};

// subscribe package controller
const subscribePackageController = async (req, res) => {
  try {
    const { productId, packageId, userId } = req.body || {};

    // generate token
    const token = jwt.sign(
      {
        productId,
        packageId,
        userId,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "10m",
      }
    );

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price: productId,
          quantity: 1,
        },
      ],
      mode: "subscription",
      success_url: `${process.env.CLIENT_URL}/success/${token}/${userId}/${packageId}/${token}`,
      cancel_url: `${process.env.CLIENT_URL}/failed`,
      // metadata: {
      //   userId: _id, // Add your custom data here
      // },
    });

    res.json({ sessionId: session.id });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Subscription creation failed" });
  }
};

// update user subscription plan controller
const updateUserSubscriptionPlanController = async (req, res) => {
  try {
    const { userId, packageId } = req.body || {};

    const packageData = await Package.findById(packageId);
    const user = await User.findById(userId);

    // create new subscription

    // calculate subscription end date
    const currentDate = new Date();

    // Add 30 days to the current date
    const futureDate = new Date(currentDate);
    futureDate.setDate(currentDate.getDate() + 30);

    const newSubscription = new Subscription({
      user: user?._id,
      package: packageData?._id,
      price: packageData?.price,
      startDate: new Date(),
      endDate: futureDate,
    });

    await newSubscription.save();

    // update user subscriptions
    user.subscriptions = [...user?.subscriptions, newSubscription?._id];
    user.plan = packageData?.name;
    user.refreshDate = futureDate;
    await user.save();

    // create new activity
    const newActivity = new Activity({
      time: new Date(),
      user: user?._id,
      activity: `Purchase New Subscription Plan - ${packageData?.name}`,
    });

    await newActivity.save();

    res.status(201).json({ newSubscription, user });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: "Server error occurred",
    });
  }
};

// delete package controller
const deletePackageController = async (req, res) => {
  try {
    const { id } = req.params || {};
    const deletedPackage = await Package.findByIdAndDelete(id);
    res.status(200).json(deletedPackage);
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: "Server error occurred!",
    });
  }
};

module.exports = {
  getAllPackagesController,
  getAllSubscriptionsController,
  getAllSubscriptionsByUserIdController,
  createNewPackageController,
  deletePackageController,
  subscribePackageController,
  updateUserSubscriptionPlanController,
};
