const express = require("express");
const UserController = require("../controllers/UserController");

const router = express.Router();
const user = new UserController();

router.post("/register", user.register);
router.post("/login", user.login);

module.exports = router;
