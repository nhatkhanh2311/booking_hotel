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
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSz4aFkpovoNEuEEtx9SyK8YjdSYCcUrJx9w&usqp=CAU" />
                </div>

                <li onClick={() => setTab('information')} className="row">
                    <div className="icon"><IoIcons.IoMdPeople/></div>
                    <div className="title">Thông tin cá nhân</div>
                </li>

                <li onClick={() => setTab('posted')} className="row">
                    <div className="icon"><IoIcons.IoIosPaper/></div>
                    <div className="title">Khách sạn</div>
                </li>
                <hr/>
                <li>
                    <i class="fas fa-sign-in-alt"></i>
                    Logout 
                </li>
            </ul>
            {props.render(tab)}
        </div>
    );
}
