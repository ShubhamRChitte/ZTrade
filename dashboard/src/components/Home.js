import React from 'react';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import TopBar from "./TopBar";
import Dashboard from "./Dashboard";


function Home() {
  const navigate = useNavigate();
  const [cookies, removeCookie] = useCookies([]);
  const [username, setUsername] = useState("");
  const [userID, setUserID] = useState("");
  const [hasGreeted, setHasGreeted] = useState(false);

  useEffect(() => {
    const verifyCookie = async () => {
      if (!cookies.token) {
        window.location.href = "http://localhost:3000";
      }
      const { data } = await axios.post(
        "http://localhost:3002",
        {},
        { withCredentials: true },
      );
      const { status, user,user_id } = data;
      setUsername(user);
      setUserID(user_id);

      // return status
      //   ? toast(`Hello ${user}`, {
      //       position: "top-right",
      //     })
      //   : (removeCookie("token") , window.location.href = "http://localhost:3000"
      // );
      

          
      // if (status && !hasGreeted) {
      //   toast(`Hello ${user}`, { position: "top-right" });
      //   setHasGreeted(true);
      // }
      if (status && !sessionStorage.getItem("hasGreeted")) {
        toast.success(`Hello ${user}`);
        sessionStorage.setItem("hasGreeted", "true");
      }


      if (!status) {
        removeCookie("token");
        window.location.href = "http://localhost:3000";
      }


    
    
    };
    verifyCookie();
  }, [cookies, navigate, removeCookie]);
  const Logout = () => {
    removeCookie("token");
     window.location.href = "http://localhost:3000";
  };
    return (
        <>
        <TopBar 
          username={username} 
          userID={userID}
        />
        <Dashboard/>
        <div className="home_page">
        
        </div>
        </>
      );
}

export default Home;