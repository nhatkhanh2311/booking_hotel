import React, {useEffect} from 'react';
import {Button, Col, Collapse, Form, FormGroup, Input, Label, Table, UncontrolledCarousel} from "reactstrap";
import "./css/HotelDetail.css";
import * as IoIcons from 'react-icons/ai';
import {useLocation} from "react-router-dom";
import {Zoom} from "react-slideshow-image";

export default function HotelDetail() {
    const location = useLocation();

    const standard = () => {
        let stars = [];
        for (let i = 0; i < location.state.hotel.standard; i++) stars.push(<IoIcons.AiFillStar/>);
        return stars;
    }

    useEffect(() => {
        console.log(location.state);
    })

    return (
        <div>
            <h2 className="h2">Khách sạn {location.state.hotel.name}</h2>
            <div className="container">
                <div className="cou">
                    <Zoom scale={0.4}>
                        {location.state.hotel.images.map((each, index) => (
                            <img key={index} style={{width: "100%"}} src={`data:image/jpeg;base64,${each.img}`}/>
                        ))}
                    </Zoom>
                </div>

                <div className="table">
                    <Table>
                        <tr>
                            <th>Địa chỉ</th>
                            <td>{location.state.hotel.address.street} - {location.state.hotel.address.city}</td>
                        </tr>

                        <tr>
                            <th>Liên hệ</th>
                            <td>{location.state.hotel.hOwner.userDetail.phoneNumber}</td>
                        </tr>

                        <tr>
                            <th>Email</th>
                            <td>{location.state.hotel.hOwner.email}</td>
                        </tr>

                        <tr>
                            <th>Chất lượng</th>
                            <td style={{color: "#FFBF00"}}>{standard()}</td>
                        </tr>
                    </Table>
                </div>
            </div>

            <h2 className="h2">Phòng thuộc khách sạn</h2>
            {location.state.hotel.rooms.map((room) => (
                <div className="dt">
                    <div className="img">
                        <Zoom scale={0.4}>
                            {room.images.map((each, index) => (
                                <img key={index} style={{width: "100%"}} src={`data:image/jpeg;base64,${each.img}`}/>
                            ))}
                        </Zoom>
                    </div>
                    <div className="table">
                        <Table borderless className="table">
                            <tr>
                                <th>Tên phòng</th>
                                <td>{room.name}</td>
                            </tr>

                            <tr>
                                <th>Diện tích</th>
                                <td>{room.area}m²</td>
                            </tr>

                            <tr>
                                <th>Số người</th>
                                <td>{room.capacity}</td>
                            </tr>

                            <tr>
                                <th>Mô tả</th>
                                <td>{room.description}</td>
                            </tr>

                            <tr>
                                <th>Giá tiền/ngày</th>
                                <td>{room.price} VND</td>
                            </tr>

                            <tr>
                                <th/>
                                <td><Button color="info">Đặt phòng</Button></td>
                            </tr>
                        </Table>
                    </div>
                </div>
            ))}
        </div>
    )
}
