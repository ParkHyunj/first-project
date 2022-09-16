import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "../pages/Header.css";

function Header(){
    return(
        <div className="container">
            <img src= "/img/img.png" alt="profile"/>
          <div className="item">
            <Link to="/exercise" style={{ textDecoration: "none"}}>
                운동
            </Link>
          </div>
          <div className="item">
            <Link to="/cook" style={{ textDecoration: "none"}}>
                요리
            </Link>
          </div>
          <div className="item">
            <Link to="/game" style={{ textDecoration: "none"}}>
                게임
            </Link>
          </div>
          <div className="item">
            <Link to="/login" style={{ textDecoration: "none"}}>
                <Button variant="primary">Login</Button>
           </Link>
          </div>  
        </div>
    );
}

export default Header;