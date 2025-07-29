import React, { useState,useContext,useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import {toast } from "react-toastify";

import GeneralContext from "./GeneralContext";

import "./BuyActionWindow.css";

const BuyActionWindow = ({ uid,price,percent }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(price);
  const [balance,setBalance]=useState(0);
  const { closeBuyWindow } = useContext(GeneralContext); 



  useEffect(()=>{
        axios.get("http://localhost:3002/userData",
          {
            withCredentials: true 
      }).then((res)=>{
          setBalance(res.data.balance); 
        })
  },[]);


  const handleBuyClick = async() => {
    const {data}= await axios.post("http://localhost:3002/newOrder", {
      name: uid,
      qty: stockQuantity,
      avg_price: stockPrice,
      mode: "BUY",
      price:price,
      percent:percent,
    }, 
    {
    withCredentials: true 
    });


    if (data.success) {
      toast.success(data.message);
    } else {
      toast.error("Failed to place order.");
    }

    closeBuyWindow();
  }

  const handleCancelClick = () => {
     closeBuyWindow();
  };



  return (
    <div className="container" id="buy-window" draggable="true">
      <div className="regular-order">
        <h2>{uid}</h2>
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              name="qty"
              id="qty"
              onChange={(e) => setStockQuantity(e.target.value)}
              value={stockQuantity}
            />
          </fieldset>
          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              name="price"
              id="price"
              step="0.05"
              onChange={(e) => setStockPrice(e.target.value)}
              value={stockPrice}
            />
          </fieldset>
        </div>
      </div>
      {balance<stockQuantity*stockPrice &&
        <div style={{color:"red",textAlign:"center",marginTop:"1rem"}}>
          <p>Available amount is not enough</p>
        </div>
        }
      <div className="buttons">
        <div>
          <Link
            className={`btn btn-blue ${balance < stockQuantity * stockPrice ? 'disabled' : ''}`}
            onClick={balance < stockQuantity * stockPrice ? undefined : handleBuyClick}
          >
            Buy
          </Link>
          <Link to="" className="btn btn-grey" onClick={handleCancelClick}>
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BuyActionWindow;