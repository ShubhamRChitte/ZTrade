const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const {HoldingsModel}= require("./HoldingsModel");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Your email address is required"],
    unique: true,
  },
  username: {
    type: String,
    required: [true, "Your username is required"],
  },
  password: {
    type: String,
    required: [true, "Your password is required"],
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
  orders:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"order",
    }],
  holdings:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"holding",
    }],
  positions:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"position",
    }],
  balance: {
    type: Number,
    default: 0
  }
});


userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 12);
  next();
});


module.exports = mongoose.model("User", userSchema);






