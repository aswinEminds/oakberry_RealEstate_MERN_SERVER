const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { PORT, dbConnect } = require("./config/config");
const authRouter = require("./routers/auth_router");
const agentsRouter = require("./routers/agents_router");
const propertyRouter = require("./routers/property_router");

const app = express();

app.use(cors());
app.use(bodyParser.json());
dbConnect();

//routers.
app.use("/api/auth", authRouter);
app.use("/api/agents", agentsRouter);
app.use("/api/properties", propertyRouter);

//root of the app.
app.get("/", (req, res) => {
  return res.status(200).send("Root of the server");
});

app.listen(PORT, () => {
  console.log(`Server is started on ${PORT}`);
});
