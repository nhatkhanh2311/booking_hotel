import React, { useEffect } from 'react';
import { useHistory, useLocation } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import "./css/SearchResults.css";
import { Button, Form, FormGroup, Input, Label, ButtonToggle } from "reactstrap";
import { Zoom } from "react-slideshow-image";
import SearchLeft from "./SearchLeft"
import * as IoIcons from 'react-icons/ai';


export default function SearchResults() {
    const history = useHistory();
    const location = useLocation();
    const classes = useStyles();

    const toHotel = (hotel) => {
        history.push('/hotel', {
            capacity: location.state.capacity,
            checkIn: location.state.checkIn,
            checkOut: location.state.checkOut,
            city: location.state.city,
            hotel: hotel
        });
    }
    const standard = (start) => {
        let stars = [];
        for (let i = 0; i < start; i++) stars.push(<IoIcons.AiFillStar />);
        return stars;
    };
    useEffect(() => {
        console.log(location.state);
    });

    return (
        <div className="container-search-result">
            <div>
                <h4 style={{ marginLeft: '45px' }} className="title-search">Your Reservation</h4>
            <SearchLeft/>
            </div>

            <div className="right">
                <h4 style={{ marginLeft: '25px' }} className="title-search">Hotel</h4>
                {location.state.data.map((hotel) => (
                    <Paper className="hotel-info">
                        <Grid container spacing={2}>
                            <Grid item>
                                <Zoom scale={0.4} className={classes.image}>
                                    {hotel.hotel.images.map((each, index) => (
                                        <img key={index} style={{width: "100%"}} src={`data:image/jpeg;base64,${each.img}`}/>
                                    ))}
                                </Zoom>
                            </Grid>
                            <Grid item xs={12} sm container style={{ marginLeft: '20px' }}>
                                <Grid item xs container direction="column" spacing={2}>
                                    <Grid item xs>
                                        <Typography gutterBottom variant="subtitle1">
                                           <h6> {hotel.hotel.name}</h6>
                                        </Typography>
                                        <Typography variant="body2" gutterBottom>
                                            Address: {hotel.hotel.address.street} - {hotel.hotel.address.city}
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary">
                                            We have {hotel.hotel.rooms.length} rooms for you
                                        </Typography>
                                        <Typography variant="body2" color="red">
                                        {standard(hotel.hotel.standard)}
                                        </Typography>
                                    </Grid>
                                    <Grid item sm>
                                    <ButtonToggle className={classes.button} onClick={() => toHotel(hotel.hotel)}>
                                            See more
                                        </ButtonToggle>
                                    </Grid>
                                    
                                </Grid>
                            </Grid>
                        </Grid>
                    </Paper>
                ))}
            </div>
        </div>
    );
}

const useStyles = makeStyles((theme) => ({
    
    image: {
        width: 250,
        height: 180,
        marginLeft: '20px'
    },
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    },
    button: {
        backgroundColor: 'rgb(9, 32, 56)',
        marginTop: '25px',
        width: '150px'
    }
}));
