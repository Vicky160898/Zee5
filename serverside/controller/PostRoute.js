const express = require("express");
const app = express.Router();
const TelevisionSchema = require("../models/Admin/userSchema");

app.post("/add", async (req, res) => {
  const { title, url, category } = req.body;
  try {
    const data = await TelevisionSchema.findOne({ url });
    if (!data) {
      const newData = new TelevisionSchema({
        title,
        url,
        category,
      });
      await newData.save();
      return res.status(200).send(newData);
    } else {
      return res.send("data already present");
    }
  } catch (err) {
    res.status(500).send(e.message);
  }
});

//patch request here

app.patch("/update", async (req, res) => {
    const { title , url } = req.body;
    const hash = await argon2.hash(password);
    try {
      const user = await UserModel.updateOne(
        { email: email },
        { $set: { password: hash } }
      );
      if (user) {
        let otp = otpGenerator.generate(6, {
          upperCaseAlphabets: false,
          specialChars: false,
          lowerCaseAlphabets: false,
        });
        send_mail("brother your updated password otp here", otp, email);
        return res.status(201).send(otp);
      } else {
        return res.status(401).send("email not found");
      }
    } catch (e) {
      res.status(403).send("error");
    }
  });

module.exports = app;
