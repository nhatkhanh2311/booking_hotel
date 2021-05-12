import React, {useState} from 'react';
import Header from "../components/Header";
import NavbarHotelDirector from "../components/NavbarHotelDirector";
import Footer from "../components/Footer";
import InformationUpdate from "../components/InformationUpdate";
import Post from "../components/Post";
import BookingRequest from "../components/BookingRequest";

export default function Director() {
    const [tab, setTab] = useState("");

    return (
        <>
            <Header/>
            <div style={{display: 'flex', flexDirection: 'row'}}>
                <NavbarHotelDirector render={(tab) => setTab(tab)}/>
                {tab === 'posted' && <Post/>}
                {tab === 'request' && <BookingRequest/>}
                {tab === 'information' && <InformationUpdate/>}
            </div>
            <Footer/>
        </>
    )
}
