import React, {useState} from "react";
import "./css/Navbar.css";
import * as IoIcons from 'react-icons/io';
import * as AiIcons from 'react-icons/ai';

export default function NavbarUser(props) {
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

                <li onClick={() => setTab('booked')} className="row">
                    <div className="icon"><AiIcons.AiFillSchedule/></div>
                    <div className="title">Phòng đã đặt</div>
                </li>
            </ul>
            {props.render(tab)}
        </div>
    );
}
