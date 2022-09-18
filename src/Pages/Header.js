import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "../pages/Header.css";
import logo from '../assets/img.png';

function Header(){
  return(
    <div className="whole">
      <Container>
        <div className="menu-header">
          
            <div className="logo-wrap">
              <div className="logo1-wrap">
                <div className="logo">
                  <img src={logo} alt="logo"/>
                </div>
              </div>
            </div>
            
            <div className="menu-wrap">
              <div className="menu1-wrap">
                <div className="menu1">
                  <Link to="/exercise" className="menu1_link">
                      <p>운동</p>
                  </Link>
                </div>
              </div>
              <div className="menu2-wrap">
                <div className="menu2"> 
                  <Link to="/cook" className="menu2_link">
                      <p>요리</p>
                  </Link>
                </div>
              </div>
              <div className="menu3-wrap">
                <div className="menu3"> 
                  <Link to="/game" className="menu3_link">
                      <p>게임</p>
                  </Link>
                </div>
              </div>
            </div>

            <div className="login-wrap">
              <div className="login1-wrap">
                <div className="login"> 
                  <Link to="/login" className="login_link">
                    <p  style={{ color: "#B2DAFB", fontWeight: "700" }}>Login</p>
                  </Link>
                </div>
              </div>
            </div>
        
        </div>
      </Container>
    </div>
);
}

export default Header;