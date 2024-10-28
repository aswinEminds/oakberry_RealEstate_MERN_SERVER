const express = require("express");
const PropertyController = require("../controllers/PropertyController");

const property_controller = new PropertyController();

const router = express.Router();

router.post("/add-property", property_controller.addProperty);
router.get("/get-property", property_controller.getProperty);

module.exports = router;
