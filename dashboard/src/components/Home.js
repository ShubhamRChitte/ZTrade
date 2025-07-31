import React from 'react';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { toast } from "react-toastify";
import TopBar from "./TopBar";
import Dashboard from "./Dashboard";
const backendURL = process.env.REACT_APP_BACKEND_URL || "http://localhost:3002";
const frontendURL = process.env.REACT_APP_FRONTEND_URL || "http://localhost:3000";
console.log("Dashboard - Backend URL:", backendURL);
console.log("Dashboard - Frontend URL:", frontendURL);

function Home() {
  const navigate = useNavigate();
  const [cookies, removeCookie] = useCookies([]);
  const [username, setUsername] = useState("");
  const [userID, setUserID] = useState("");
  const [hasGreeted, setHasGreeted] = useState(false);

  useEffect(() => {
    const verifyCookie = async () => {
      console.log("All cookies:", cookies);
      console.log("Token cookie:", cookies.token);
      
      if (!cookies.token) {
        console.log("No token found, redirecting to frontend");
        window.location.href = `${frontendURL}`;
        return;
      }
      
      try {
        console.log("Verifying token with backend...");
        const { data } = await axios.post(
          `${backendURL}`,
          {},
          { withCredentials: true },
        );
        console.log("Backend response:", data);
        
        const { status, user, user_id } = data;
        setUsername(user);
        setUserID(user_id);

        if (status && !sessionStorage.getItem("hasGreeted")) {
          toast.success(`Hello ${user}`);
          sessionStorage.setItem("hasGreeted", "true");
        }

        if (!status) {
          removeCookie("token");
          console.log("Token verification failed, redirecting to frontend");
          window.location.href = `${frontendURL}`;
        }
      } catch (error) {
        console.error("Error verifying token:", error);
        removeCookie("token");
        window.location.href = `${frontendURL}`;
      }
    };
    verifyCookie();
  }, [cookies, navigate, removeCookie]);

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