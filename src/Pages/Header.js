import React from 'react';
import { Navbar, Nav, Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Header(){
    return(
        <header>
          <Navbar bg="light" expand="lg">
             <Container>
              <Navbar.Brand>
                  <img src= "/img/img.png" alt="profile"/>
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="ml-auto">
                      <Nav>
                        <Link to="/exercise" style={{ textDecoration: "none"}}>
                            운동
                        </Link>
                      </Nav>
                      <Nav>
                        <Link to="/cook" style={{ textDecoration: "none"}}>
                            요리
                        </Link>
                      </Nav>
                      <Nav>
                        <Link to="/game" style={{ textDecoration: "none"}}>
                            게임
                        </Link>
                      </Nav>
                      <Nav>
                        <Link to="/login" style={{ textDecoration: "none"}}>
                            <Button variant="primary">Login</Button>
                        </Link>   
                      </Nav>     
                  </Nav>
              </Navbar.Collapse>
             </Container>
          </Navbar>
        </header>
    );
}

export default Header;