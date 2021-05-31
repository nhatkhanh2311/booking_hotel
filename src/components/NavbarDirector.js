import React, {useState} from "react";
import "./css/Navbar.css";
import * as IoIcons from 'react-icons/io';
import * as AiIcons from 'react-icons/ai';

export default function NavbarDirector(props) {
    const [tab, setTab] = useState('information');

    return (
        <div className="Sidebar">
            <ul className="SidebarList">
                <div className="logo">
                </div>

                <li onClick={() => setTab('information')} className="row">
                    <div className="icon"><IoIcons.IoMdPeople/></div>
                    <div className="title">Thông tin cá nhân</div>
                </li>

                <li onClick={() => setTab('posted')} className="row">
                    <div className="icon"><IoIcons.IoIosPaper/></div>
                    <div className="title">Khách sạn</div>
                </li>
            </ul>
            {props.render(tab)}
        </div>
    );
}
