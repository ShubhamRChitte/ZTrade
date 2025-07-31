import React from 'react';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { toast } from "react-toastify";
import TopBar from "./TopBar";
import Dashboard from "./Dashboard";

// More flexible URL configuration for deployment
const getBackendURL = () => {
  if (process.env.REACT_APP_BACKEND_URL) {
    return process.env.REACT_APP_BACKEND_URL;
  }
  // For localhost development
  if (window.location.hostname === 'localhost') {
    return 'http://localhost:3002';
  }
  // For production - update this to your actual backend URL
  return "https://ztrade1.onrender.com";
};

const getFrontendURL = () => {
  if (process.env.REACT_APP_FRONTEND_URL) {
    return process.env.REACT_APP_FRONTEND_URL;
  }
  // For localhost development
  if (window.location.hostname === 'localhost') {
    return 'http://localhost:3000';
  }
  // For production - update this to your actual frontend URL
  return "https://ztrade.onrender.com";
};

const backendURL = getBackendURL();
const frontendURL = getFrontendURL();

console.log("Dashboard - Backend URL:", backendURL);
console.log("Dashboard - Frontend URL:", frontendURL);
console.log("Current location:", window.location.href);

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
      console.log("Attempting to verify token with:", backendURL);
      
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
          { 
            withCredentials: true,
            timeout: 10000, // 10 second timeout
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
          sessionStorage.setItem("hasGreeted", "true");
        }

        if (!status) {
          removeCookie("token");
          console.log("Token verification failed, redirecting to frontend");
          window.location.href = `${frontendURL}`;
        }
      } catch (error) {
        console.error("Error verifying token:", error);
        console.error("Error details:", {
          message: error.message,
          response: error.response?.data,
          status: error.response?.status,
          url: backendURL
        });
        
        // Show user-friendly error message
        if (error.code === 'ECONNABORTED') {
          toast.error("Connection timeout. Please check your internet connection.");
        } else if (error.response?.status === 404) {
          toast.error("Backend service not found. Please contact support.");
        } else if (error.response?.status >= 500) {
          toast.error("Server error. Please try again later.");
        } else {
          toast.error("Authentication failed. Please login again.");
        }
        
        removeCookie("token");
        // Add a small delay before redirect to show the error message
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