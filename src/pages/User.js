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
            <div style={{ display: 'flex' }}>
            <Information/>
            <img style={{ width: '250px', height: '250px', marginTop: '5%' }} src="https://icons-for-free.com/iconfiles/png/512/add+avatar+human+man+profile+icon-1320085876593184757.png"></img>
            </div>
            <Footer/>
        </>
    );
}
