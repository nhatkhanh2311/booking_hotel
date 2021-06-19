import React, {useEffect} from 'react';
import {useHistory, useLocation} from "react-router-dom";
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import "./css/SearchResults.css";
import {Button, Form, FormGroup, Input, Label, ButtonToggle} from "reactstrap";
import {Zoom} from "react-slideshow-image";

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

    useEffect(() => {
        console.log(location.state);
    });

    return (
        <div className="container">
            {/*<div className="left">*/}
            {/*    <div className="left2" style={{marginTop: 50}}>*/}
            {/*        <h6>Các bộ lọc phổ biến</h6>*/}

            {/*        <FormGroup check className="check">*/}
            {/*            <Input type="checkbox" name="check"/>*/}
            {/*            <Label for="exampleCheck" check className="label">*/}
            {/*                Giáp biển*/}
            {/*                <div className="rightLB">15</div>*/}
            {/*            </Label>*/}
            {/*        </FormGroup>*/}

            {/*        <FormGroup check className="check">*/}
            {/*            <Input type="checkbox" name="check"/>*/}
            {/*            <Label for="exampleCheck" check className="label">*/}
            {/*                Bãi biển*/}
            {/*                <div className="rightLB">26</div>*/}
            {/*            </Label>*/}
            {/*        </FormGroup>*/}

            {/*        <FormGroup check className="check">*/}
            {/*            <Input type="checkbox" name="check"/>*/}
            {/*            <Label for="exampleCheck" check className="label">*/}
            {/*                Hồ bơi*/}
            {/*                <div className="rightLB">10</div>*/}
            {/*            </Label>*/}
            {/*        </FormGroup>*/}

            {/*        <FormGroup check className="check">*/}
            {/*            <Input type="checkbox" name="check"/>*/}
            {/*            <Label for="exampleCheck" check className="label">*/}
            {/*                Bao gồm bữa sáng*/}
            {/*                <div className="rightLB">7</div>*/}
            {/*            </Label>*/}
            {/*        </FormGroup>*/}

            {/*        <FormGroup check className="check">*/}
            {/*            <Input type="checkbox" name="check"/>*/}
            {/*            <Label for="exampleCheck" check className="label">*/}
            {/*                5 sao*/}
            {/*                <div className="rightLB">32</div>*/}
            {/*            </Label>*/}
            {/*        </FormGroup>*/}

            {/*        <FormGroup check className="check">*/}
            {/*            <Input type="checkbox" name="check"/>*/}
            {/*            <Label for="exampleCheck" check className="label">*/}
            {/*                Căn hộ*/}
            {/*                <div className="rightLB">24</div>*/}
            {/*            </Label>*/}
            {/*        </FormGroup>*/}

            {/*        <FormGroup check className="check">*/}
            {/*            <Input type="checkbox" name="check"/>*/}
            {/*            <Label for="exampleCheck" check className="label">*/}
            {/*                Tự nấu*/}
            {/*                <div className="rightLB">42</div>*/}
            {/*            </Label>*/}
            {/*        </FormGroup>*/}
            {/*    </div>*/}

            {/*    <div className="left2">*/}
            {/*        <h6>Sức khỏe và an toàn</h6>*/}

            {/*        <FormGroup check className="check">*/}
            {/*            <Input type="checkbox" name="check"/>*/}
            {/*            <Label for="exampleCheck" check className="label">*/}
            {/*                Có phòng tập gym*/}
            {/*                <div className="rightLB">15</div>*/}
            {/*            </Label>*/}
            {/*        </FormGroup>*/}

            {/*        <FormGroup check className="check">*/}
            {/*            <Input type="checkbox" name="check"/>*/}
            {/*            <Label for="exampleCheck" check className="label">*/}
            {/*                Có chỗ nghỉ, có tăng cường các biện pháp an toàn và sức khỏe*/}
            {/*                <div className="rightLB">26</div>*/}
            {/*            </Label>*/}
            {/*        </FormGroup>*/}
            {/*    </div>*/}

            {/*    <div className="left2">*/}
            {/*        <h6>Hoạt động thú vị</h6>*/}

            {/*        <FormGroup check className="check">*/}
            {/*            <Input type="checkbox" name="check"/>*/}
            {/*            <Label for="exampleCheck" check className="label">*/}
            {/*                Xe đạp*/}
            {/*                <div className="rightLB">15</div>*/}
            {/*            </Label>*/}
            {/*        </FormGroup>*/}

            {/*        <FormGroup check className="check">*/}
            {/*            <Input type="checkbox" name="check"/>*/}
            {/*            <Label for="exampleCheck" check className="label">*/}
            {/*                Dạy nấu ăn*/}
            {/*                <div className="rightLB">26</div>*/}
            {/*            </Label>*/}
            {/*        </FormGroup>*/}

            {/*        <FormGroup check className="check">*/}
            {/*            <Input type="checkbox" name="check"/>*/}
            {/*            <Label for="exampleCheck" check className="label">*/}
            {/*                Tour đi bộ*/}
            {/*                <div className="rightLB">21</div>*/}
            {/*            </Label>*/}
            {/*        </FormGroup>*/}

            {/*        <FormGroup check className="check">*/}
            {/*            <Input type="checkbox" name="check"/>*/}
            {/*            <Label for="exampleCheck" check className="label">*/}
            {/*                Tour tham quan*/}
            {/*                <div className="rightLB">32</div>*/}
            {/*            </Label>*/}
            {/*        </FormGroup>*/}
            {/*    </div>*/}
            {/*</div>*/}
            <h2>Danh sách khách sạn có phòng ứng với điều kiện:</h2>
            <h2>Địa điểm: {location.state.city}</h2>
            <h2>Ngày nhận phòng: {location.state.checkIn}</h2>
            <h2>Ngày trả phòng: {location.state.checkOut}</h2>
            <h2>Số người: {location.state.capacity}</h2>

            <div className="right">
                {location.state.data.map((hotel) => (
                    <Paper className={classes.paper}>
                        <Grid container spacing={2}>
                            <Grid item>
                                <Zoom scale={0.4} className={classes.image}>
                                    {hotel.hotel.images.map((each, index) => (
                                        <img key={index} style={{width: "100%"}} src={`data:image/jpeg;base64,${each.img}`}/>
                                    ))}
                                </Zoom>
                            </Grid>
                            <Grid item xs={12} sm container>
                                <Grid item xs container direction="column" spacing={2}>
                                    <Grid item xs>
                                        <Typography gutterBottom variant="subtitle1">
                                            {hotel.hotel.name}
                                        </Typography>
                                        <Typography variant="body2" gutterBottom>
                                            Địa chỉ: {hotel.hotel.address.street} - {hotel.hotel.address.city}
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary">
                                            Có {hotel.hotel.rooms.length} phòng thỏa mãn điều kiện
                                        </Typography>
                                    </Grid>
                                </Grid>

                                <div>
                                    <div style={{marginTop:100}}>
                                        <ButtonToggle color="info" onClick={() => toHotel(hotel.hotel)}>
                                            Xem thêm
                                        </ButtonToggle>
                                    </div>
                                </div>
                            </Grid>
                        </Grid>
                    </Paper>
                ))}
            </div>
        </div>
    );
}

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(2),
        margin: 'auto',
        marginTop: 15,
        maxWidth: 700,
    },
    image: {
        width: 250,
        height: 250,
    },
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    }
}));
