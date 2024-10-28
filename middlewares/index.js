const multer = require("multer");
const path = require("path");

///Middleware for upload an image to the public
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    console.log(req.body);
    cb(null, path.join(__dirname, "../public"));
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now();
    cb(null, file.fieldname + "-" + uniqueSuffix + "-" + file.originalname);
  },
});

exports.uploadImage = multer({ storage: storage });
