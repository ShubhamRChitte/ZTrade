import React ,{useState,useEffect} from 'react';
import axios from 'axios'
import { VerticalGraph } from './VerticalGraph';
const backendURL = process.env.REACT_APP_BACKEND_URL;

const Holdings = () => {

  const [allHoldings,setAllHoldings]=useState([]);

  useEffect(()=>{
    axios.get(`${backendURL}/allholdings`,
      {
        withCredentials: true 
  }).then((res)=>{
      setAllHoldings(res.data);
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

// chart
  const labels = allHoldings.map((subArray)=>subArray['name']);
  const data = {
    labels,
    datasets:[
      {label:'Stock Name',
        data:allHoldings.map((stock)=>stock.price),
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      }
    ]
  }
  
  return (
    <>
      <h3 className="title">Holdings ({allHoldings.length})</h3>

      <div className="order-table">
        <table>
          <tr>
            <th>Instrument</th>
            <th>Qty.</th>
            <th>Avg. cost</th>
            <th>LTP</th>
            <th>Cur. val</th>
            <th>P&L</th>
            <th>Net chg.</th>
            <th>Day chg.</th>
          </tr>
          {allHoldings.map((stock,index)=>{
            const currValue = stock.price*stock.qty;
            const isProfit = currValue-stock.avg*stock.qty >= 0.0;
            const profClass = isProfit ? "profit":"loss";
            const dayClass = stock.day<0.0?"loss":"profit";

            return (
              <tr key={index}>
                <td>{stock.name}</td>
                <td>{stock.qty}</td>
                <td>{stock.avg.toFixed(2)}</td>
                <td>{stock.price.toFixed(2)}</td>
                <td>{currValue.toFixed(2)}</td>
                <td className={profClass}>
                  {(currValue-stock.avg*stock.qty).toFixed(2)}
                  </td>
                <td className={profClass}>{stock.net+"%"}</td>
                <td className={dayClass} style={{fontSize:"0.9rem"}}>{stock.day+"%"}</td>
              </tr>
            )

          })}
        </table>
      </div>

      <div className="row">
        <div className="col">
          <h5>
           {totalInvestment+" "}
          </h5>
          <p>Total investment</p>
        </div>
        <div className="col">
          <h5>
            {currentInvestment+" "}
          </h5>
          <p>Current value</p>
        </div>
        <div className="col">
          <h5 style={{color:(currentInvestment-totalInvestment).toFixed(2)>=0.0?'rgb(72, 194, 55)':"red"}}>
            {(currentInvestment-totalInvestment).toFixed(2)} <br/>
            {totalInvestment==0.00
              ? 0 
              : (((currentInvestment - totalInvestment) / totalInvestment) * 100).toFixed(2)}%
  

          </h5>
          <p>P&L</p>
        </div>
      </div>

      <VerticalGraph data={data}/>
    </>
  );
};

export default Holdings;