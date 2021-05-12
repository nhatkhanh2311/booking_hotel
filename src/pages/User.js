import React, {useState} from 'react';
import NavbarUser from "../components/NavbarUser";
import Header from "../components/Header";
import Footer from "../components/Footer";
import RoomBooked from "../components/RoomBooked";
import InformationUpdate from "../components/InformationUpdate";

export default function User() {
    const [tab, setTab] = useState("");

    return (
        <>
            <Header/>
            <div style={{display: 'flex', flexDirection: 'row'}}>
                <NavbarUser render={(tab) => setTab(tab)}/>
                {tab === 'booked' && <RoomBooked/>}
                {tab === 'information' && <InformationUpdate/>}
            </div>
            <Footer/>
        </>
    )
}
