require("dotenv").config();
const cors = require("cors");
const express = require("express");
const connect = require("./config/db");
const GETREQUEST = require("./controller/GetRoute");
const POSTREQUEST = require("./controller/PostRoute");
const UserModel = require("./controller/emailRoute");
const PORT = process.env.PORT;

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

 app.use("/admin", GETREQUEST);
 app.use("/admin", POSTREQUEST);
 app.use("/", UserModel)


app.listen(PORT, async (req, res) => {
  await connect();
  console.log("server started on 8080");
});
