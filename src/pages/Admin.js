import React, {useEffect, useState} from 'react';
import NavbarAdmin from "../components/NavbarAdmin";
import AccountList from "../components/admin/AccountList";
import Information from "../components/Information";
import StatisticTab from "../components/admin/StatisticTab";

export default function Admin() {
    const [tab, setTab] = useState("");

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                <div style={{ width: "300px" }}>
                    <NavbarAdmin render={(tab) => setTab(tab)} />
                </div>
                {tab === 'statistic' && <StatisticTab />}
                {tab === 'account' && <AccountList />}
                {tab === 'information' && <Information />}
            </div>
        </>
    );
}
