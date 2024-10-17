const { name } = require("body-parser");
const mongoose = require("mongoose");

const schema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  mobileNumber: {
    type: Number,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  profilePicture: {
    type: String,
    required: false,
    default: "",
  },
  propertiesCount: {
    type: Number,
    required: false,
    default: 0,
  },
});

const userModel = mongoose.model("user", schema);

module.exports = userModel;
