const User = require("../model/UsersModel");
const { createSecretToken } = require("../util/SecretToken");
const bcrypt = require("bcryptjs");


module.exports.Signup = async (req, res, next) => {
  try {
    const { email, password, username } = req.body;
    if(!email || !password || !username){
      return res.json({success:false,message:'All fields are required'})
    }
   
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(200).json({success:false, message: "User already exists" });
    }

    // 🔧 Create user and save manually to trigger pre("save")
    const newUser = new User({ email, password, username });
    const savedUser = await newUser.save(); // ✅ triggers pre-save hook

    const token = createSecretToken(savedUser._id);
    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: false,
      secure: process.env.NODE_ENV === 'production',
      sameSite: process.env.NODE_ENV === 'production' ? "None" : "Lax",
    });

    res.status(201).json({
      message: "User signed up successfully",
      success: true,
      user: savedUser,
    });

    next();
  } catch (error) {
    console.error("Signup error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};


module.exports.Login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if(!email || !password ){
      return res.json({success: false, message:'All fields are required'})
    }
    const user = await User.findOne({ email });
    if(!user){
      return res.json({success: false, message:'Incorrect password or email' }) 
    }
    const auth = await bcrypt.compare(password,user.password)
    if (!auth) {
      return res.json({success: false, message:'Incorrect password or email' }) 
    }
     const token = createSecretToken(user._id);
     console.log("Token created:", token);
     res.cookie("token", token, {
       httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: process.env.NODE_ENV === 'production' ? "None" : "Lax",
    
     });
     console.log("Cookie set successfully");
    
     res.status(201).json({ message: "User logged in successfully", success: true });
  } catch (error) {
    console.error(error);
  }
}