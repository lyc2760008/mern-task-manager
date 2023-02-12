const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URI);
    console.log(`Mongo Connected`);
  } catch (error) {
    console.log("ERROR!");
    process.exit(1);
  }
};

mongoose.set("strictQuery", true);

module.exports = connectDB;

/* The code below can be used as second methond to connect to mongodb --- needed to copy and pasted to server.js*/
// const startServer = async () => {
//   try {
//     await connectDB();
//     app.listen(PORT, () => {
//       console.log(`Server running on port ${PORT}`);
//     });
//   } catch (error) {
//     console.log("error!");
//   }
// };

// startServer();
