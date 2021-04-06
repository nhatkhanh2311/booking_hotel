import React from "react";
import {Link} from "react-router-dom";
import logo from "../assets/logo.png";
import {Button} from "reactstrap";

export default function Header() {
    return (
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
                            <Button color="success">
                                Đăng nhập
                            </Button>
                        </li>
                        <li>
                            <Button color="success">
                                Đăng ký
                            </Button>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}