import React from 'react';
import PropTypes from 'prop-types';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import * as FaIcons from 'react-icons/fa';
import * as IoIcons from 'react-icons/io';
import HotelList from "./HotelList";
import RoomList from "./RoomList";
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function TabPanel(props) {
    const {children, value, index, ...other} = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`scrollable-force-tabpanel-${index}`}
            aria-labelledby={`scrollable-force-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
}));

export default function Post() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

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
            <HotelList/>
        </div>
    );
}
