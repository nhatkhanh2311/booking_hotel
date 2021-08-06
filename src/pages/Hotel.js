import React, {useEffect} from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HotelDetail from "../components/HotelDetail";

export default function Hotel() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Header color="rgb(5, 24, 43)"/>
            <HotelDetail/>
            <Footer/>
        </>
    );
}
