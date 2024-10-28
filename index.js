const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { PORT, dbConnect } = require("./config/config");
const authRouter = require("./routers/auth_router");
const agentsRouter = require("./routers/agents_router");
const propertyRouter = require("./routers/property_router");
const { uploadImage } = require("./middlewares");
const path = require("path");

const app = express();

app.use(cors());
app.use(bodyParser.json());
dbConnect();

//routers.
app.use("/api/auth", authRouter);
app.use("/api/agents", agentsRouter);
app.use("/api/properties", propertyRouter);

//To make the public folder static
app.use("/uploads", express.static(path.join(__dirname, "public")));

//to upload an image to the backend:
app.post("/api/upload-image", uploadImage.single("file"), (req, res) => {
  const { filename } = req.file;
  const url = `http://${req.hostname}:${PORT}/uploads/${filename}`;
  res.status(200).send(url);
});

//root of the app.
app.get("/", (req, res) => {
  return res.status(200).send("Root of the server");
});

app.listen(PORT, () => {
  console.log(`Server is started on ${PORT}`);
});
