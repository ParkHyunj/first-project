import React from "react";
import { NavLink } from "react-router-dom";
import "../Components/Navbar.css";

function Navbar() {
    return (
        <div>
            <nav>
                <img src= "/img/img.png" alt="profile"/>
                <NavLink to = "/category">
                    <button>운동, 게임, 요리</button></NavLink>
                <NavLink to = "/login">
                    <button>Login</button></NavLink>
            </nav>
        </div>
    );
}

export default Navbar;