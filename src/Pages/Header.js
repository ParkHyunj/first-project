import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "../pages/Header.css";

function Header(){
    return(
          <div className="whole">
            <Container>
              <div className="menu-header">
                
                  <div className="logo-wrap">
                    <div className="logo1-wrap">
                      <div className="logo">
                        <img src= "/public/img/img.png" alt="profile"/>
                      </div>
                    </div>
                  </div>
                  
                  <div className="menu-wrap">
                    <div className="menu1-wrap">
                      <div className="menu1">
                        <Link to="/exercise" style={{ textDecoration: "none"}}>
                            운동
                        </Link>
                      </div>
                    </div>
                    <div className="menu1-wrap">
                      <div className="menu2"> 
                        <Link to="/cook" style={{ textDecoration: "none"}}>
                            요리
                        </Link>
                      </div>
                    </div>
                    <div className="menu1-wrap">
                      <div className="menu3"> 
                        <Link to="/game" style={{ textDecoration: "none"}}>
                            게임
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="login-wrap">
                    <div className="login1-wrap">
                      <div className="login"> 
                        <Link to="/login" style={{ textDecoration: "none"}}>
                          <Button variant="primary">Login</Button>
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