import React ,{useState,useEffect} from "react";
import axios from 'axios';
const backendURL = process.env.REACT_APP_BACKEND_URL;

const Summary = () => {
  
  const [allHoldings,setAllHoldings]=useState([]);
  const [username,setUsername]=useState("");
  const [balance,setBalance]=useState(0);

    useEffect(()=>{
      axios.get(`${backendURL}/userData`,
        {
          withCredentials: true 
    }).then((res)=>{
        setUsername(res.data.username);
        setBalance(res.data.balance);
        setAllHoldings(res.data.holdings);
        
      })
    },[]);

     // total Investment
  const totalInvestment = allHoldings.reduce((sum, stock) => {
      return sum + stock.qty * stock.avg;
  }, 0).toFixed(2);

  // current value
  const currentInvestment = allHoldings.reduce((sum, stock) => {
      return sum + stock.qty * stock.price;
  }, 0).toFixed(2);


  return (
    <>
      <div className="username">
        <h6>Hi, {username}!</h6>
        <hr className="divider" />
      </div>

      <div className="section">
        <span>
          <p>Equity</p>
        </span>

        <div className="data">
          <div className="first">
            <h3>{balance.toFixed(2)+"₹"}</h3>
            <p>Margin available</p>
          </div>
          <hr />

          <div className="second" style={{padding:"1rem"}}>
            <p>
              Margins used <span>0</span>{" "}
            </p>
            <p>
              Opening balance <span>{balance.toFixed(2)+"₹"}</span>{" "}
            </p>
          </div>
        </div>
        <hr className="divider" />
      </div>

      <div className="section">
        <span>
          <p>Holdings ({allHoldings.length})</p>
        </span>

        <div className="data">
          <div className="first">

            <p>P&L</p>
            <h3 className='profit' style={{color:(currentInvestment-totalInvestment).toFixed(2)>=0.0?'rgb(72, 194, 55)':'red'}}>
              {(currentInvestment-totalInvestment).toFixed(2)+"₹"} 
              <br/>
              {totalInvestment==0.00
                ? 0 
                : (((currentInvestment - totalInvestment) / totalInvestment) * 100).toFixed(2)}%
            </h3>
            
          </div>
          <hr />

          <div className="second">
            <p>
              Current Value <span>{currentInvestment+"₹"}</span>{" "}
            </p>
            <p>
              Investment <span>{totalInvestment+"₹"}</span>{" "}
            </p>
          </div>
        </div>
        <hr className="divider" />
      </div>
    </>
  );
};

export default Summary;