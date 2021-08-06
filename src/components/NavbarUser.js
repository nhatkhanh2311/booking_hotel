import React, {useState} from "react";
import "./css/Navbar.css";
import * as IoIcons from 'react-icons/io';
import * as AiIcons from 'react-icons/ai';
import logo from "../assets/logo.png";
import {Link} from "react-router-dom";

export default function NavbarUser(props) {
    const [tab, setTab] = useState('information');

    const logout = () => {
        localStorage.removeItem("username");
        localStorage.removeItem("roles");
        localStorage.removeItem("accessToken");
        localStorage.removeItem("tokenType");
        window.location.reload();
    }

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

                <li onClick={() => setTab('booked')} className="row">
                    <div className="icon"><AiIcons.AiFillSchedule/></div>
                    <div className="title">Phòng đã đặt</div>
                </li>

                <li onClick={() => setTab('history')} className="row">
                    <div className="icon"><AiIcons.AiFillSchedule/></div>
                    <div className="title">Lịch sử đặt phòng</div>
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
