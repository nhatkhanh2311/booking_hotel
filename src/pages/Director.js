import React, {useEffect, useState} from 'react';
import Header from "../components/Header";
import NavbarDirector from "../components/NavbarDirector";
import Footer from "../components/Footer";
import Post from "../components/director/Post";
import Information from "../components/Information";

export default function Director() {
    const [tab, setTab] = useState("");

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Header/>
            <div style={{display: 'flex', flexDirection: 'row', width: '98vw'}}>
                <NavbarDirector render={(tab) => setTab(tab)}/>
                {tab === 'posted' && <Post/>}
                {tab === 'information' && <Information/>}
            </div>
        </>
    );
}
