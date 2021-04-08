import React, {useState} from "react";
import {Link} from "react-router-dom";
import logo from "../assets/logo.png";
import {Button, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";
import Login from "./login/Login";
import SignUp from "./signUp/SignUp";

export default function Header() {
    const [login, setLogin] = useState(false);
    const [signup, setSignup] = useState(false);
    const toggleLogin = () => setLogin(!login);
    const toggleSignup = () => setSignup(!signup);

    return (
        <div>
            <header>
                <nav className="navbar navbar-expand-md navbar-dark clearfix masthead">
                    <div className="navbar-brand mx-auto">
                        <Link to="/">
                            <img src={logo} border="0" width="243" height="auto" id="logo"/>
                        </Link>
                    </div>
                    <div className="collapse navbar-collapse navbar-horizontal-menu">
                        <ul className="navbar-nav ml-auto">
                            <li>
                                <Button color="success" onClick={toggleLogin}>
                                    Đăng nhập
                                </Button>
                                <Modal className="modal-dialog modal-dialog-centered" isOpen={login} toggle={toggleLogin}>
                                    <ModalHeader>
                                        <h2>Sign In</h2>
                                    </ModalHeader>
                                    <ModalBody>
                                        <Login/>
                                    </ModalBody>
                                </Modal>
                            </li>
                            <li>
                                <Button color="success" onClick={toggleSignup}>
                                    Đăng ký
                                </Button>
                                <Modal className="modal-dialog modal-dialog-centered" isOpen={signup} toggle={toggleSignup}>
                                    <ModalHeader>
                                        <h3>Sign Up</h3>
                                    </ModalHeader>
                                    <ModalBody>
                                        <SignUp/>
                                    </ModalBody>
                                </Modal>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        </div>
    )
}