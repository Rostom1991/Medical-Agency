const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const contactRoutes = require("./routes/contactRoutes");
const userRoutes = require("./routes/userRoutes");
const applyRoutes = require("./routes/applyRoutes");
require("dotenv").config();

const app = express();
const port = process.env.PORT;
const mongo = process.env.MONGO;

//MIDDLEWARES
app.use(cors());
app.use(express.json());
app.use("/contact", contactRoutes);
app.use("/", userRoutes);
app.use("/apply", applyRoutes);
mongoose
  .connect(mongo)
  .then(() => console.log("Connected To Database"))
  .catch((error) => console.log(error));

app.listen(port, () => console.log("Server Running"));
