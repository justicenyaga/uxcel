import React from "react";
import { Navbar, Nav, NavDropdown, Container, Image } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Header = () => {
  return (
    <header>
      <Navbar bg="light" expand="lg">
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>
              <Image src="/images/logo.svg" fluid alt="uxcel" />
            </Navbar.Brand>
          </LinkContainer>

          <Nav className="mr">
            <Nav style={{ borderRight: "0.5px solid grey" }}>
              <NavDropdown title="Products" id="products">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Resources" id="resources">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
              </NavDropdown>

              <LinkContainer to="/pricing">
                <Nav.Link>Pricing</Nav.Link>
              </LinkContainer>

              <LinkContainer to="/whats-new">
                <Nav.Link>Whats's new</Nav.Link>
              </LinkContainer>
            </Nav>

            <Nav className="mr">
              <LinkContainer to="/for-teams">
                <Nav.Link>For Teams</Nav.Link>
              </LinkContainer>

              <LinkContainer to="/login" style={{ marginRight: "7px" }}>
                <Nav.Link className="btn btn-secondary">Login</Nav.Link>
              </LinkContainer>

              <LinkContainer to="/signup">
                <Nav.Link className="btn btn-primary">Get Started</Nav.Link>
              </LinkContainer>
            </Nav>
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
