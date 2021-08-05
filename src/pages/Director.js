import React, {useEffect, useState} from 'react';
import NavbarDirector from "../components/NavbarDirector";
import Post from "../components/director/Post";
import Information from "../components/Information";

export default function Director() {
    const [tab, setTab] = useState("");

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <div style={{display: 'flex', flexDirection: 'row', width: '98vw'}}>
                <NavbarDirector render={(tab) => setTab(tab)}/>
                {tab === 'posted' && <Post/>}
                {tab === 'information' && <Information/>}
            </div>
        </>
    );
}
