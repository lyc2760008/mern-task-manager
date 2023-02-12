const express = require("express");
const dotenv = require("dotenv").config();

const mongoose = require("mongoose");

const app = express();

const port = process.env.PORT || 3002;

mongoose
  .set("strictQuery", false)
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  })
  .catch((err) => console.log(err));

app.get((req, res) => {
  res.send("Hello World!");
});
