const { Schema } = require("mongoose");
const mongoose = require("mongoose");

const schema = mongoose.Schema(
  {
    property_name: { type: String, required: true },
    property_location: { type: String, required: true },
    property_owner: {
      type: Schema.Types.ObjectId,
      require: true,
      ref: "user",
    },
    property_type: {
      type: String,
      required: true,
    },
    property_images: {
      type: Array,
      required: true,
    },
    bedrooms: {
      type: Number,
      required: true,
    },
    bathrooms: {
      type: Number,
      required: true,
    },
    total_sqft: {
      type: Number,
      required: true,
    },
    original_amount: {
      type: Number,
      required: true,
    },
    discounted_amount: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

const propert_model = mongoose.model("property", schema);

module.exports = propert_model;
