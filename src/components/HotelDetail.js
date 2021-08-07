import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from "react-router-dom";
import { axios } from "../axios";
import "./css/HotelDetail.css";
import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";
import * as IoIcons from 'react-icons/ai';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";

export default function HotelDetail() {
    const history = useHistory();
    const location = useLocation();
    const [idBook, setIdBook] = useState(0);
    const [room, setRoom] = useState({})
    const [accept, setAccept] = useState(false);
    const toggleAccept = () => setAccept(!accept);
    const [login, setLogin] = useState(false);
    const toggleLogin = () => setLogin(!login);
    const [notUser, setNotUser] = useState(false);
    const toggleNotUser = () => setNotUser(!notUser);
    const [success, setSuccess] = useState(false);
    const toggleSuccess = () => setSuccess(!success);

    const standard = () => {
        let stars = [];
        for (let i = 0; i < location.state.hotel.standard; i++) stars.push(<IoIcons.AiFillStar style={{color: 'yellow', fontSize: '15px', opacity: '1'}}/>);
        return stars;
    }

    const sendData = (id, from, to) => {
        const fetchData = () => {
            axios
                .post(`/user/book/${id}/${from}/${to}`)
                .then((res) => {
                    console.log(res);
                    toggleAccept();
                    toggleSuccess();
                })
                .catch((err) => {
                    console.log(err);
                });
        }
        fetchData();
    }

    const booking = (id) => {
        if (localStorage.getItem('roles') == null) toggleLogin();
        else if (localStorage.getItem('roles') === 'ROLE_USER') {
            toggleAccept();
            setIdBook(id);
        }
        else toggleNotUser();
    }

    useEffect(() => {
        console.log(location.state);
        setRoom(location.state.hotel.rooms[0]);
    }, []);

    const roomInf = (room) => {
        setRoom(room);
        console.log(room);
    }
    return (
        <div className="room-page">
            <div className="hotel-info container">
                <h4>{location.state.hotel.name}</h4>
                <div>
                    <label>Address: </label>
                    <span>{location.state.hotel.address.street} - {location.state.hotel.address.city}</span>
                </div>
                <div>
                    <label>Contact: </label>
                    <span>{location.state.hotel.hOwner.userDetail.phoneNumber}</span>
                </div>
                <div>
                    <label />
                    <span>{location.state.hotel.hOwner.email}</span>
                </div>
                <div>
                    <label>Standard: </label>
                    <span>{standard()}</span>
                </div>
            </div>

            <div className="room-list-result">
                <div>
                    <Swiper className="swiper-container container"
                        spaceBetween={0}
                        slidesPerView={3}
                        onSwiper={(swiper) => console.log(swiper)}
                        onSlideChange={() => console.log('slide change')}
                        loop={true}
                        autoplay={{
                            delay: 3000
                        }}
                    >
                        {location.state.hotel.rooms.map((room) => (
                            <SwiperSlide onClick={() => roomInf(room)} className='swiper-slide'>
                                <span className="cost-room">{room.price}đ</span>
                                <img src={`data:image/jpeg;base64,${room.images[0].img}`} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                <div className="room-info">
                    <div className="room-left-content">
                        <h1>Room nformation</h1>
                        <div className=" group"><label>Name:</label> <span>{room.name}</span></div>
                        <div className="group"><label>Area:</label> <span>{room.area}m²</span></div>
                        <div className="group"><label>People: </label><span>{room.capacity}</span></div>
                        <div className="group"><label>
                            Cost:
                        </label> <span>{room.price}vnd/day</span></div>
                        <div className="group"><label>Descripton: </label><span>{room.description}</span></div>
                    </div>
                    <div className="room-right-content">
                        <div className="right-content">
                            <div className="content-info">
                                <h5>{location.state.hotel.name}</h5>
                                <p>{location.state.hotel.address.street} - {location.state.hotel.address.city}</p>
                                <div className="checkin group">
                                    <label>Check in </label>
                                    <span className="sign">:</span>
                                    <span className="content-group">{location.state.checkIn}</span>
                                </div>
                                <div className="checkout group">
                                    <label>Check out </label>
                                    <span className="sign">:</span>
                                    <span className="content-group">{location.state.checkOut}</span>
                                </div>
                                <div className="capacity group">
                                    <label>Capacity </label>
                                    <span className="sign">:</span>
                                    <span className="content-group">{room.capacity} people</span>
                                </div>
                                <Button className="selectBtn" style={{ width: '40%', backgroundColor: 'rgb(5, 24, 43)', textTransform: 'uppercase' }}
                                    onClick={() => booking(room.id)}>
                                    select available
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Modal className='modal-dialog modal-dialog-centered' isOpen={accept} toggle={toggleAccept}>
                <ModalBody>
                    <h4>Are you sure you want to book this room from {location.state.checkIn} to {location.state.checkOut}?</h4>
                </ModalBody>
                <ModalFooter className="justify-content-center">
                    <Button outline color="success" style={{ width: '30%' }}
                        onClick={() => sendData(idBook, location.state.checkIn, location.state.checkOut)}>
                        Confirm
                    </Button>
                    <Button outline color="danger" style={{ width: '30%' }} onClick={toggleAccept}>
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>
            <Modal className='modal-dialog modal-dialog-centered' isOpen={login} toggle={toggleLogin}>
                <ModalBody>
                    <h4>You must be logged in to make a reservation!</h4>
                </ModalBody>
                <ModalFooter className="justify-content-center">
                    <Button outline color="success" style={{ width: '30%' }} onClick={toggleLogin}>
                        OK
                    </Button>
                </ModalFooter>
            </Modal>
            <Modal className='modal-dialog modal-dialog-centered' isOpen={notUser} toggle={toggleNotUser}>
                <ModalBody>
                    <h4>Chức năng đặt phòng chỉ dành cho tài khoản người dùng!</h4>
                </ModalBody>
                <ModalFooter className="justify-content-center">
                    <Button outline color="success" style={{ width: '30%' }} onClick={toggleNotUser}>
                        OK
                    </Button>
                </ModalFooter>
            </Modal>
            <Modal className='modal-dialog modal-dialog-centered' isOpen={success}>
                <ModalBody>
                    <h4>
                        Booking successfully, check your email</h4>
                </ModalBody>
                <ModalFooter className="justify-content-center">
                    <Button outline color="success" style={{ width: '40%' }} onClick={() => history.push('/booking')}>
                        Check your reservation
                    </Button>
                    <Button outline color="success" style={{ width: '40%' }} onClick={() => history.push('/')}>
                        Go to home
                    </Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}
