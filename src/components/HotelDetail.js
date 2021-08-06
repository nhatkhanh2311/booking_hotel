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
    }, []);

    const roomInf = (room) => {
        console.log(room);
        return room
    }

    return (
        <div className="room-page">
            <div className="hotel-info container">
                <h4>Grand luxury</h4>
                <div>
                    <label>Address: </label>
                    <span>{location.state.hotel.address.street} - {location.state.hotel.address.city}</span>
                </div>
                <div>
                    <label>Contact: </label>
                    <span>{location.state.hotel.hOwner.userDetail.phoneNumber}</span>

                </div>
                <div>
                    <label></label>
                    <span>{location.state.hotel.hOwner.email}</span>
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
                                <span className="cost-room">GiaTien</span>
                                <img src={`data:image/jpeg;base64,${room.images[0].img}`} />
                            </SwiperSlide>
                        ))}
                    </Swiper>

                </div>
                <div className="room-info">
                    <div className="room-left-content">
                        {/* thong tin cua room */}
                        <div>Ten phong: </div>
                        <div>Dien tich: </div>
                        <div>So nguoi: </div>
                        <div>Mo ta: </div>
                        <div>Gia tien: </div>
                        hotel rooms price lists holiday parc travel ad hotel template flyer din rooms special ad hotel traveller special early bird discount room hotel holiday promotion advertisement ad flyer din room services advert flyer template holiday offers
                    </div>
                    <div className="room-right-content">
                    <div class="right-content">
                        <div class="content-info">
                            <h3>$180 (gia tien tong tu ngay do sang ngay do)</h3>
                            <h5>GRAND LUXURY</h5>
                            <p>08 Ha Van Tinh - Hoa Khanh Nam - Lien Chieu - Da Nang</p>
                            <div class="checkin group">
                            <label for="">Check in </label><span class="sign">:</span
                            ><span class="content-group">21-02-2021</span>
                            </div>
                            <div class="checkout group">
                            <label for="">Check out </label><span class="sign">:</span
                            ><span class="content-group">29-02-2021</span>
                            </div>
                            <div class="capacity group">
                            <label for="">Capacity </label><span class="sign">:</span
                            ><span class="content-group">5 people</span>
                            </div>
                            <Button className="selectBtn"  style={{ width: '40%', backgroundColor: 'rgb(5, 24, 43)', textTransform: 'uppercase' }} onClick={toggleAccept} >
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
