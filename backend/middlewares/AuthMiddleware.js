const User = require("../model/UsersModel");
require("dotenv").config();
const jwt = require("jsonwebtoken");

module.exports.userVerification = (req, res) => {
  console.log("User verification request received");
  console.log("Cookies:", req.cookies);
  const token = req.cookies.token
  if (!token) {
    console.log("No token found in cookies");
    return res.json({ status: false })
  }
  jwt.verify(token, process.env.TOKEN_KEY, async (err, data) => {
    if (err) {
     console.log("JWT verification failed:", err.message);
     return res.json({ status: false })
    } else {
      console.log("JWT verified successfully, user ID:", data.id);
      const user = await User.findById(data.id)
      if (user) {
        console.log("User found:", user.username);
        res.locals.User_id=data.id;
        return res.json({ status: true, user: user.username ,user_id:user._id })
      }
      else {
        console.log("User not found in database");
        return res.json({ status: false })
      }
    }
  })
}