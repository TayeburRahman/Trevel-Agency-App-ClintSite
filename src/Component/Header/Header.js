import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import useAuth from "../../Firebase/Hook/useAuth";
import logo from "../../image/8766.gif"
import './Header.css'

const Header = () => {
  const { user, logOut } = useAuth();
  return (
    <div className="header">
      <Navbar
        bg="light "
        variant="light"
        sticky="top"
        collapseOnSelect
        expand="lg"
      >
        <Container className="header-Container  ">
          <Navbar.Brand as={Link} to="#home" className="text-primary logo">
              <img
                alt=""
                src={logo}
                width="30%"
                className="d-inline-block  "
              />
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav className="me-auto">
              <Nav.Link
                className="rounded pe-3 ps-3"
                as={HashLink}
                to="/home"
              >
                <h6 className="text-manus p-2" > HOME </h6>
              </Nav.Link>
              <Nav.Link
                className="rounded pe-3 ps-3"
                as={HashLink}
                to="/home#services"
              >
                <h6 className="text-manus p-2">SERVICES </h6>
              </Nav.Link>
              <Nav.Link
                className=" rounded pe-3 ps-3"
                as={HashLink}
                to="/campBlog"
              >
                <h6 className="text-manus p-2">BLOG</h6>
              </Nav.Link>
              <Nav.Link
                className=" rounded pe-3 ps-3"
                as={HashLink}
                to="/myOrders"
              >
                <h6 className="text-manus p-2"> MY ORDERS</h6>
              </Nav.Link>
              <Nav.Link
                className="rounded   pe-3 ps-3"
                as={HashLink}
                to="/manageOder"
              >
                <h6 className="text-manus p-2">MANAGE ORDER</h6>
              </Nav.Link>
              <Nav.Link
                className="rounded pe-3 ps-3"
                as={HashLink}
                to="/addService"
              >
                <h6 className="text-manus p-2">ADD SERVICE</h6>
              </Nav.Link>
            </Nav>
             <Navbar.Text>
              {user?.email ? (
                <button className="buttons button-hover rounded  ps-3 ps-3 p-2  me-5" onClick={logOut}>
                  Log Out
                </button>
              ) : (
                <Nav.Link
                  to="/login"
                  className="button-manus button-hover  text-black text-light rounded me-5"
                  as={HashLink}
                >
                  LogIn{" "}
                </Nav.Link>
              )}
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
