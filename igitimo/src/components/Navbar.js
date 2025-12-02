import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import '../styles/style.css';

const AppNavbar = () => {
  return (
    <Navbar
      expand="lg"
      className="customNavbar custom-nav fixed-top"
      variant="dark"
    >
      <Container fluid className="px-5">
        <Navbar.Brand as={NavLink} to="/" className="navbar-logo">
          <img src="/logo.png" alt="IGIT Logo" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse
          id="basic-navbar-nav"
          className="justify-content-end"
        >
          <Nav as="ul" className="navbar-links">
            <Nav.Item as="li">
              <NavLink to="/" className="nav-link">Home</NavLink>
            </Nav.Item>

            <Nav.Item as="li">
              <NavLink to="/products" className="nav-link">Shop</NavLink>
            </Nav.Item>

            <Nav.Item as="li">
              <NavLink to="/cart" className="nav-link">Cart</NavLink>
            </Nav.Item>

            <Nav.Item as="li">
              <NavLink to="/about" className="nav-link">About Us</NavLink>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;
