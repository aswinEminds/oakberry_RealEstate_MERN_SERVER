const express = require("express");

const router = express.Router();

router.get("/getAllAgents", (req, res) => {
  return res.status(200).send("hello da users");
});

module.exports = router;
