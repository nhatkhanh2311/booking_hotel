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
        localStorage.clear()
        window.location.reload();
    }

    return (
        <div className="Sidebar">
            <ul className="SidebarList">
                <div className="nav-item nav-logo">
                    <Link to="/admin">
                        <img src={logo} border="0" id="logo" />
                    </Link>
                </div>

                <div className="avatar-sidebar">
                <img  src="https://cdn.himalaya.com/d64ae4a39c1f4d4594fa9d1216ab0b29.jpg?auth_key=4102416000-1234-0-e63fc56ba1b11b35a34d758f36c371d4"></img>

                </div>

                <li onClick={() => setTab('information')} className="row">
                    <div className="icon"><IoIcons.IoMdPeople/></div>
                    <div className="title">Profile</div>
                </li>

                <li onClick={() => setTab('statistic')} className="row">
                    <div className="icon"><IoIcons.IoIosPaper/></div>
                    <div className="title">Hotel</div>
                </li>

                <li onClick={() => setTab('account')} className="row">
                    <div className="icon"><AiIcons.AiFillIdcard/></div>
                    <div className="title">Account management</div>
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

