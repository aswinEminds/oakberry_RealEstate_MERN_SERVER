const express = require("express");
const UserController = require("../controllers/UserController");

const router = express.Router();
const user = new UserController();

router.post("/register", user.register);

module.exports = router;
