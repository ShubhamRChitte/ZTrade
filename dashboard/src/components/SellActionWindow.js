import React, { useState,useContext,useEffect } from "react";
import { Link } from "react-router-dom";
import {toast } from "react-toastify";
import axios from "axios";

import GeneralContext from "./GeneralContext";

import "./BuyActionWindow.css";

const SellActionWindow = ({ uid }) => {
  const [availableStockQuantity, setAvailableStockQuantity] = useState(0); 
  const [inputQuantity, setInputQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);
  const [allholdings,setAllholdings]=useState([]);

  const { closeSellWindow } = useContext(GeneralContext); 
 
  useEffect(()=>{
    axios.get("http://localhost:3002/allholdings",
      {
        withCredentials: true 
  }).then((res)=>{
    const matches = res.data.filter((item) => item.name === uid);
    const quantity = matches.reduce((sum, stock) => sum + stock.qty, 0);
    setAvailableStockQuantity(quantity);
    setInputQuantity(1);
    setAllholdings(matches);
    })
  },[uid]);


  const handleSellClick = async() => {
    const{data}= await axios.post("http://localhost:3002/sellOrder", {
      name: uid,
      qty: inputQuantity,
      avg_price: stockPrice,
      mode: "SELL",
    }, 
    {
    withCredentials: true 
  });

  if (data.success) {
        toast.success(data.message);
  } else {
        toast.error("Sell failed");
  }

    closeSellWindow();
  };

  const handleCancelClick = () => {
     closeSellWindow();
  };

  return (
    <div className="container" id="buy-window" draggable="true">
      <div className="regular-order">
        <h3>{uid}</h3>
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
                type="number"
                name="qty"
                id="qty"
                value={inputQuantity}
                min={1}
                max={availableStockQuantity}
                placeholder={`Max: ${availableStockQuantity}`}
                onChange={(e) => {
                  let value = Number(e.target.value);

                  if (e.target.value === "") {
                    setInputQuantity("");
                    return;
                  }

                  if (value > availableStockQuantity) value = availableStockQuantity;
                  if (value < 1) value = 1;

                  setInputQuantity(value);
                }}
                onBlur={() => {
                  // Auto-correct if left blank
                  if (inputQuantity === "") setInputQuantity(1);
                }}
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



        {allholdings.length==0 &&
          <div style={{color:"red",textAlign:"center",marginTop:"1rem"}}>
            <p>"You don't have any shares of this stock to sell."</p>
          </div>
        }
        
      <div className="buttons">
        <div>
          <Link className={`btn ${ allholdings.length==0 ? 'disabled' : ''}`} style={{backgroundColor:"red"}}
                      onClick={allholdings.length==0 ? undefined : handleSellClick}
                    >
            Sell
          </Link>
          <Link to="" className="btn btn-grey" onClick={handleCancelClick}>
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SellActionWindow;