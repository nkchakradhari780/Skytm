const bcrypt = require("bcrypt");
const userModel = require("../models/userModel");
const jwt = require("jsonwebtoken");

module.exports.createUser = async (req, res) => {
  try {
    let { fullName, email, password, phoneNumber, gender, imageUrl, isAdmin } =
      req.body;

    let user = await userModel.findOne({ email });
    console.log("User:", user);
    if (user) return res.status(401).send("User Already Exists");

    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(password, salt, async (err, hash) => {
        if (err) return res.send(err.message);
        else {
          let user = await userModel.create({
            fullName,
            email,
            password: hash,
            phoneNumber,
            gender,
            imageUrl,
            isAdmin,
          });
          console.log("Owner Created:", user);
          res.status(200).send("Owner Created");
        }
      });
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Internal Server Error");
  }
};

module.exports.loginUser = async (req, res) => {
  console.log("method:;", req.method);
  if (req.method === "POST") {
    try {
      const { email, password } = req.body;

      let user = await userModel.findOne({ email });

      if (!user)
        return res
          .status(404)
          .json({ success: false, message: "Email or password is incorrect" });

      bcrypt.compare(password, user.password, (err, result) => {
        if (err) {
          return res.status(500).send("Internal Server Error while LoginIn");
        }
        if (result) {
          const token = jwt.sign(
            { Id: user._id, isAdmin: user.isAdmin, email: user.email },
            process.env.JWT_KEY
          );

          res.cookie("token", token, {
            httpOnly: true,
            secure: false,
            maxAge: 3600000,
          });

          return res
            .status(200)
            .json({ success: true, message: "LoggedIn Successfully" });
        } else {
          return res
            .status(401)
            .json({
              success: false,
              message: "Email or password is incorrect",
            });
        }
      });
    } catch (err) {
      console.error("Error:", err.message);
      res.status(401).json({ success: true, message: "Internal Server Error" });
    }
  } else {
    console.log("method", req.method);
    res.status(405).json({ success: false, message: "Method not allowed" });
  }
};
