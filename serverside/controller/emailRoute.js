require("dotenv").config();
const jwt = require("jsonwebtoken");
const express = require("express");
const app = express.Router();
const otpGenerator = require("otp-generator");
const UserModel = require("../models/users/UserSchema");
const send_mail = require("./email");
const argon2 = require("argon2");
app.post("/signup", async (req, res) => {
  const { email, password, role } = req.body;
  const hash = await argon2.hash(password);
  const users = new UserModel({
    email,
    password: hash,
    role,
  });
  await users.save();
  return res.status(201).send(users);
});

//login route

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const otp = otpGenerator.generate(6, {
    upperCaseAlphabets: false,
    specialChars: false,
    lowerCaseAlphabets: false,
  });

  const user = await UserModel.findOne({ email });
  send_mail(otp, user.email);
  try {
    if (await argon2.verify(user.password, password)) {
      const token = jwt.sign(
        {
          id: user._id,
          email: user.email,
          role: user.role,
        },
        process.env.SECRET_KEY,
        {
          expiresIn: "7 days",
        }
      );
      console.log(token);
      const refreshtoken = jwt.sign({ id: user._id }, process.env.REFRESH_KEY, {
        expiresIn: "28 days",
      });

      return res.status(201).send({
        message: "login successfully",
        token: token,
        refresh: refreshtoken,
      });
    } else {
      res.status(401).send("INVALID CREDENTIALS");
    }
  } catch (e) {
    res.status(401).send("INVALID CREDENTIALS");
  }
});
module.exports = app;
