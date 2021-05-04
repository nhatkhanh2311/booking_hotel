import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import * as FaIcons from 'react-icons/fa';
import * as IoIcons from 'react-icons/io';
import HotelList from "./HotelList";
import RoomList from "./RoomList";
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const dataRoom =[
  {'code':'102','price': 300000,'describe': "Phòng sạch sẽ thoáng mát ",'type': "Phòng khách sạn"},
  {'code':'305','price': 580000,'describe': "Phòng sạch sẽ thoáng mát",'type': "Phòng khách sạn"},
  {'code':'207','price': 600000,'describe': "Phòng sạch sẽ thoáng mát",'type': "Phòng khách sạn"},
  {'code':'408','price': 900000,'describe': "Phòng sạch sẽ thoáng mát",'type': "Phòng khách sạn"},
  {'code':'47','price': 200000,'describe': "Phòng sạch sẽ thoáng mát",'type': "Phòng khách sạn"},
];

const dataHotel = [
  {'name':'Frozen yoghurt','type': "Nguyễn văn A",'city': "Hải Phòng",'boss':"Trần Cảnh"},
  {'name':'Ice cream sandwich', 'type':"Nguyễn văn Nguyên",'city': "Thái Nguyên",'boss': "Lý Công Uẩn"},
  {'name':'Eclair', 'type':"Nguyễn văn Loan", 'city':"Thái Nguyên",'boss': "Lê Hoàng"},
  {'name':'Cupcake', 'type':"Nguyễn văn Huyền", 'city':"Thái Nguyên",'boss': "Nguyễn Long"},
  {'name':'Gingerbread','type': "Nguyễn văn Phong",'city': "Thái Nguyên", 'boss':"Phạm Hùng"},
];



function TabPanel(props) {
  const { children, value, index, ...other } = props;

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

function a11yProps(index) {
  return {
    id: `scrollable-force-tab-${index}`,
    'aria-controls': `scrollable-force-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function ScrollableTabsButtonForce() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="on"
          indicatorColor="primary"
          textColor="primary"
          aria-label="scrollable force tabs example"
        >
          <Tab label="Khách sạn" icon={<FaIcons.FaHotel />} />
          <Tab label="Phòng khách sạn" icon={<IoIcons.IoIosBed />} />

        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
       <HotelList data={dataHotel}></HotelList>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <RoomList data = {dataRoom}></RoomList>
      </TabPanel>

    </div>
  );
}
