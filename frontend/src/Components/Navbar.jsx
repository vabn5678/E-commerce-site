
import React, { useContext } from "react"
import { useState } from "react";

import './Navbar.css';
import logo from "./Assets/logo.png";
import cart_icon from "./Assets/cart_icon.png";
import { Link } from "react-router-dom";
import { Shopcontext } from "../Context/Shopcontext";

function Navbar() {
    const [menu, setmenu] = useState("Shop");
    const { counttotalcartitems } = useContext(Shopcontext);



    return (
        <div className="navbar">
            <div className="nav-logo">
                <img src={logo} alt="" />
                <p>SHOPPER</p>
            </div>
            <ul className="nav-menu">
                <li onClick={() => setmenu("Shop")}><Link style={{ textDecoration: 'none' }} to="/">Shop</Link>{menu === "Shop" ? <hr /> : <></>}</li>
                <li onClick={() => setmenu("Mens")}><Link style={{ textDecoration: 'none' }} to="/Mens">Mens</Link> {menu === "Mens" ? <hr /> : <></>}</li>
                <li onClick={() => setmenu("Womens")}><Link style={{ textDecoration: 'none' }} to="/Womens">Womens</Link>  {menu === "Womens" ? <hr /> : <></>}</li>
                <li onClick={() => setmenu("Kids")}><Link style={{ textDecoration: 'none' }} to="./Kids">Kids</Link> {menu === "Kids" ? <hr /> : <></>}</li>
            </ul>
            <div className="nav-login-cart">
                {localStorage.getItem('auth-token') ? <button onClick={() => { localStorage.removeItem('auth-token'); window.location.replace('/') }}>Logout</button> : <Link to="/login">  <button>Login</button></Link>}

                <Link to="/cart"> <img src={cart_icon} alt=""></img></Link>
                <div className="nav-cart-count">{counttotalcartitems()}</div>
            </div>
        </div >
    )
}

export default Navbar;
