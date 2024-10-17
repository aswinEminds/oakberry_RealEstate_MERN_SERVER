const userModel = require("../models/user_model");

class UserController {
  //To register the new user
  register = async (req, res) => {
    try {
      const { name, email, mobileNumber, password, profilePicture } = req.body;
      const exists = await userModel.findOne({ email });
      console.log(exists);
      if (exists) {
        return res.status(401).send("User Aldredy Exists");
      }
      const new_user = await userModel.create({
        name,
        email,
        mobileNumber,
        password,
        profilePicture,
      });
      if (new_user) {
        console.log(new_user);
        return res.status(201).send(new_user);
      } else {
        return res.status(401).send("Error Creating User");
      }
    } catch (e) {
      return res.status(501).send(`Opps Something went Wrong! ${e}`);
    }
  };
}

module.exports = UserController;
