const Team = require("../models/Team");
const Jimp = require("jimp");
const path = require("path");
const User = require("../models/User");

// get joined teams controller
const getJoinedTeamsController = async (req, res) => {
  try {
    const { _id } = req.user || {};
    const teams = await Team.find({
      members: {
        $elemMatch: {
          user: _id,
          status: "joined",
        },
      },
    });

    res.status(200).json(teams);
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: "Server error occurred!",
    });
  }
};

// get single team controller
const getSingleTeamController = async (req, res) => {
  try {
    const { id } = req.params || {};
    const team = await Team.findById(id).populate("members.user");
    res.status(200).json(team);
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: "Server error occurred!",
    });
  }
};

// get team templates controller
const getTeamTemplatesController = async (req, res) => {
  try {
    const { id, type } = req.params || {};
    const team = await Team.findById(id).populate({
      path: "templates",
      match: { type },
    });

    res.status(200).json(team?.templates);
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: "Server error occurred!",
    });
  }
};

// get team galleries controller
const getTeamGalleriesController = async (req, res) => {
  try {
    const { id, type } = req.params || {};
    const team = await Team.findById(id).populate({
      path: "galleries",
      match: { type },
    });

    res.status(200).json(team?.galleries);
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: "Server error occurred!",
    });
  }
};

// get team peding members controller
const getTeamPendingMembersController = async (req, res) => {
  try {
    const { id } = req.params || {};
    const team = await Team.findOne({
      _id: id,
      "members.status": "pending",
    }).populate("members.user");

    res.status(200).json(team?.members);
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: "Server error occurred!",
    });
  }
};

// join team controller
const joinTeamController = async (req, res) => {
  try {
    const { _id } = req.user || {};
    const { code } = req.params || {};

    const team = await Team.findOne({ code });

    if (!team) {
      return res.status(400).json({
        error: {
          code: "Team is not found!",
        },
      });
    }

    // join team member
    team.members = [
      ...team.members,
      {
        user: _id,
        status: "pending",
        role: "user",
      },
    ];
    await team.save();

    res.status(200).json(team);
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: "Server error occurred!",
    });
  }
};

// approve team member controller
const approveTeamMemberController = async (req, res) => {
  try {
    const { memberId } = req.body || {};
    const { id } = req.params || {};

    const updatedTeam = await Team.findOneAndUpdate(
      {
        _id: id,
        "members.user": memberId,
      },
      {
        $set: {
          "members.$.status": "joined",
        },
      },
      { new: true }
    );

    // find member user model and update teams array
    const user = await User.findById(memberId);
    user.teams = [...user?.teams, updatedTeam?._id];
    await user.save();

    res.status(200).json(updatedTeam);
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: "Server error occurred!",
    });
  }
};

// create new team controller
const createNewTeamController = async (req, res) => {
  try {
    const { name, description, code, logo } = req.body || {};
    const { _id } = req.user || {};

    // upload team logo
    let imagePath;

    if (logo) {
      // upload image
      const buffer = Buffer.from(
        logo.replace(/^data:image\/(png|jpg|jpeg);base64,/, ""),
        "base64"
      );

      imagePath = `${Date.now()}-${Math.round(Math.random() * 1e9)}.png`;

      try {
        const jimpResp = await Jimp.read(buffer);
        jimpResp
          .resize(300, 300)
          .write(
            path.resolve(__dirname, `../public/storage/team/${imagePath}`)
          );
      } catch (err) {
        return res.status(500).json({
          error: "Could not process the image!!",
        });
      }
    }

    // create new team
    const newTeam = new Team({
      name,
      description,
      code,
      logo: imagePath ? `/storage/team/${imagePath}` : "",
      members: [
        {
          user: _id,
          role: "admin",
          status: "joined",
        },
      ],
      admin: _id,
      templates: [],
      galleries: [],
    });

    await newTeam.save();

    res.status(201).json(newTeam);
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: "Server error occurred!",
    });
  }
};

// leave team controller
const leaveTeamController = async (req, res) => {
  try {
    const { id } = req.params || {};
    const { _id } = req.user || {};

    const updatedTeam = await Team.findOneAndUpdate(
      { _id: id },
      { $pull: { members: { user: _id } } },
      { new: true }
    );

    // delete team id from user teams array
    if (updatedTeam) {
      await User.findOneAndUpdate(
        { _id },
        { $pull: { teams: updatedTeam?._id } },
        { new: true }
      );
    }

    res.status(200).json(updatedTeam);
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: "Server error occurred!",
    });
  }
};

// update team controller
const updateTeamController = async (req, res) => {
  try {
    const { id } = req.params || {};
    const { logo } = req.body || {};

    // upload team logo
    let imagePath;

    if (logo && logo?.includes("data:image")) {
      // upload image
      const buffer = Buffer.from(
        logo.replace(/^data:image\/(png|jpg|jpeg);base64,/, ""),
        "base64"
      );

      imagePath = `${Date.now()}-${Math.round(Math.random() * 1e9)}.png`;

      try {
        const jimpResp = await Jimp.read(buffer);
        jimpResp
          .resize(300, 300)
          .write(
            path.resolve(__dirname, `../public/storage/team/${imagePath}`)
          );
      } catch (err) {
        return res.status(500).json({
          error: "Could not process the image!!",
        });
      }
    }

    // update team
    let updatedData;
    if (imagePath) {
      updatedData = { ...req.body, logo: `/storage/team/${imagePath}` };
    } else {
      updatedData = { ...req.body };
    }

    const updatedTeam = await Team.findByIdAndUpdate(
      id,
      { $set: updatedData },
      { new: true }
    );

    res.status(200).json(updatedTeam);
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: "Server error occurred!",
    });
  }
};

// delete team controller
const deleteTeamController = async (req, res) => {
  try {
    const { id } = req.params || {};
    const deletedTeam = await Team.findByIdAndDelete(id);
    res.status(200).json(deletedTeam);
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: "Server error occurred!",
    });
  }
};

module.exports = {
  getJoinedTeamsController,
  getSingleTeamController,
  getTeamTemplatesController,
  getTeamGalleriesController,
  getTeamPendingMembersController,
  joinTeamController,
  approveTeamMemberController,
  createNewTeamController,
  leaveTeamController,
  updateTeamController,
  deleteTeamController,
};
