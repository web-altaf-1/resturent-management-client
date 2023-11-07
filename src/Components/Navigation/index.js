import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { Link, useNavigate } from "react-router-dom";
import { FormGroup, InputGroup } from "react-bootstrap";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
const Navigation = () => {
  const [loggedIn, setLoggedIn] = useState(0);
  const navigate = useNavigate();
  return (
    <div className="header-background">
      <div className="header-container">
        <div className="transparent-background">
          <div className="header">
            <Navbar collapseOnSelect expand="lg" className="p-4">
              <Container fluid>
                <Navbar.Brand as={Link} to="/">
                  <img
                    alt="LOGO"
                    src="/Broccoli_logo.png"
                    width="50"
                    height="60"
                    className="d-inline-block align-top"
                  />{" "}
                </Navbar.Brand>
                <Navbar.Toggle
                  aria-controls="responsive-navbar-nav"
                  className="bg-light"
                />

                <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="md:w-1/2 lg:w-1/3 m-auto">
                    <Form className="d-flex mb-2">
                      <FormGroup>
                        <InputGroup>
                          <Form.Control
                            type="search"
                            placeholder="Search"
                            size="lg"
                            style={{ width: "50vw" }}
                          />

                          <button className="btn-search">
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                          </button>
                        </InputGroup>
                      </FormGroup>
                    </Form>
                  </Nav>
                  {loggedIn ? (
                    <Nav className="gap-2">
                      <button
                        onClick={() => setLoggedIn(!loggedIn)}
                        className="btn-secondary"
                      >
                        Logout
                      </button>
                      <button
                        onClick={() => navigate("/profile")}
                        className="btn-primary"
                      >
                        Profile
                      </button>
                    </Nav>
                  ) : (
                    <Nav className="gap-2">
                      <button
                        onClick={() => setLoggedIn(!loggedIn)}
                        className="btn-secondary"
                      >
                        Login
                      </button>
                      <button className="btn-primary"> Sign Up</button>
                    </Nav>
                  )}
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navigation;
