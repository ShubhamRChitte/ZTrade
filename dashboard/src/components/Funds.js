import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import {toast } from "react-toastify";

import axios from "axios";

const Funds = () => {
  const [amount, setAmount] = useState(1);
  const [password, setPassword] = useState("");
  const [openAmountWindow,setOpenAmountWindow]=useState(false);
  const [openWithdrawWindow,setOpenWithdrawWindow]=useState(false);
  const [allHoldings,setAllHoldings]=useState([]);

  const [balance,setBalance]=useState(0);
  
  useEffect(()=>{
    axios.get("http://localhost:3002/userData",
      {
          withCredentials: true 
      }).then((res)=>{
          setBalance(res.data.balance); 
          setAllHoldings(res.data.holdings);
        })
  },[]);

  const totalInvestment = allHoldings.reduce((sum, stock) => {
              return sum + stock.qty * stock.avg;
          }, 0).toFixed(2); 

  const handleAmountClick =async()=>{
   const{data}= await axios.post("http://localhost:3002/addMoney", {
      amount:amount,
      password:password,
    }, 
    {
    withCredentials: true 
  });

  if (data.success) {
        toast.success(data.message,data.balance);
  } else {
        toast.error(data.message);
  }


    setOpenAmountWindow(false);
  }


  const handleWithdrawClick =async()=>{
  const {data}= await axios.post("http://localhost:3002/withdrawMoney", {
      amount:amount,
      password:password,
    }, 
    {
    withCredentials: true 
  });

  if (data.success) {
        toast.success(data.message,data.balance);
  } else {
        toast.error(data.message);
  }

    setOpenWithdrawWindow(false);
  }

  // amount open close functionality handle
  const handleOpenAmountClick = () => {
     setOpenAmountWindow(true)
  };


  const handleCancelAmountClick = () => {
     setOpenAmountWindow(false)
  };

  // withdraw open close functionality handle
  const handleOpenWithdrawClick = () => {
     setOpenWithdrawWindow(true)
  };


  const handleCancelWithdrawClick = () => {
     setOpenWithdrawWindow(false)
  };

  return (
    <>
      <div className="funds">
        <p>Instant, zero-cost fund transfers with UPI </p>
        <Link className="btn btn-green" onClick={handleOpenAmountClick}>Add funds</Link>
        <Link className="btn btn-blue" onClick={handleOpenWithdrawClick}>Withdraw</Link>
      </div>

    {/* add money */}
    {openAmountWindow && 
      <div className="container" id="amount-window" draggable="true">
        <div className="regular-order">
          <div className="inputs">
            <fieldset>
              <legend>Amount</legend>
              <input
                  type="number"
                  name="amount"
                  id="amount"
                  min={1}
                  value={amount}
                  placeholder={`Min:${1}`}
                  onChange={(e) => {
                    let value = Number(e.target.value);

                    if (e.target.value === "") {
                      setAmount("");
                      return;
                    }

                    if (value < 1) value = 1;

                    setAmount(value);
                  }}
                  onBlur={() => {
                    if (balance === "") setAmount(1);
                  }}
            />
            </fieldset>
            <fieldset>
              <legend>Login Password</legend>
              <input
                type="password"
                name="password"
                id="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </fieldset>
          </div>
        </div>

        <div className="buttons">
            <div>
                <Link className="btn btn-green" onClick={handleAmountClick}>
                    Add
                </Link>                                       
                <Link to="" className="btn btn-grey" onClick={handleCancelAmountClick}>
                    Cancel
                </Link>
            </div>
        </div>
      </div>
    }


    {/* withdraw money */}
    {openWithdrawWindow && 
      <div className="container" id="withdraw-window" draggable="true">
        <div className="regular-order">
          <div className="inputs">
              <fieldset>
              <legend>Amount Withdrawal</legend>
              <input
                  type="number"
                  name="withdraw"
                  id="withdraw"
                  value={amount}
                  min={1}
                  max={balance}
                  placeholder={`Max: ${balance} Min:${1}`}
                  onChange={(e) => {
                    let value = Number(e.target.value);

                    if (e.target.value === "") {
                      setAmount("");
                      return;
                    }

                    if (value > balance) value = balance;
                    if (value < 1) value = 1;

                    setAmount(value);
                  }}
                  onBlur={() => {
                    // Auto-correct if left blank
                    if (amount === "") setAmount(1);
                  }}
            />
            </fieldset>
            <fieldset>
              <legend>Login Password</legend>
              <input
                type="password"
                name="password"
                id="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </fieldset>
          </div>
        </div>

        <div className="buttons">
            <div>
                <Link className="btn btn-green" onClick={handleWithdrawClick}>
                    Withdraw
                </Link>
                <Link to="" className="btn btn-grey" onClick={handleCancelWithdrawClick}>
                    Cancel
                </Link>
            </div>
        </div>
      </div>
    }
      
      <div className="row">
        <div className="col">
          <span>
            <p>Equity</p>
          </span>

          <div className="table">
            <div className="data">
              <p>Available margin</p>
              <p className="imp colored">{balance.toFixed(2)}</p>
            </div>
            <div className="data">
              <p>Used margin</p>
               <p className="imp">{totalInvestment}</p>
            </div>
            <div className="data">
              <p>Available cash</p>
              <p className="imp">{balance.toFixed(2)}</p>
            </div>
            <hr />
            <div className="data">
              <p>Opening Balance</p>
              <p>{balance.toFixed(2)}</p>
            </div>
            <div className="data">
              <p>SPAN</p>
              <p>0.00</p>
            </div>
            <div className="data">
              <p>Delivery margin</p>
              <p>0.00</p>
            </div>
            <div className="data">
              <p>Exposure</p>
              <p>0.00</p>
            </div>
            <div className="data">
              <p>Options premium</p>
              <p>0.00</p>
            </div>
            <hr />
            <div className="data">
              <p>Collateral (Liquid funds)</p>
              <p>0.00</p>
            </div>
            <div className="data">
              <p>Collateral (Equity)</p>
              <p>0.00</p>
            </div>
            <div className="data">
              <p>Total Collateral</p>
              <p>0.00</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Funds;



