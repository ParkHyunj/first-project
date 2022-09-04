import React from "react";
import { NavLink } from "react-router-dom";
import "../Components/Navbar.css";

function Navbar() {
    return (
        <div>
            <img src= "/img/img.png" alt="profile"/>
            <nav>
                <NavLink to = "/category">운동, 게임, 요리</NavLink>
                <NavLink to = "/login">Login</NavLink>
            </nav>
        </div>
    );
}

export default Navbar;