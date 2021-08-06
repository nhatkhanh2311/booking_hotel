import React, {useState} from "react";
import "./css/Navbar.css";
import * as IoIcons from 'react-icons/io';
import * as AiIcons from 'react-icons/ai';
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

export default function NavbarDirector(props) {
    const [tab, setTab] = useState('information');
    const logout = () => {
        localStorage.removeItem("username");
        localStorage.removeItem("roles");
        localStorage.removeItem("accessToken");
        localStorage.removeItem("tokenType");
        window.location.reload();
      };
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
                <li className="row" onClick={logout}>
                    <div className="icon"><IoIcons.IoIosExit/></div>
                    <div className="title">Logout</div>
                </li>
                
            </ul>
            {props.render(tab)}
        </div>
    );
}
