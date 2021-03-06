import React, { useState } from "react";
// import "./css/Header-Footer.css";
import "./css/Header.css"
import { Link, useHistory } from "react-router-dom";
import logo from "../assets/logo.png";
import { Button, Modal, ModalBody, ModalHeader } from "reactstrap";
import Login from "./Login";
import SignUp from "./SignUp";
import { Dropdown, NavDropdown } from 'react-bootstrap';

export default function Header(props) {
  const history = useHistory();
  const [login, setLogin] = useState(false);
  const [signup, setSignup] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const toggleLogin = () => setLogin(!login);
  const toggleSignup = () => setSignup(!signup);

  const toAccount = () => history.push("/account");
  const toBookingHistory = () => history.push("booking")

  const logout = () => {
    localStorage.removeItem("username");
    localStorage.removeItem("roles");
    localStorage.removeItem("accessToken");
    localStorage.removeItem("tokenType");
    localStorage.clear();
    history.push("/")
  };
  const changeBackground = () => {
    if (window.scrollY >= 50) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener('scroll', changeBackground);
  return (
    <div className={navbar ? "navbar1 active" : "navbar1"} style={{ backgroundColor: props.color }}>
      <div className="nav-container">
        <div className="nav-item nav-logo">
          <Link to="/">
            <img src={logo} border="0" id="logo" />
          </Link>
        </div>

        <div className="nav-item nav-menu">
          <ul className="navbar-nav">
            <li>
              <Link className="nav-link header-link" to="/">Home</Link>
            </li>
            <li>
              <Link className="nav-link header-link">Blog</Link>
            </li>
            {(localStorage.getItem("roles") && localStorage.getItem("roles")==='ROLE_USER') && (
              <>
                <li>
                  <Dropdown>
                    <Dropdown.Toggle id="dropdown-button-dark-example1" variant="dark" >
                        <img style={{ width: '40px', height: '40px', borderRadius:"50%" }} src="https://cdn.himalaya.com/d64ae4a39c1f4d4594fa9d1216ab0b29.jpg?auth_key=4102416000-1234-0-e63fc56ba1b11b35a34d758f36c371d4"></img>
                    </Dropdown.Toggle>
                    <Dropdown.Menu style={{ backgroundColor: 'white', color: 'black' }}>
                      <Dropdown.Item onClick={toAccount} style={{ color: 'black'}}>Profile</Dropdown.Item>
                      <Dropdown.Item onClick={toBookingHistory} style={{ color: 'black'}}>Booking history</Dropdown.Item>
                      <Dropdown.Item onClick={logout} style={{ color: 'black'}}>Logout</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </li>
              </>
            )}
            {(localStorage.getItem("roles") && localStorage.getItem("roles")!=='ROLE_USER') && (
              <>
                <li>
                  <Dropdown>
                    <Dropdown.Toggle id="dropdown-button-dark-example1" variant="dark" >
                        <img style={{ width: '40px', height: '40px', borderRadius:"50%" }} src="https://cdn.himalaya.com/d64ae4a39c1f4d4594fa9d1216ab0b29.jpg?auth_key=4102416000-1234-0-e63fc56ba1b11b35a34d758f36c371d4"></img>
                    </Dropdown.Toggle>
                    <Dropdown.Menu style={{ backgroundColor: 'white', color: 'black' }}>
                      <Dropdown.Item onClick={toAccount} style={{ color: 'black'}}>Profile</Dropdown.Item>
                      <Dropdown.Item onClick={logout} style={{ color: 'black'}}>Logout</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </li>
              </>
            )}
            {!localStorage.getItem("roles") && (
              <>
                <li>
                  <Button onClick={toggleLogin}>
                    Login
                  </Button>
                  <Modal
                    className="modal-dialog modal-dialog-centered"
                    isOpen={login}
                    toggle={toggleLogin}
                  >
                    <ModalHeader>
                      <h2>Login</h2>
                    </ModalHeader>
                    <ModalBody>
                      <Login />
                    </ModalBody>
                  </Modal>
                </li>
                <li>
                  <Button onClick={toggleSignup}>
                    Sign up
                  </Button>
                  <Modal
                    className="modal-dialog modal-dialog-centered"
                    isOpen={signup}
                    toggle={toggleSignup}
                  >
                    <ModalHeader>
                      <h2>Sign up</h2>
                    </ModalHeader>
                    <ModalBody>
                      <SignUp />
                    </ModalBody>
                  </Modal>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>

    </div>



  );
}
