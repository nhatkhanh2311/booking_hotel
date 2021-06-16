import React, { useState } from 'react';
import NavbarUser from "../components/NavbarUser";
import Header from "../components/Header";
import Footer from "../components/Footer";
import RoomBooked from "../components/RoomBooked";
import Information from "../components/Information";

export default function User() {
    const [tab, setTab] = useState("");

    return (
        <>
            <Header />
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                <div style={{ width: "300px" }}>
                    <NavbarUser render={(tab) => setTab(tab)} />
                </div>
                {tab === 'booked' && <RoomBooked />}
                {tab === 'information' && <Information />}
            </div>
            <Footer />
        </>
    );
}
