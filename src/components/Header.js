import React, {useState} from "react";
import "./css/Header-Footer.css"
import {Link, useHistory} from "react-router-dom";
import logo from "../assets/logo.png";
import {Button, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";
import Login from "./Login";
import SignUp from "./SignUp";
import {axios} from "../axios";

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

    const onSubmit = (e) => {
        const fetchData = async () => {
            await axios
                // .post('/director/hotel/new-hotel', {}, {
                //     headers: {
                //         Authorization: `${localStorage.getItem('tokenType')} ${localStorage.getItem('accessToken')}`
                //     }
                // })
                .post('/user/cancelBooing/1')
                // .get('/user/history-booking-before')
                // .post('/director/hotel/new-hotel', {
                //
                // }, {
                //     headers: {
                //         Authorization: `${localStorage.getItem('tokenType')} ${localStorage.getItem('accessToken')}`
                //     }
                // })
                // .get('/director/hotel', {
                //     headers: {
                //         Authorization: `${localStorage.getItem('tokenType')} ${localStorage.getItem('accessToken')}`
                //     }
                // })
                .then(function (res) {
                    console.log(res.data);
                })
                .catch(function (err) {
                    window.alert('Đã có lỗi xảy ra!');
                    console.log(err);
                });
        }
        fetchData();
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
<<<<<<< HEAD
                            <Link className="nav-link header-link" onClick={onSubmit}>
=======
                            <Link className="nav-link header-link">
>>>>>>> parent of f25f364 (client)
                                Địa điểm
                            </Link>
                        </li>
                        <li>
                            <Link className="nav-link header-link">
                                Trải nghiệm
                            </Link>
                        </li>
                        {localStorage.getItem('roles') && (
                            <>
                                <li>
                                    <Button color="success" onClick={toAccount}>
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
                                    <Button color="success" onClick={toggleLogin}>
                                        Đăng nhập
                                    </Button>
                                    <Modal className="modal-dialog modal-dialog-centered" isOpen={login} toggle={toggleLogin}>
                                        <ModalHeader>
                                            <h2>Đăng nhập</h2>
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
                                            <h2>Đăng ký</h2>
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
