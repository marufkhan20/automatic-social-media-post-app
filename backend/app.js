const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const postScheduler = require("./services/postScheduler");
const {
  authRoutes,
  userRoutes,
  galleryRoutes,
  templateRoutes,
  postRoutes,
} = require("./routes");

if (process.env.NODE_ENV !== "production") {
  dotenv.config({
    path: ".env",
  });
}

const app = express();

// Start the cron scheduler
postScheduler.start();

app.use(
  cors({
    origin: [process.env.CLIENT_URL],
  })
);
app.use(express.json({ limit: "100mb" }));
app.use(bodyParser.urlencoded({ extended: false }));

// set public folder
app.use(express.static("public"));

// all routes
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/galleries", galleryRoutes);
app.use("/api/templates", templateRoutes);
app.use("/api/posts", postRoutes);
app.use("/", (req, res) => {
  res.json({ message: "Hello World" });
});

// database connection
mongoose
  .connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("database connection successful!"))
  .catch((err) => console.log("error", err));

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`SERVER IS RUNNING ON PORT ${PORT}`);
});
