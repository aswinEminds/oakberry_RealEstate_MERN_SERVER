require("dotenv").config();
const mongoose = require("mongoose");

exports.PORT = process.env.PORT;
exports.CRYPTO_KEY = process.env.CRYPTO_KEY;
exports.JWT_KEY = process.env.JWT_KEY;

exports.dbConnect = async () => {
  try {
    const con = await mongoose.connect(process.env.MONGO_URL);
    console.log(`database connected on Database: ${con.connection.host}`);
  } catch (e) {
    console.log(`ERROR connecting Database ${e}`);
  }
};
