import React, { useState } from "react";
// import "./css/Header-Footer.css";
import "./css/Header.css"
import { Link, useHistory } from "react-router-dom";
import logo from "../assets/logo.png";
import { Button, Modal, ModalBody, ModalHeader } from "reactstrap";
import Login from "./Login";
import SignUp from "./SignUp";

export default function Header() {
  const history = useHistory();
  const [login, setLogin] = useState(false);
  const [signup, setSignup] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const toggleLogin = () => setLogin(!login);
  const toggleSignup = () => setSignup(!signup);

  const toAccount = () => history.push("/account");

  const logout = () => {
    localStorage.removeItem("username");
    localStorage.removeItem("roles");
    localStorage.removeItem("accessToken");
    localStorage.removeItem("tokenType");
    window.location.reload();
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
    <div className={navbar ? "navbar1 active" : "navbar1"}>
      <div className="nav-container">
        <div className="nav-item nav-logo">
          <Link to="/">
            <img src={logo} border="0" id="logo" />
          </Link>
        </div>

        <div className="nav-item nav-menu">
          <ul className="navbar-nav">
            <li>
              <Link className="nav-link header-link" to="./">Địa điểm</Link>
            </li>
            <li>
              <Link className="nav-link header-link">Trải nghiệm</Link>
            </li>
            {localStorage.getItem("roles") && (
              <>
                <li>
                  <Button onClick={toAccount}>
                    Thông tin
                  </Button>
                </li>
                <li>
                  <Button onClick={logout}>
                    Đăng xuất
                  </Button>
                </li>
              </>
            )}
            {!localStorage.getItem("roles") && (
              <>
                <li>
                  <Button onClick={toggleLogin}>
                    Đăng nhập
                  </Button>
                  <Modal
                    className="modal-dialog modal-dialog-centered"
                    isOpen={login}
                    toggle={toggleLogin}
                  >
                    <ModalHeader>
                      <h2>Đăng nhập</h2>
                    </ModalHeader>
                    <ModalBody>
                      <Login />
                    </ModalBody>
                  </Modal>
                </li>
                <li>
                  <Button onClick={toggleSignup}>
                    Đăng ký
                  </Button>
                  <Modal
                    className="modal-dialog modal-dialog-centered"
                    isOpen={signup}
                    toggle={toggleSignup}
                  >
                    <ModalHeader>
                      <h2>Đăng ký</h2>
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
