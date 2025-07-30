import React from 'react';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { toast } from "react-toastify";
import TopBar from "./TopBar";
import Dashboard from "./Dashboard";
const backendURL = process.env.REACT_APP_BACKEND_URL;
const frontendURL = process.env.REACT_APP_FRONTEND_URL;

function Home() {
  const navigate = useNavigate();
  const [cookies, removeCookie] = useCookies([]);
  const [username, setUsername] = useState("");
  const [userID, setUserID] = useState("");
  const [hasGreeted, setHasGreeted] = useState(false);

  useEffect(() => {
    const verifyCookie = async () => {
      if (!cookies.token) {
        window.location.href = `${frontendURL}`;
      }
      const { data } = await axios.post(
        `${backendURL}`,
        {},
        { withCredentials: true },
      );
      const { status, user,user_id } = data;
      setUsername(user);
      setUserID(user_id);

      if (status && !sessionStorage.getItem("hasGreeted")) {
        toast.success(`Hello ${user}`);
        sessionStorage.setItem("hasGreeted", "true");
      }


      if (!status) {
        removeCookie("token");
        window.location.href = `${frontendURL}`;
      }


    
    
    };
    verifyCookie();
  }, [cookies, navigate, removeCookie]);

  const Logout = () => {
    removeCookie("token");
     window.location.href = `${frontendURL}`;
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