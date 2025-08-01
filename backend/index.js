require("dotenv").config();


const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require("cookie-parser");
const authRoute = require("./Routes/AuthRoute");

const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;


const {HoldingsModel}= require("./model/HoldingsModel");
const {PositionsModel}= require("./model/PositionsModel");
const {OrdersModel} = require('./model/OrdersModel');
const {WatchlistModel} = require('./model/WatchlistModel');
const VerifyUser = require('./middlewares/VeriifyUser');
const UsersModel = require("./model/UsersModel");
const bcrypt = require("bcryptjs");

const app = express();


mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB is  connected successfully"))
  .catch((err) => console.error(err));

  app.use(cors({
    origin: true ,
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  }));

  // Add this line here:
app.use(express.urlencoded({ extended: true }));

// Only use express.json() for JSON body parsing
app.use(express.json());

app.use(cookieParser());


// Debug middleware to log incoming request bodies
app.use((req, res, next) => {
  console.log("[DEBUG] Incoming request body:", req.body);
  next();
});




app.use("/", authRoute);


// get allholdings
app.get("/allholdings",VerifyUser,async(req,res)=>{
    let user = await UsersModel.findById(req.user._id).populate("holdings");
    res.json(user.holdings);
})

// get all orders
app.get("/allorders",VerifyUser,async(req,res)=>{
    let user = await UsersModel.findById(req.user._id).populate("orders");
    res.json(user.orders);
})

// get all positions
app.get("/allpositions",async(req,res)=>{
    let allPositions = await PositionsModel.find({});
    res.json(allPositions);
})

// watch list
app.get("/watchlist",async(req,res)=>{
    let allWatchlist = await WatchlistModel.find({});
    res.json(allWatchlist);
})

// new order place
app.post("/newOrder",VerifyUser,async(req,res)=>{
    const now = new Date();
    const date = now.toLocaleDateString(); 
    const time = now.toLocaleTimeString();

    let new_order = new OrdersModel({
        name: req.body.name,
        qty:req.body.qty ,
        price: req.body.avg_price,
        mode: req.body.mode,
        date:date,
        time:time,
    });

    

    let user = await UsersModel.findById(req.user._id).populate("holdings");

    // check the balance 
    if(user.balance<req.body.qty*req.body.avg_price){
        res.status(200).json({success:false, message: "you have not sufficent Balance!"});
    }
    else{
        // stock match
        const matches = user.holdings.filter((item) => item.name === req.body.name);
        
        if(matches.length>0){
            matches[0].qty = Number(matches[0].qty) + Number(req.body.qty);
            
            const totalQty = matches[0].qty;
            const oldQty = Number(matches[0].qty) - Number(req.body.qty); // previous qty
            const oldAvg = Number(matches[0].avg);
            const newQty = Number(req.body.qty);
            const newAvg = Number(req.body.avg_price);

            const totalAvg = ((oldAvg * oldQty) + (newAvg * newQty)) / totalQty;

            matches[0].avg = Number(totalAvg.toFixed(2));
            matches[0].net = Number((((matches[0].price - matches[0].avg) / matches[0].avg) * 100).toFixed(2));

            user.balance=user.balance-(req.body.qty*req.body.avg_price);
            user.orders.push(new_order);
            await matches[0].save();
            await user.save();
            await new_order.save();

            res.status(200).json({success:true, message: "New Order added successfully"});
        }
        else{
            let net1=((req.body.price-req.body.avg_price)/req.body.avg_price)*100;
            let new_holding = new HoldingsModel({
                name: req.body.name,
                qty: req.body.qty,
                avg: req.body.avg_price,
                price: req.body.price,
                net: net1.toFixed(2),
                day: req.body.percent,
            })
            
            user.balance=user.balance-(req.body.qty*req.body.avg_price);
            user.orders.push(new_order);
            user.holdings.push(new_holding);
            await user.save();
            await new_order.save();
            await new_holding.save();
            res.status(200).json({success: true, message: "New Order added successfully"});
        }
    }
})

// sell order place
app.post("/sellOrder",VerifyUser,async(req,res)=>{
    const now = new Date();
    const date = now.toLocaleDateString(); 
    const time = now.toLocaleTimeString();

    let new_order = new OrdersModel({
        name: req.body.name,
        qty:req.body.qty ,
        price: req.body.avg_price,
        mode: req.body.mode,
        date:date,
        time:time,
    });

    let User= await UsersModel.findById({_id : req.user._id}).populate("holdings");
    let match = User.holdings.find((stock)=>stock.name===req.body.name);
    
    if(req.body.qty===match.qty){
        let deleteHolding = await HoldingsModel.findOneAndDelete({name:req.body.name});
        User.balance=User.balance+(req.body.qty*req.body.avg_price);
        User.orders.push(new_order);
        await User.save();
        await new_order.save(); 
        console.log(deleteHolding);
       res.status(200).json({ success: true, message: "Your share is sell successful" });        
    }
    else{
        match.qty=match.qty-req.body.qty;
        User.balance=User.balance+(req.body.qty*req.body.avg_price);
        User.orders.push(new_order);
        await match.save();
        await User.save();
        await new_order.save(); 
        res.status(200).json({ success: true, message: "Your share is sell successful" });
    }
  
})

// add money
app.post("/addMoney",VerifyUser,async(req,res)=>{
    const {amount,password}=req.body;
    
    if (!password || !amount) {
        return res.status(200).json({success:false, message: "Password and amount are required" });
    }

    try {
        const user = await UsersModel.findById(req.user._id); 

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
        return res.status(200).json({success:false, message: "Incorrect password" });
        }

        user.balance = user.balance + Number(amount);
        await user.save();

        res.status(200).json({success:true, message: "Money added successfully", balance: user.balance });

    } catch (error) {
        console.error("Error in addMoney:", error);
        res.status(200).json({success:false, message: "Server error" });
    }
})

// withdraw money
app.post("/withdrawMoney",VerifyUser,async(req,res)=>{
    const {amount,password}=req.body;
    
    if (!password || !amount) {
        return res.status(200).json({success:false, message: "Password and amount are required" });
    }

    try {
        const user = await UsersModel.findById(req.user._id); 

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
        return res.status(200).json({success:false, message: "Incorrect password" });
        }
        if(user.balance>Number(amount)){
            user.balance = user.balance - Number(amount);
            await user.save();
        }else{
            res.status(200).json({success:false, message: "Error in you add more money" });
        }
        res.status(200).json({success:true, message: "Money added successfully", balance: user.balance });

    } catch (error) {
        res.status(200).json({success:false, message: "Server error" });
    }
})

//get user data
app.get("/userData",VerifyUser,async(req,res)=>{
    let user = await UsersModel.findById(req.user._id).populate("holdings");
    res.json(user);
})

// insert into watchlist
// app.get("/watchlist",async(req,res)=>{
//     const watchlist = [
//   { name: "INFY", price: 1555.45, percent: -1.60, isDown: true },
//   { name: "ONGC", price: 116.8, percent: -0.09, isDown: true },
//   { name: "TCS", price: 3194.8, percent: -0.25, isDown: true },
//   { name: "KPITTECH", price: 266.45, percent: 3.54, isDown: false },
//   { name: "QUICKHEAL", price: 308.55, percent: -0.15, isDown: true },
//   { name: "WIPRO", price: 577.75, percent: 0.32, isDown: false },
//   { name: "M&M", price: 779.8, percent: -0.01, isDown: true },
//   { name: "RELIANCE", price: 2112.4, percent: 1.44, isDown: false },
//   { name: "HUL", price: 512.4, percent: 1.04, isDown: false },
//   { name: "HDFC", price: 2643.3, percent: -0.65, isDown: true },
//   { name: "ICICIBANK", price: 970.5, percent: 0.57, isDown: false },
//   { name: "SBIN", price: 598.6, percent: 1.21, isDown: false },
//   { name: "AXISBANK", price: 1098.1, percent: -0.37, isDown: true },
//   { name: "ITC", price: 443.0, percent: -0.15, isDown: true },
//   { name: "LT", price: 3060.0, percent: 2.31, isDown: false },
//   { name: "BAJFINANCE", price: 7220.5, percent: -0.45, isDown: true },
//   { name: "DMART", price: 3985.0, percent: -0.82, isDown: true },
//   { name: "MARUTI", price: 10955.3, percent: 1.65, isDown: false },
//   { name: "HCLTECH", price: 1350.1, percent: -0.55, isDown: true },
//   { name: "ADANIENT", price: 3021.3, percent: 0.93, isDown: false },
//   { name: "NTPC", price: 292.7, percent: -1.02, isDown: true },
//   { name: "TITAN", price: 3578.6, percent: 1.27, isDown: false },
//   { name: "COALINDIA", price: 427.9, percent: 0.23, isDown: false },
//   { name: "SUNPHARMA", price: 1250.4, percent: -0.33, isDown: true },
//   { name: "ULTRACEMCO", price: 9130.0, percent: 2.14, isDown: false },
//   { name: "DRREDDY", price: 5950.0, percent: -0.76, isDown: true },
//   { name: "DIVISLAB", price: 3850.5, percent: -0.41, isDown: true },
//   { name: "BHARTIARTL", price: 1099.9, percent: 0.85, isDown: false },
//   { name: "JSWSTEEL", price: 895.2, percent: -1.09, isDown: true },
//   { name: "HINDALCO", price: 565.6, percent: 0.39, isDown: false },
//   { name: "ADANIPORTS", price: 1254.4, percent: 0.15, isDown: false },
//   { name: "POWERGRID", price: 281.3, percent: -0.26, isDown: true },
//   { name: "BPCL", price: 459.7, percent: 0.92, isDown: false },
//   { name: "HEROMOTOCO", price: 4970.2, percent: 1.14, isDown: false },
//   { name: "BAJAJ-AUTO", price: 8720.8, percent: -0.72, isDown: true },
//   { name: "EICHERMOT", price: 3689.4, percent: 0.58, isDown: false },
//   { name: "TATACONSUM", price: 1190.3, percent: -0.18, isDown: true },
//   { name: "BRITANNIA", price: 5090.5, percent: 0.46, isDown: false },
//   { name: "GRASIM", price: 2130.7, percent: 1.09, isDown: false },
//   { name: "CIPLA", price: 1260.8, percent: -0.63, isDown: true },
//   { name: "SHREECEM", price: 27240.1, percent: 0.97, isDown: false },
//   { name: "VEDL", price: 315.9, percent: 1.01, isDown: false },
//   { name: "AMBUJACEM", price: 550.5, percent: -0.34, isDown: true },
//   { name: "TATAPOWER", price: 432.7, percent: 0.26, isDown: false },
//   { name: "BEL", price: 218.6, percent: -0.12, isDown: true },
//   { name: "DABUR", price: 550.1, percent: 0.42, isDown: false },
//   { name: "PIDILITIND", price: 2940.2, percent: 1.35, isDown: false },
//   { name: "NAVINFLUOR", price: 3610.4, percent: -0.88, isDown: true },
//   { name: "ZYDUSLIFE", price: 695.5, percent: 0.77, isDown: false }
//     ];

//     for(const stock of watchlist){
//         const newWatchlist = new WatchlistModel({
//             name:stock.name,
//             price:stock.price,
//             percent:stock.percent,
//             isDown: stock.isDown,
//         });

//         await newWatchlist.save()
//     }
// })


app.listen(PORT,()=>{
    console.log(`App Started! ${PORT}`);
})