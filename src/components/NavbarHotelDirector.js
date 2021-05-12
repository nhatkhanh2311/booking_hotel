import * as IoIcons from 'react-icons/io';
import * as AiIcons from 'react-icons/ai';
import React, {useState} from "react";
import "./css/Navbar.css";

export default function NavbarHotelDirector(props) {
    const [tab, setTab] = useState('posted');

    return (
        <div className="Sidebar">
            <ul className="SidebarList">
                <div className="logo">

                </div>

                <li onClick={() => setTab('posted')} className="row">
                    <div className="icon"><IoIcons.IoIosPaper /></div>
                    <div className="title">Bài đăng</div>
                </li>

                <li onClick={() => setTab('request')} className="row">
                    <div className="icon"><AiIcons.AiTwotoneBell /></div>
                    <div className="title">Yêu cầu đặt phòng</div>
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
