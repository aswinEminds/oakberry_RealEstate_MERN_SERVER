const express = require("express");
const AgentsController = require("../controllers/AgentController");

const router = express.Router();
const agents_controller = new AgentsController();

router.get("/getAllAgents", agents_controller.getAllAgents);

module.exports = router;
