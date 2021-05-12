import * as IoIcons from 'react-icons/io';
import * as AiIcons from 'react-icons/ai';
import React, {useState} from "react";
import "./css/Navbar.css";

export default function NavbarAdmin(props) {
    const [tab, setTab] = useState('confirm');

    return (
        <div className="Sidebar">
            <ul className="SidebarList">
                <div className="logo">

                </div>

                <li onClick={() => setTab('confirm')} className="row">
                    <div className="icon"><IoIcons.IoIosPaper /></div>
                    <div className="title">Duyệt bài đăng</div>
                </li>

                <li onClick={() => setTab('account')} className="row">
                    <div className="icon"><AiIcons.AiFillIdcard /></div>
                    <div className="title">Danh sách tài khoản</div>
                </li>
            </ul>
            {props.render(tab)}
        </div>
    )
}
