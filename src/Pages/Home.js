import React from "react";
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className= "Home">
            <img src= "/img/img.png" alt="profile"/>
            <Link to="/exercise" style={{ textDecoration: "none", color: "black"} }>
                운동
            </Link>
            <Link to="/cook" style={{ textDecoration: "none", color: "black"}}>
                요리
            </Link>
            <Link to="/game" style={{ textDecoration: "none", color: "black"}}>
                게임
            </Link>
            <Link to="/login" style={{ textDecoration: "none", color: "black"}}>
                Login
            </Link>
        </div>
    );
}

export default Home;

