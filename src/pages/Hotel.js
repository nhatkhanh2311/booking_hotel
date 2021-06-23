import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HotelDetail from "../components/HotelDetail";

export default function Hotel() {
    return (
        <>
            <Header/>
            <div className='header-background' style={{ height: '60px', width:'100%' }}></div>
            <HotelDetail/>
            <Footer/>
        </>
    );
}
