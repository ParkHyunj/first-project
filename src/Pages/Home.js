import React from "react";
import { Link } from 'react-router-dom';
import "../pages/Home.css";

function Home() {
    return (
        <div>
            <img src= "/img/img.png" alt="profile"/>
            <Link to="/exercise">운동</Link>
            <Link to="/cook">요리</Link>
            <Link to="/game">게임</Link>
            <Link to="/login">Login</Link>
        </div>
    );
}

export default Home;