import React, {useEffect, useState} from 'react';
import NavbarUser from "../components/NavbarUser";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Information from "../components/Information";
import Booked from "../components/user/Booked";
import History from "../components/user/History";

export default function User() {
    const [tab, setTab] = useState("");

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Header/>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                <div style={{ width: "300px" }}>
                    <NavbarUser render={(tab) => setTab(tab)}/>
                </div>
                {tab === 'booked' && <Booked/>}
                {tab === 'history' && <History/>}
                {tab === 'information' && <Information/>}
            </div>
            <Footer/>
        </>
    );
}
