import React, {useState} from 'react';
import HotelList from "./HotelList";
import {useStyles} from "./Table";
import RoomList from "./RoomList";

export default function Post() {
    const classes = useStyles();
    const [tab, setTab] = useState('hotel');
    const [data, setData] = useState({});

    return (
        <div className={classes.root}>
            {/*<AppBar position="static" color="default">*/}
            {/*    <Tabs*/}
            {/*        value={value}*/}
            {/*        onChange={handleChange}*/}
            {/*        variant="scrollable"*/}
            {/*        scrollButtons="on"*/}
            {/*        indicatorColor="primary"*/}
            {/*        textColor="primary"*/}
            {/*        aria-label="scrollable force tabs example"*/}
            {/*    >*/}
            {/*        <Tab label="Khách sạn" icon={<FaIcons.FaHotel />} />*/}
            {/*        <Tab label="Phòng khách sạn" icon={<IoIcons.IoIosBed />} />*/}
            {/*    </Tabs>*/}
            {/*</AppBar>*/}

            {/*<TabPanel value={value} index={0}>*/}
            {/*    <HotelList data={}></HotelList>*/}
            {/*</TabPanel>*/}

            {/*<TabPanel value={value} index={1}>*/}
            {/*    <RoomList data={}></RoomList>*/}
            {/*</TabPanel>*/}
            {tab === 'hotel' && <HotelList render={(tab, data) => {setTab(tab); setData(data)}}/>}
            {tab === 'room' && <RoomList data={data} render={(tab) => setTab(tab)}/>}
        </div>
    );
}
