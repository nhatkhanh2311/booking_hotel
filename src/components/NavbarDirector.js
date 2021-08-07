import React, {useEffect, useState} from "react";
import {axios} from "../axios";
import "./css/Navbar.css";
import * as IoIcons from 'react-icons/io';
import * as AiIcons from 'react-icons/ai';
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

export default function NavbarDirector(props) {
    const [tab, setTab] = useState('information');

    const getAvatar = () => {
        const fetchData = () => {
            axios
                .get('/get-avatar')
                .then(function (res) {
                    console.log(res.data);
                })
                .catch(function (err) {
                    console.log(err);
                })
        }
        fetchData();
    }

    const logout = () => {
        localStorage.removeItem("username");
        localStorage.removeItem("roles");
        localStorage.removeItem("accessToken");
        localStorage.removeItem("tokenType");
        window.location.reload();
    }

    useEffect(() => {
        getAvatar();
    }, []);

    return (
        <div className="Sidebar">
            <ul className="SidebarList">
                <div className="nav-item nav-logo">
                    <Link to="/">
                        <img src={logo} border="0" id="logo" />
                    </Link>
                </div>

                <div className="avatar-sidebar">
                    <img src="https://i.pinimg.com/736x/21/2d/12/212d12e421963f8a66f95aece1182069.jpg" />
                </div>

                <li onClick={() => setTab('information')} className="row">
                    <div className="icon"><IoIcons.IoMdPeople/></div>
                    <div className="title">Thông tin cá nhân</div>
                </li>

                <li onClick={() => setTab('posted')} className="row">
                    <div className="icon"><IoIcons.IoIosPaper/></div>
                    <div className="title">Khách sạn</div>
                </li>

                <li onClick={() => setTab('statisticmonth')} className="row">
                    <div className="icon"><IoIcons.IoIosAlbums/></div>
                    <div className="title">Thống kê</div>
                </li>

                <li onClick={logout} className="row">
                    <div className="icon"><IoIcons.IoIosExit/></div>
                    <div className="title">Logout</div>
                </li>
            </ul>
            {props.render(tab)}
        </div>
    );
}
