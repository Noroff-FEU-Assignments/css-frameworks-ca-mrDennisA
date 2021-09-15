import React from "react";

import { Container, Navbar, Nav, Form, Button } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";
import Header from "./NavbarComponent";

export default function index() {
  return (
    <Header>
      <Container>
        <Navbar expand="lg">
          <Container>
            <Link to="/">The YAY Company</Link>
            <Navbar.Toggle aria-controls="navbarScroll" />
          </Container>
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-lg-0" navbarScroll>
              <NavLink to="/" className="nav-link" exact>
                <Container>Home</Container>
              </NavLink>
              <NavLink to="/news" className="nav-link">
                <Container>News</Container>
              </NavLink>
              <NavLink to="/contact" className="nav-link">
                <Container>Contact</Container>
              </NavLink>
            </Nav>
            <Container>
              <Form className="d-flex">
                <Form.Control type="search" placeholder="Search" className="mr-2" aria-label="Search" />
                <Button>Go</Button>
              </Form>
            </Container>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </Header>
  );
}
