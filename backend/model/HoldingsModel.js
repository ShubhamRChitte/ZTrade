const {model} = require("mongoose");

const {HoldingsSchema} = require("../schemas/HoldingsSchema");

HoldingsSchema.post("findOneAndDelete", async function (deletedHolding) {
  if (deletedHolding) {
    
    const UsersModel=require('./UsersModel');
    await UsersModel.updateMany(
      { holdings: deletedHolding._id },
      { $pull: { holdings: deletedHolding._id } }
    );
    console.log("User reference to deleted holding removed.");
  }
});


const HoldingsModel = new model("holding",HoldingsSchema);

module.exports = {HoldingsModel};