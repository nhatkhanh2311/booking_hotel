import React, {useState} from 'react';
import {useStyles} from "../Table";
import Statistic from "./Statistic";
import StatisticHotel from "./StatisticHotel";

export default function StatisticTab() {
    const classes = useStyles();
    const [tab, setTab] = useState('city');
    const [name, setName] = useState('');

    return (
        <div className={classes.root}>
            {tab === 'city' && <Statistic render={(tab, name) => {setTab(tab); setName(name)}}/>}
            {tab === 'hotel' && <StatisticHotel name={name} render={(tab) => setTab(tab)}/>}
        </div>
    );
}
