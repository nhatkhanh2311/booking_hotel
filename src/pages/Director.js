import React, {useState} from 'react';
import Header from "../components/Header";
import NavbarHotelDirector from "../components/NavbarHotelDirector";
import Footer from "../components/Footer";
import Post from "../components/director/Post";
import BookingRequest from "../components/BookingRequest";
import Information from "../components/Information";

export default function Director() {
    const [tab, setTab] = useState("");

    return (
        <>
            <Header/>
            <div style={{display: 'flex', flexDirection: 'row'}}>
                <NavbarHotelDirector render={(tab) => setTab(tab)}/>
                {tab === 'posted' && <Post/>}
                {tab === 'request' && <BookingRequest/>}
                {tab === 'information' && <Information/>}
            </div>
            <Footer/>
        </>
    );
}
