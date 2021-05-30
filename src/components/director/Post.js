import React, {useState} from 'react';
import {useStyles} from "../Table";
import HotelList from "./HotelList";
import RoomList from "./RoomList";

export default function Post() {
    const classes = useStyles();
    const [tab, setTab] = useState('hotel');
    const [data, setData] = useState({});

    return (
        <div className={classes.root}>
            {tab === 'hotel' && <HotelList render={(tab, data) => {setTab(tab); setData(data)}}/>}
            {tab === 'room' && <RoomList data={data} render={(tab) => setTab(tab)}/>}
        </div>
    );
}
