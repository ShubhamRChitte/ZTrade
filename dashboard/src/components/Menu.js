import React, { useState } from "react";
import { useCookies } from "react-cookie";
import { Link } from "react-router-dom";
import WatchList2 from "./WatchList2";

const frontendURL = process.env.REACT_APP_FRONTEND_URL;

function Menu({username,userID}) {
    const [cookies, removeCookie] = useCookies([]);
    const [selectedMenu,setSelectedMenu]=useState(0);
    const [isProfileDropdownOpen,setIsProfileDropdownOpen]=useState(false);
    const [showWatchlist,setShowWatchlist]=useState(false);
    const handleMenuClick = (index)=>{
        setSelectedMenu(index);
    }

    const handleProfileClick = (index)=>{
        setIsProfileDropdownOpen(!isProfileDropdownOpen);
    }

    const menuClass = "menu";
    const activeMenuClass = "menu selected";

 const Logout = () => {
    removeCookie("token");
     window.location.href = `${frontendURL}`;
  };


  
  return (
    <>
    <div className="menu-container">
      <Link className="navbar-brand d-flex align-items-center" to="/">
              <i className="fas fa-chart-line logo-icon me-2"></i>
              <span className="logo-text">
                <span className="z-letter">Z</span><span className="trade-text">Trade</span>
              </span>
        </Link>
        <nav className="navbar navbar-expand-lg sticky-top">
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                    >
                    <span className="navbar-toggler-icon"></span>
                </button>

            <div className="menus collapse navbar-collapse"                     id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link className="nav-link"
                            to="/" 
                            style={{textDecoration:"none"}}
                            onClick={()=>handleMenuClick(0)} >
                            <p className={selectedMenu=== 0 ? activeMenuClass:menuClass}>Dashboard</p>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link 
                            className="nav-link"
                            to="/orders" 
                            style={{textDecoration:"none"}}
                            onClick={()=>handleMenuClick(1)} >
                            <p className={selectedMenu=== 1 ? activeMenuClass:menuClass}>Orders</p>
                        </Link>
                        
                    </li>
                    <li className="nav-item">
                        <Link 
                            className="nav-link"
                            to="/holdings" 
                            style={{textDecoration:"none"}}
                            onClick={()=>handleMenuClick(2)} >
                            <p className={selectedMenu=== 2 ? activeMenuClass:menuClass}>Holdings</p>
                        </Link>
                        
                    </li>
                    <li className="nav-item">
                        <Link 
                            className="nav-link"
                            to="/positions" 
                            style={{textDecoration:"none"}}
                            onClick={()=>handleMenuClick(3)} >
                            <p className={selectedMenu=== 3 ? activeMenuClass:menuClass}>Positions</p>
                        </Link>
                        
                    </li>
                    <li className="nav-item">
                        <Link 
                            className="nav-link"
                            to="/funds" 
                            style={{textDecoration:"none"}}
                            onClick={()=>handleMenuClick(4)} >
                            <p className={selectedMenu=== 4 ? activeMenuClass:menuClass}>Funds</p>
                        </Link>
                        </li>
                    <li className="nav-item">
                        <Link 
                            className="nav-link"
                            to="/apps" 
                            style={{textDecoration:"none"}}
                            onClick={()=>handleMenuClick(5)} >
                            <p className={selectedMenu=== 5 ? activeMenuClass:menuClass}>Apps</p>  
                        </Link>
                    </li>
                    <li className="nav-item ">
                        <Link 
                            className="nav-link nav-watchlist "
                            to="/watchlist" 
                            style={{textDecoration:"none"}}
                            onClick={() => {
                            handleMenuClick(6);
                            setShowWatchlist(prev => !prev)
                            }}
                            >
                            <p className={selectedMenu=== 6 ? activeMenuClass:menuClass}>Watchlist</p>
                        </Link>
                    </li>
                </ul>
                <div 
                    className="profile" 
                    onClick={handleProfileClick}
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        position: "relative", // Important for dropdown positioning
                        cursor: "pointer"
                    }}
                    >
                <div 
                    style={{ 
                    display: "flex", 
                    justifyContent: "space-between", 
                    alignItems: "center" 
                    }}
                >
                    <p className="avatar">ZU</p>
                    <p className="username">{username}</p>
                </div>

                {isProfileDropdownOpen && (
                    <div 
                        style={{
                            position: "absolute",
                            top: "100%", 
                            left: 0,
                            marginTop: "5px",
                            backgroundColor: "red",
                            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                            borderRadius: "8px",
                            padding: "5px",
                            zIndex: 10
                        }}
                        >
                        <button 
                            onClick={Logout} 
                            style={{
                            fontSize: "0.8rem",
                            borderRadius: "8px",
                            padding: "5px",
                            border: "none",
                            backgroundColor: "#f5f5f5",
                            cursor: "pointer"
                            }}
                        >
                            LOGOUT
                        </button>
                    </div>
                )}
                </div>

            </div>
      </nav>
    </div>


      
    </>
  );
};

export default Menu;