import React, { useState ,useContext,useEffect} from 'react';
import {Tooltip,Grow} from "@mui/material";
import axios from 'axios';
import GeneralContext from "./GeneralContext"

import {KeyboardArrowUp,KeyboardArrowDown, BarChartOutlined, MoreHoriz} from "@mui/icons-material";
import { DoughnutChart } from './DognutChart';
const backendURL = process.env.REACT_APP_BACKEND_URL;


function WatchList({showWatch}) {
  const [watchlist, setWatchlist] = useState([]);
  const [search, setSearch] = useState("");
  useEffect( ()=>{
        axios.get(`${backendURL}/watchlist`,
            {
              withCredentials: true 
        }).then((res)=>{
            setWatchlist(res.data); 
          })

  },[]);

  const filteredWatchlist = watchlist.filter((stock) =>
    stock.name.toLowerCase().includes(search.toLowerCase())
  );

const data = {
  labels: watchlist.map((subArray)=>subArray['name']),
  datasets: [
    {
      label: 'Price',
      data: watchlist.map((stock)=>stock.price),
      backgroundColor: [
        'rgba(255, 99, 132, 0.5)',
        'rgba(54, 162, 235, 0.5)',
        'rgba(255, 206, 86, 0.5)',
        'rgba(75, 192, 192, 0.5)',
        'rgba(153, 102, 255, 0.5)',
        'rgba(255, 159, 64, 0.5)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

    return (  
<>
    
        <div className="watchlist-container"  >
          <div className="search-container">
            <input
              type="text"
              name="search"
              id="search"
              placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"
              className="search"
              onChange={(e) => setSearch(e.target.value)}
            />
            <span className="counts">{watchlist.length} / 50</span>
          </div>

         <ul className='list'>
          {search.length > 0 ? (
            filteredWatchlist.length === 0 ? (
              <li className="no-results">No matching stocks found.</li>
            ) : (
              filteredWatchlist.map((stock, index) => (
                <WatchListItem stock={stock} key={index} />
              ))
            )
          ) : (
            watchlist.map((stock, index) => (
              <WatchListItem stock={stock} key={index} />
            ))
          )}
        </ul>

          
          <DoughnutChart data={data}/>
        </div>

    </>
    );
}

export default WatchList;

const WatchListItem = ({stock})=>{
  const [showWatchListActions,setShowWatchListActions] = useState(false);

  const handleMouseEnter = (e)=>{
    setShowWatchListActions(true);
  }

  const handleMouseLeave = (e)=>{
    setShowWatchListActions(false);
  }

  return(
    <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <div className='item'>
          <p className={stock.isDown ? "down":"up"}>{stock.name}</p>
          <div className='item-info'>
            <span className='percent '>{stock.percent}</span>
            {stock.isDown?(<KeyboardArrowDown className="down"/>):
            (<KeyboardArrowUp className="up"/>)}
            <span className={stock.isDown?"down":"up"}>{stock.price}</span>
          </div>
        </div>
        {showWatchListActions && (
  <WatchListActions
    uid={stock.name}
    price={stock.price}
    percent={stock.percent}
  />
)}

    </li>
  )
}

const WatchListActions = ({uid,price,percent})=>{
  const generalContext = useContext(GeneralContext);

  const handleBuyClick = () => {
    generalContext.openBuyWindow(uid,price,percent);
  };

  const handleSellClick = () => {
    generalContext.openSellWindow(uid);
  };
  return(
    <span className='actions'>
      <span>
        <Tooltip 
         title="Buy (B)"
         placement='top'
         TransitionComponent={Grow}
         onClick={handleBuyClick}
        >
          <button className='buy'>Buy</button>
        </Tooltip>

        <Tooltip 
         title="Sell (S)"
         placement='top'
         TransitionComponent={Grow}
         onClick={handleSellClick}
        >
          <button className='sell'>Sell</button>
        </Tooltip>

        <Tooltip 
         title="Analytics (A)"
         placement='top'
         TransitionComponent={Grow}
        >
          <button className='action'>
            <BarChartOutlined className='icon'/>
          </button>
        </Tooltip>

        <Tooltip 
         title="More"
         placement='top'
         TransitionComponent={Grow}
        >
          <button className='action'>
            <MoreHoriz className='icon'/>
          </button>
        </Tooltip>
      </span>
    </span>
  )
}