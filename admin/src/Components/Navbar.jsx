import React from "react";
import './Navbar.css';
import navlogo from "../assets/nav-logo.png";
import navProfile from "../assets/nav-profile.png";
const Navbar = () => {
    return (
        <div className="navbar">
            <img src={navlogo} alt="error" className="nav-logo" />
            <img src={navProfile} alt="error" className="nav-profile" />
        </div>
    )
}
export default Navbar;