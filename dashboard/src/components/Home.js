import React from 'react';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { toast } from "react-toastify";
import TopBar from "./TopBar";
import Dashboard from "./Dashboard";




const frontendURL = process.env.REACT_APP_FRONTEND_URL ;
const backendURL = process.env.REACT_APP_BACKEND_URL ;

function Home() {
  const navigate = useNavigate();
  const [cookies, removeCookie] = useCookies([]);
  const [username, setUsername] = useState("");
  const [userID, setUserID] = useState("");
  const [hasGreeted, setHasGreeted] = useState(false);

  useEffect(() => {
    const verifyCookie = async () => {
      console.log("=== DASHBOARD AUTH CHECK ===");
      console.log("Backend URL:", backendURL);
      console.log("Frontend URL:", frontendURL);
      console.log("Current location:", window.location.href);
      console.log("Token cookie:", cookies.token);
      
      if (!cookies.token) {
        console.log("No token found, redirecting to frontend");
        window.location.href = `${frontendURL}`;
        return;
      }
     
    console.log("Making request to:", `${backendURL}`);
    try {
      const { data } = await axios.post(
            `${backendURL}`,
            {},
            { 
              withCredentials: true,
              timeout: 10000,
              headers: {
                'Content-Type': 'application/json',
              }
            },
      );
      
      console.log("Backend response:", data);
      const { status, user, user_id } = data;
        setUsername(user);
        setUserID(user_id);

        if (status && !sessionStorage.getItem("hasGreeted")) {
          toast.success(`Hello ${user}`);
          sessionStorage.setItem("hasGreeted", true);
        }

        if (!status) {
          removeCookie("token");
          console.log("Token verification failed, redirecting to frontend");
          window.location.href = `${frontendURL}`;
        }
      } catch (error) {
        console.error("=== AUTH VERIFICATION ERROR ===");
        console.error("Error:", error.message);
        console.error("Status:", error.response?.status);
        console.error("URL:", error.config?.url);
        console.error("Response:", error.response?.data);
        
        if (error.response?.status === 404) {
          console.error("404 Error: Backend endpoint not found. Check if backend is running and URL is correct.");
          toast.error("Backend service not available. Please try again later.");
        } else {
          toast.error("Authentication failed. Please login again.");
        }
        
        removeCookie("token");
        setTimeout(() => {
          window.location.href = `${frontendURL}`;
        }, 2000);
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