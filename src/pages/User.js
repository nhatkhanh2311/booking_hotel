import React, {useEffect, useState} from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import Information from "../components/Information";

export default function User() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Header color="rgb(5, 24, 43)"/>
            <Information/>
            <Footer/>
        </>
    );
}
