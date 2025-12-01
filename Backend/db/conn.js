const mongoose = require("mongoose");
// const dotenv = require("dotenv");

// dotenv.config({ path: "../config.env" });
// const DB = process.env.DATABASE;

mongoose.set("strictQuery", true);

mongoose
  .connect(
    "mongodb+srv://bhakti:bhakti@cluster0.yrhhfqw.mongodb.net/"
  )
  .then(() => {
    console.log(`connect succeesfully`);
  })
  .catch((err) => {
    console.log(err);
  });
