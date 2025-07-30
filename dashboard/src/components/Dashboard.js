import React from "react";
import { Route, Routes } from "react-router-dom";


import { useCookies } from "react-cookie";
import Apps from "./Apps";
import Funds from "./Funds";
import Holdings from "./Holdings";
import Orders from "./Orders";
import Positions from "./Positions";
import Summary from "./Summary";
import WatchList from "./WatchList";
import WatchList2 from "./WatchList2";
import NotFound from "./NotFound";
import { GeneralContextProvider } from "./GeneralContext";

const Dashboard = () => {
   const [cookies] = useCookies(["token"]);
  return (
    <div className="dashboard-container">
      <GeneralContextProvider>
        <WatchList />
      
      <div className="content">
        <Routes>
          <Route exact path="/" element={<Summary />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/holdings" element={<Holdings />} />
          <Route path="/positions" element={<Positions />} />
          <Route path="/funds" element={<Funds />} />
          <Route path="/apps" element={<Apps />} />
          <Route path="/watchlist" element={<WatchList2 />} />
          <Route path='*' element={<NotFound/>}/>
        </Routes>
      </div>
      </GeneralContextProvider>
    </div>
  );
};

export default Dashboard;