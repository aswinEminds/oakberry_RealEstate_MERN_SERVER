const UserModel = require("../models/user_model");

class AgentsController {
  getAllAgents = async (req, res) => {
    try {
      const query = {
        propertiesCount: {
          $gt: 0,
        },
      };
      const agents = await UserModel.find(query);
      return res.status(200).send(agents);
    } catch (e) {
      return res.status(501).send("Internal Error");
    }
  };
}

module.exports = AgentsController;
