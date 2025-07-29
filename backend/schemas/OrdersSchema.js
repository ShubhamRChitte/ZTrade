const {Schema} = require("mongoose");
const OrdersSchema = new Schema({
    name: String,
    qty: Number,
    price: Number,
    mode: String,
    date:String,
    time:String,
});

module.exports = {OrdersSchema};