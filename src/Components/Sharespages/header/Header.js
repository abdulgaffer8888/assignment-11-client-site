import React from "react";
import {Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../../context/useAuth";
import './Header.css'
const Header = () => {
  const {user,logout}=useAuth()
  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        sticky="top"
        variant="dark"
      >
        <Container>
          <Navbar.Brand as={Link} to="#home">
           ABX TOURISM
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/trips">
              Trips
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              About us
            </Nav.Link>
            {
              user.email?<div className="hidden">
            <Nav.Link as={Link} to="/admin">
              Admin
            </Nav.Link>
            <Nav.Link as={Link} to="/mybooking">
              MyBooking
            </Nav.Link>
                <Nav.Link onClick={logout} >logout</Nav.Link>
              </div>:<Nav.Link as={Link} to="/login">
              Login
            </Nav.Link>
            }

            <Navbar.Text>
             User: <a href="/">{user.displayName || (user.email?"showkatul":"")}</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
