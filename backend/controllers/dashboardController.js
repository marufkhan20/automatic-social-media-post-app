const Documentation = require("../models/Documentation");
const Post = require("../models/Post");
const Subscription = require("../models/Subscription");
const Team = require("../models/Team");
const { Template } = require("../models/Template");
const User = require("../models/User");
const reportsTemplate = require("../services/reportsTemplate");
const puppeteer = require("puppeteer");

// get all dashboard information controller
const getAllDashboardInformationController = async (req, res) => {
  try {
    const result = await Subscription.aggregate([
      {
        $group: {
          _id: null,
          totalPrice: { $sum: "$price" },
        },
      },
    ]);

    let totalSales = 0;

    if (result.length > 0) {
      totalSales = result[0].totalPrice;
    }

    // get users and managers
    const users = await User.aggregate([
      {
        $match: { role: "user" },
      },
      {
        $lookup: {
          from: "subscriptions", // Use the name of your subscriptions collection
          localField: "subscriptions",
          foreignField: "_id",
          as: "subscriptionDetails",
        },
      },
      {
        $unwind: {
          path: "$subscriptionDetails",
          preserveNullAndEmptyArrays: true,
        },
      },
      {
        $group: {
          _id: "$_id",
          firstName: { $first: "$firstName" },
          lastName: { $first: "$lastName" },
          email: { $first: "$email" },
          profilePic: { $first: "$profilePic" },
          plan: { $first: "$plan" },
          role: { $first: "$role" },
          totalSpent: { $sum: { $ifNull: ["$subscriptionDetails.price", 0] } },
        },
      },
      {
        $sort: { totalSpent: -1 }, // Optional: Sort by totalPrice in descending order
      },
    ]);

    const managers = await User.aggregate([
      {
        $match: { role: "manager" },
      },
      {
        $lookup: {
          from: "subscriptions", // Use the name of your subscriptions collection
          localField: "subscriptions",
          foreignField: "_id",
          as: "subscriptionDetails",
        },
      },
      {
        $unwind: {
          path: "$subscriptionDetails",
          preserveNullAndEmptyArrays: true,
        },
      },
      {
        $group: {
          _id: "$_id",
          firstName: { $first: "$firstName" },
          lastName: { $first: "$lastName" },
          email: { $first: "$email" },
          profilePic: { $first: "$profilePic" },
          plan: { $first: "$plan" },
          role: { $first: "$role" },
          totalSpent: { $sum: { $ifNull: ["$subscriptionDetails.price", 0] } },
        },
      },
      {
        $sort: { totalSpent: -1 }, // Optional: Sort by totalPrice in descending order
      },
    ]);

    res.status(200).json({
      totalSales,
      users,
      managers,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: "Server error occurred!",
    });
  }
};

// get documentation controller
const getDocumentationController = async (req, res) => {
  try {
    const documentation = await Documentation.findOne();
    res.status(200).json(documentation);
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: "Server error occurred",
    });
  }
};

// generate reports controller
const generateReportController = async (req, res) => {
  try {
    const { startdate, enddate } = req.params || {};

    const result = await Subscription.aggregate([
      {
        $group: {
          _id: null,
          totalPrice: { $sum: "$price" },
        },
      },
    ]);

    let totalSales = 0;

    if (result.length > 0) {
      totalSales = result[0].totalPrice;
    }

    const users = await User.countDocuments({ role: "user" });
    const managers = await User.countDocuments({ role: "manager" });
    const posts = await Post.countDocuments();
    const templates = await Template.countDocuments();
    const teams = await Team.countDocuments();

    // generate pdf reports
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    // Replace this with your actual HTML content
    const htmlContent = reportsTemplate({
      totalSales,
      users,
      managers,
      posts,
      templates,
      teams,
      startDate: startdate,
      endDate: enddate,
    });

    // Set the HTML content of the page
    await page.setContent(htmlContent);

    // Generate PDF and send it as a response
    const pdfBuffer = await page.pdf({ format: "A4" });
    res.setHeader("Content-Type", "application/pdf");
    res.send(pdfBuffer);

    // Close the browser
    await browser.close();
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: "Server error occurred!",
    });
  }
};

// write documentation controller
const writeDocumentationController = async (req, res) => {
  try {
    const { userGuide, administorGuide, faq } = req.body || {};
    console.log("hello");

    const documentation = await Documentation.findOne();

    if (!documentation) {
      const newDocumentation = new Documentation({
        userGuide: userGuide || "",
        administorGuide: administorGuide || "",
        faqs: faq?.question ? [faq] : [],
      });

      await newDocumentation.save();

      res.status(200).json(newDocumentation);
    }

    documentation.userGuide = userGuide || documentation?.userGuide;
    documentation.administorGuide =
      administorGuide || documentation?.administorGuide;
    documentation.faqs = faq?.question
      ? [...documentation?.faqs, faq]
      : documentation?.faqs;

    await documentation.save();

    res.status(200).json(documentation);
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: "Server error occurred",
    });
  }
};

module.exports = {
  getAllDashboardInformationController,
  getDocumentationController,
  generateReportController,
  writeDocumentationController,
};
