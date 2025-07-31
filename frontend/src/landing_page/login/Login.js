import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";


const backendURL = process.env.REACT_APP_BACKEND_URL || "https://ztrade1.onrender.com";
const dashboardURL = process.env.REACT_APP_DASHBOARD_URL || "https://ztraded.onrender.com";
console.log("Dashboard URL:", dashboardURL);
console.log("Backend URL:", backendURL);
const Login = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });
  const { email, password } = inputValue;
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleError = (err) =>
    toast.error(err, {
      position: "bottom-left",
    });
  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "bottom-left",
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("Attempting login with:", inputValue);
      console.log("Backend URL:", backendURL);
      console.log("Dashboard URL:", dashboardURL);
      
      const { data } = await axios.post(
        `${backendURL}/login`,
        {
          ...inputValue,
        },
        { withCredentials: true }
      );

      console.log("Login response:", data);
      const { success, message } = data;
      if (success) {
        handleSuccess(message);
        console.log("Login successful, redirecting to dashboard:", dashboardURL);
        window.location.href = `${dashboardURL}`; 
        //  window.location.href = "http://localhost:3001"; 
      } else {
        handleError(message);
      }
    } catch (error) {
      console.error("Login error:", error);
      handleError("Login failed. Please try again.");
    }
    setInputValue({
      ...inputValue,
      email: "",
      password: "",
    });
  };

  return (
    <div className="form_container">
      <h2>Login Account</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={email}
            placeholder="Enter your email"
            onChange={handleOnChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={password}
            placeholder="Enter your password"
            onChange={handleOnChange}
          />
        </div>
        <button type="submit">Submit</button>
        <span>
          Already have an account? <Link to={"/signup"}>Signup</Link>
        </span>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Login;