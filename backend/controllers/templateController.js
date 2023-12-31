const crypto = require("crypto");
const { TemplateFolder, Template } = require("../models/Template");
const User = require("../models/User");

// get single template controller
const getSingleTemplateController = async (req, res) => {
  try {
    const { id } = req.params || {};
    const template = await Template.findById(id).populate("posts");
    res.status(200).json(template);
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: "Server error occurred!!",
    });
  }
};

// get all templates controller
const getAllTemplatesController = async (req, res) => {
  try {
    const { _id } = req.user || {};
    const { type, team, user } = req.params || {};
    let templates;

    if (team && team !== "not-found") {
      templates = await Template.find({ team, type });
    } else {
      templates = await Template.find({
        user: user !== "not-found" ? user : _id,
        type,
      });
    }

    res.status(200).json(templates);
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: "Server error occurred!!",
    });
  }
};

// get all templates folder controller
const getAllTemplatesFolderController = async (req, res) => {
  try {
    const { _id } = req.user || {};
    const { type, team, user } = req.params || {};
    let templateFolders;

    if (team && team !== "not-found") {
      templateFolders = await TemplateFolder.find({ team, type });
    } else {
      templateFolders = await TemplateFolder.find({
        user: user !== "not-found" ? user : _id,
        type,
      });
    }

    res.status(200).json(templateFolders);
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: "Server error occurred!!",
    });
  }
};

// create new template folder controller
const createNewTemplateFolderController = async (req, res) => {
  try {
    const { _id } = req.user || {};
    const { title, type, team, user } = req.body || {};

    // create new folder
    const newFolder = new TemplateFolder({
      title,
      user: user || _id,
      templates: [],
      type,
      team,
    });

    await newFolder.save();

    res.status(201).json(newFolder);
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: "Server error occurred!!",
    });
  }
};

// create new template controller
const createNewTemplateController = async (req, res) => {
  try {
    const { _id } = req.user || {};
    const { title, description, type, team, user } = req.body || {};

    // generate template unique code
    const code = crypto.randomBytes(4).toString("hex");

    // create template
    const newTemplate = new Template({
      title,
      description,
      user: user || _id,
      code,
      type,
      team,
    });

    await newTemplate.save();

    // update user model
    const newUser = await User.findById(_id);
    newUser.templates = [...newUser?.templates, newTemplate?._id];
    await newUser.save();

    res.status(201).json(newTemplate);
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: "Server error occurred!!",
    });
  }
};

// import template controller
const importTemplateController = async (req, res) => {
  try {
    const { code, type } = req.body || {};
    const { _id } = req.user || {};

    const template = await Template.findOne({ code, type });

    if (!template?._id) {
      return res.status(400).json({
        error: {
          code: "Template not found!!",
        },
      });
    }

    if (template?.user === _id) {
      return res.status(400).json({
        error: {
          code: "Template is already exists!!",
        },
      });
    }

    // create template from imported template
    const { title, description } = template || {};
    const newTemplate = new Template({
      title,
      description,
      code,
      user: _id,
      type,
    });

    await newTemplate.save();

    // update user model
    const user = await User.findById(_id);
    user.templates = [...user?.templates, newTemplate?._id];

    res.status(201).json(newTemplate);
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: "Server error occurred!!",
    });
  }
};

// move to template folder controller
const moveToTemplateFolderController = async (req, res) => {
  try {
    const { id, folderId } = req.params || {};

    const template = await Template.findById(id);
    const templateFolder = await TemplateFolder.findById(folderId);

    // delete from template folder
    if (template?.folder) {
      await TemplateFolder.updateOne(
        { _id: template?.folder },
        { $pull: { templates: template?._id } }
      );
    }

    // update template
    template.folder = templateFolder._id;
    await template.save();

    // update template folder
    templateFolder.templates = [...templateFolder?.templates, template?._id];
    await templateFolder.save();

    res.status(200).json(template);
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: "Server error occurred!!",
    });
  }
};

// dublicate template controller
const dublicateTemplateController = async (req, res) => {
  try {
    const { id, title } = req.body || {};

    const template = await Template.findById(id);
    console.log("template", template);

    // create new template from template
    const { description, code, type, user, folder } = template || {};
    const newTemplate = new Template({
      title,
      description,
      code,
      type,
      user,
      folder,
    });

    await newTemplate.save();

    // update template folder
    if (folder) {
      const templateFolder = await TemplateFolder.findById(folder);
      templateFolder.templates = [
        ...templateFolder?.templates,
        newTemplate?._id,
      ];
      await templateFolder.save();
    }

    res.status(201).json(newTemplate);
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: "Server error occurred!!",
    });
  }
};

// delete template controller
const deleteTemplateController = async (req, res) => {
  const { id } = req.params || {};
  const deletedTemplate = await Template.findByIdAndDelete(id);
  console.log("Deleted template", deletedTemplate);
  // delete from template folder
  if (deletedTemplate?.folder) {
    await TemplateFolder.updateOne(
      { _id: deletedTemplate?.folder },
      { $pull: { templates: deletedTemplate?._id } }
    );
  }
  res.status(200).json(deletedTemplate);
};

module.exports = {
  getSingleTemplateController,
  getAllTemplatesController,
  getAllTemplatesFolderController,
  createNewTemplateFolderController,
  createNewTemplateController,
  importTemplateController,
  moveToTemplateFolderController,
  dublicateTemplateController,
  deleteTemplateController,
};
