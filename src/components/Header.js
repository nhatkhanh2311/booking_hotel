import React, {useState} from "react";
import "./css/Header-Footer.css"
import {Link, useHistory} from "react-router-dom";
import logo from "../assets/logo.gif";
import {Button, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";
import Login from "./Login";
import SignUp from "./SignUp";

export default function Header() {
    const history = useHistory();
    const [login, setLogin] = useState(false);
    const [signup, setSignup] = useState(false);
    const toggleLogin = () => setLogin(!login);
    const toggleSignup = () => setSignup(!signup);

    const toAccount = () => history.push('/account');

    const logout = () => {
        localStorage.removeItem('username');
        localStorage.removeItem('roles');
        localStorage.removeItem('accessToken');
        localStorage.removeItem('tokenType');
        window.location.reload();
    }

    return (
        <header>
            <nav className="navbar navbar-expand-md navbar-dark clearfix masthead">
                <div className="navbar-brand mx-auto">
                    <Link to="/">
                        <img src={logo} border="0" id="logo"/>
                    </Link>
                </div>
                <div className="collapse navbar-collapse navbar-horizontal-menu">
                    <ul className="navbar-nav ml-auto">
                        <li>
                            <Link className="nav-link header-link">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link className="nav-link header-link">
                                Blog
                            </Link>
                        </li>
                        {localStorage.getItem('roles') && (
                            <>
                                <li>
                                    <Button color="rgb(82, 80, 80)" onClick={toAccount}>
                                        Thông tin
                                    </Button>
                                </li>
                                <li>
                                    <Button color="danger" onClick={logout}>
                                        Đăng xuất
                                    </Button>
                                </li>
                            </>
                        )}
                        {!localStorage.getItem('roles') && (
                            <>
                                <li>
                                    <Button class="button"  onClick={toggleLogin}>
                                        Login
                                    </Button>
                                    <Modal className="modal-dialog modal-dialog-centered" isOpen={login} toggle={toggleLogin}>
                                        <ModalHeader>
                                            <h2>Login</h2>
                                        </ModalHeader>
                                        <ModalBody>
                                            <Login/>
                                        </ModalBody>
                                    </Modal>
                                </li>
                                <li>
                                    <Button class="button" onClick={toggleSignup}>
                                        Signup
                                    </Button>
                                    <Modal className="modal-dialog modal-dialog-centered" isOpen={signup} toggle={toggleSignup}>
                                        <ModalHeader>
                                            <h3>Signup</h3>
                                        </ModalHeader>
                                        <ModalBody>
                                            <SignUp/>
                                        </ModalBody>
                                    </Modal>
                                </li>
                            </>
                        )}
                    </ul>
                </div>
            </nav>
        </header>
    )
}
