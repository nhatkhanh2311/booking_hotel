import * as IoIcons from 'react-icons/io';
import * as AiIcons from 'react-icons/ai';
import React, {useState} from "react";
import "./css/Navbar.css";

export default function NavbarUser(props) {
    const [tab, setTab] = useState('booked');

    return (
        <div className="Sidebar">
            <ul className="SidebarList">
                <div className="logo">

                </div>

                <li onClick={() => setTab('booked')} className="row">
                    <div className="icon"><AiIcons.AiFillSchedule /></div>
                    <div className="title">Phòng đã đặt</div>
                </li>

                <li onClick={() => setTab('information')} className="row">
                    <div className="icon"><IoIcons.IoMdPeople /></div>
                    <div className="title">Cập nhật thông tin</div>
                </li>
            </ul>
            {props.render(tab)}
        </div>
    )
}
