import React ,{useState,useEffect} from 'react';
import axios from 'axios'
import { Link } from "react-router-dom";

const Orders = () => {

  const [allOrders,setAllOrders]=useState([]);

  useEffect(()=>{
    axios.get("http://localhost:3002/allorders",
      {
        withCredentials: true 
  }).then((res)=>{
      setAllOrders(res.data);
    })
  },[]);

  return (
    <div className="orders">
      <h3 className="title">Orders ({allOrders.length})</h3>

      <div className="order-table">
        <table>
          <tr>
            <th>Instrument</th>
            <th>Qty.</th>
            <th>Avg. cost</th>
            <th>Date</th>
            <th>Time</th>
            <th>Mode</th>
          </tr>
          {allOrders.map((stock,index)=>{
            const currValue = stock.price*stock.qty;
            const isProfit = currValue-stock.avg*stock.qty >= 0.0;
            const profClass = isProfit ? "profit":"loss";
            const dayClass = stock.isLoss?"loss":"profit";

            return (
              <tr key={index}>
                <td>{stock.name}</td>
                <td>{stock.qty}</td>
                <td>{stock.price.toFixed(2)}</td>
                <td>{stock.date}</td>
                <td>{stock.time}</td>
                <td style={{color: stock.mode==="SELL"?"red":"rgb(72, 194, 55)",fontSize:"0.8rem"}}>{stock.mode}</td>
              </tr>
            )

          })}
        </table>
      </div>
    </div>
  );
};

export default Orders;