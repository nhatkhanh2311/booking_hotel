import * as IoIcons from 'react-icons/io';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import React from "react";
import "./css/Navbar.css";

export default function NavbarUser() {
  return (
    <div className="Sidebar">
      <ul className="SidebarList">

        <div className="logo">
        
        </div>

        <li onClick={() => window.location.pathname = "/login"} className="row">
          <div className="icon"><AiIcons.AiFillSchedule /></div>
          <div className="title">Phòng đã đặt</div>
        </li>


        <li conClick={() => window.location.pathname = "/"} className="row">
          <div className="icon"> <IoIcons.IoMdPeople /></div>
          <div className="title">Cập nhật thông tin</div>
        </li>
      </ul>
    </div>
  )
}