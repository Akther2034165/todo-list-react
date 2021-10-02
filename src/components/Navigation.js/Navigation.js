import React from "react";
import { Container, Nav, Navbar, Stack } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>Todos Hub</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <Stack direction="horizontal" gap={5}>
              <NavLink
                to="/home"
                activeStyle={{
                  fontWeight: "bold",
                  color: "red",
                  textDecoration: "none",
                }}
              >
                Home
              </NavLink>
              <NavLink
                to="/todos"
                activeStyle={{
                  fontWeight: "bold",
                  color: "red",
                  textDecoration: "none",
                }}
              >
                Todos
              </NavLink>
              <NavLink
                to="/chart"
                activeStyle={{
                  fontWeight: "bold",
                  color: "red",
                  textDecoration: "none",
                }}
              >
                Chart
              </NavLink>
            </Stack>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
