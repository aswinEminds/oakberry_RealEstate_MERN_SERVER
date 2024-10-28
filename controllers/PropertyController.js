const propert_model = require("../models/property_model");
const { getUserIdFromTocken } = require("../lib");

class PropertyController {
  addProperty = async (req, res) => {
    const {
      property_name,
      property_location,
      property_owner,
      property_type,
      propert_images,
      bedrooms,
      bathrooms,
      total_sqft,
      original_amount,
      discounted_amount,
    } = req.body;

    const userId = getUserIdFromTocken(property_owner);

    const new_property = await propert_model.create({
      property_name,
      property_location,
      property_owner: userId,
      property_type,
      property_images: propert_images,
      bedrooms,
      bathrooms,
      total_sqft,
      original_amount,
      discounted_amount,
    });

    return res.send(new_property);
  };

  getProperty = async (req, res) => {
    const params = req.query;
    console.log(params);
    let query = {};
    if (params.type) query.property_type = { $eq: params.type };
    if (params.price) {
      query.original_amount = { $lt: Number(params.price.lt) };
    }
    if (params.location) query.property_location = { $eq: params.location };
    console.log(query);
    const props = await propert_model
      .find(query)
      .populate("property_owner", "name profilePicture")
      .exec();
    return res.send(props);
  };
}

module.exports = PropertyController;
