import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from "react-router-dom";
import { axios } from "../axios";
import "./css/HotelDetail.css";
import { Button, Modal, ModalBody, ModalFooter, Table } from "reactstrap";
import { Zoom } from "react-slideshow-image";
import * as IoIcons from 'react-icons/ai';
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from 'swiper';
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
        for (let i = 0; i < location.state.hotel.standard; i++) stars.push(<IoIcons.AiFillStar />);
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
        setRoom(location.state.hotel.rooms[1]);
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
                    <label/>
                    <span>{location.state.hotel.hOwner.email}</span>
                </div>
                <div>
                    <label>Standard: </label>
                    <span>{standard()}</span>
                </div>
            </div>

            <div className="room-list">
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
                        <div>Tên phòng: {room.name}</div>
                        <div>Diện tích: {room.area}m²</div>
                        <div>Số người: {room.capacity}</div>
                        <div>Giá tiền: {room.price}đ/ngày</div>
                        <div>{room.description}</div>
                    </div>
                    <div className="room-right-content">
                        <div className="right-content">
                            <div className="content-info">
                                <h5>GRAND LUXURY</h5>
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
                    <h4>Bạn có chắc chắn muốn đặt phòng này trong khoảng từ {location.state.checkIn} đến {location.state.checkOut}?</h4>
                </ModalBody>
                <ModalFooter className="justify-content-center">
                    <Button outline color="success" style={{ width: '30%' }}
                            onClick={() => sendData(idBook, location.state.checkIn, location.state.checkOut)}>
                        Xác nhận
                    </Button>
                    <Button outline color="danger" style={{ width: '30%' }} onClick={toggleAccept}>
                        Không
                    </Button>
                </ModalFooter>
            </Modal>

            <Modal className='modal-dialog modal-dialog-centered' isOpen={login} toggle={toggleLogin}>
                <ModalBody>
                    <h4>Bạn phải đăng nhập để đặt phòng!</h4>
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
                    <h4>Đặt phòng thành công</h4>
                </ModalBody>
                <ModalFooter className="justify-content-center">
                    <Button outline color="success" style={{ width: '40%' }} onClick={() => history.push('/account')}>
                        Đến trang cá nhân
                    </Button>
                    <Button outline color="success" style={{ width: '40%' }} onClick={() => history.push('/')}>
                        Về trang chủ
                    </Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}
