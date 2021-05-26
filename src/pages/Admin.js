import React, {useState} from 'react';
import NavbarAdmin from "../components/NavbarAdmin";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AccountList from "../components/admin/AccountList";
import PostRequest from "../components/PostRequest";
import Information from "../components/Information";
import Statistic from "../components/admin/Statistic";

export default function Admin() {
    const [tab, setTab] = useState("");

    return (
        <>
            <Header/>
            <div style={{display: 'flex', flexDirection: 'row'}}>
                <NavbarAdmin render={(tab) => setTab(tab)}/>
                {tab === 'statistic' && <Statistic/>}
                {tab === 'confirm' && <PostRequest/>}
                {tab === 'account' && <AccountList/>}
                {tab === 'information' && <Information/>}
            </div>
            <Footer/>
        </>
    );
}
