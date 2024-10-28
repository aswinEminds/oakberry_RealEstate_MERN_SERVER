const userModel = require("../models/user_model");
const { encryptPassword, decryptPassword } = require("../lib");
const { JWT_KEY } = require("../config/config");
const jwt = require("jsonwebtoken");

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
      const encrypt_password = encryptPassword(password);
      const new_user = await userModel.create({
        name,
        email,
        mobileNumber,
        password: encrypt_password,
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

  //To login the new user
  login = async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await userModel.findOne({ email });
      if (user) {
        if (decryptPassword(user.password) === password) {
          const token = jwt.sign({ data: user.id }, JWT_KEY, {
            expiresIn: "1h",
          });
          return res.status(200).send(token);
        }
        return res.status(401).send("Incorrect Password");
      }
      return res.status(401).send("User Not Found");
    } catch (e) {
      return res.status(501).send(`Opps Something went Wrong! ${e}`);
    }
  };
}

module.exports = UserController;
