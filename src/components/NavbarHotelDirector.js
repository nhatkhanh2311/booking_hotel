import * as IoIcons from 'react-icons/io';

import * as AiIcons from 'react-icons/ai';
import React from "react";
import "./css/Navbar.css";

export default function NavbarHotelDirector() {
  return (
    <div className="Sidebar">
      <ul className="SidebarList">

        <div className="logo">
        
        </div>

        <li onClick={() => window.location.pathname = "/Mypost"} className="row">
          <div className="icon"><IoIcons.IoIosPaper /></div>
          <div className="title">Bài đăng</div>
        </li>

        <li onClick={() => window.location.pathname = "/BookingRequest"} className="row">
          <div className="icon"><AiIcons.AiTwotoneBell /></div>
          <div className="title">Yêu cầu đặt phòng</div>
        </li>


        <li conClick={() => window.location.pathname = "/infomarionUpdate"} className="row">
          <div className="icon"> <IoIcons.IoMdPeople /></div>
          <div className="title">Cập nhật thông tin</div>
        </li>
      </ul>
    </div>
  )
}
