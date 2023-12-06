const Package = require("../models/Package");

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

// create new package controller
const createNewPackageController = async (req, res) => {
  try {
    const { name, price, offers } = req.body || {};
    const newPackage = new Package({
      name,
      price,
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
  createNewPackageController,
  deletePackageController,
};
