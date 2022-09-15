import React from "react";
import { Link } from 'react-router-dom';
import '../pages/Home.css';

function Home() {
    return (
        <div className= "header">
            <img src= "/img/img.png" alt="profile"/>
            <nav>
                <Link to="/exercise" style={{ textDecoration: "none", color: "white"}}>
                    운동
                </Link>
                <Link to="/cook" style={{ textDecoration: "none", color: "white"}}>
                    요리
                </Link>
                <Link to="/game" style={{ textDecoration: "none", color: "white"}}>
                    게임
                </Link>
            </nav>
            <nav>
                <Link to="/login" style={{ textDecoration: "none", color: "white"}}>
                    <button>Login</button>
                </Link>
            </nav>
        </div>
        );
}

export default Home;

