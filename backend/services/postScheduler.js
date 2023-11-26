const cron = require("node-cron");
// const axios = require('axios');
const Post = require("../models/Post"); // adjust the path accordingly

const postScheduler = cron.schedule("* * * * *", async () => {
  // Run this cron job every minute; adjust as needed

  const date = new Date();
  const currentDate = `${date.getDate()}-${
    date.getUTCMonth() + 1
  }-${date.getFullYear()}`;

  const hours =
    date.getHours().toLocaleString().length === 1
      ? `0${date.getHours()}`
      : date.getHours();
  const minutes =
    date.getMinutes().toLocaleString().length === 1
      ? `0${date.getMinutes()}`
      : date.getMinutes();

  const time = `${hours}:${minutes}`;

  try {
    const postsToPublish = await Post.find({ date: currentDate, time });

    if (postsToPublish.length > 0) {
      for (const post of postsToPublish) {
        // Publish the post to Facebook using the Facebook API
        // ...

        // Mark the post as published in your database
        post.published = true;
        await post.save();
      }
    }
  } catch (error) {
    console.error("Error in scheduling and publishing posts:", error);
  }
});

module.exports = postScheduler;
