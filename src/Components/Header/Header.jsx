import React from "react";
import Navbar from "./Navbar";
import { NavLink } from "react-router-dom";
import './header.css';

export function Header(){
    return(
        <header>
            <div className="container">
            <Navbar />
            </div>
            
        </header>
    )
}
export default Header;