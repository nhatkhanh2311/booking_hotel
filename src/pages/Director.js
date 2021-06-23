import React, {useState} from 'react';
import Header from "../components/Header";
import NavbarDirector from "../components/NavbarDirector";
import Footer from "../components/Footer";
import Post from "../components/director/Post";
import Information from "../components/Information";

export default function Director() {
    const [tab, setTab] = useState("");

    return (
        <>
            <Header/>
            <div className='header-background' style={{ height: '60px', width:'100%' }}></div>
            <div style={{display: 'flex', flexDirection: 'row', width: '98vw'}}>
                <NavbarDirector render={(tab) => setTab(tab)}/>
                {tab === 'posted' && <Post/>}
                {tab === 'information' && <Information/>}
            </div>
        </>
    );
}
