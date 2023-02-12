const { response } = require("express");
const express = require("express");
const dotenv = require("dotenv").config();
//const connectDB = require("./config/connetDB");
const mongoose = require("mongoose");
const Task = require("./Models/taskModel");
const cors = require("cors");

const taskRoutes = require("./Routes/taskRoute");

const app = express();

const PORT = process.env.PORT || 3001;

mongoose
  .set("strictQuery", false) //get rid of strictQuery error
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => console.log(err));

//MiddleWare
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "https://my-pro-task-manager.herokuapp.com/",
    ],
  })
);
app.use("/api/v1/tasks", taskRoutes);

/*code block below is explaining what is middel ware*/
/*const logger = (req, res, next) => {
  console.log("this is middelware");
  next();
};*/

//routes
if (process.env.NODE_ENV === "production") {
  // Set static folder
  // All the javascript and css files will be read and served from this folder
  app.use(express.static("client/build"));

  // index.html for all page routes    html or routing and naviagtion
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./client", "build", "index.html"));
  });
}
