import React, {useEffect, useState} from 'react';
import {useLocation} from "react-router-dom";
import {axios} from "../axios";
import "./css/HotelDetail.css";
import {Button, Modal, ModalBody, ModalFooter, Table} from "reactstrap";
import {Zoom} from "react-slideshow-image";
import * as IoIcons from 'react-icons/ai';

export default function HotelDetail() {
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
        for (let i = 0; i < location.state.hotel.standard; i++) stars.push(<IoIcons.AiFillStar/>);
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
            console.log(id);
        }
        else toggleNotUser();
    }

    useEffect(() => {
        console.log(location.state);
    }, []);

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

            <h2 className="h2">Danh sách phòng</h2>
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
                                <td><Button color="info" onClick={() => booking(room.id)}>Đặt phòng</Button></td>
                            </tr>
                        </Table>
                    </div>
                </div>
            ))}

            <Modal className='modal-dialog modal-dialog-centered' isOpen={accept} toggle={toggleAccept}>
                <ModalBody>
                    <h4>Bạn có chắc chắn muốn đặt phòng này trong khoảng từ {location.state.checkIn} đến {location.state.checkOut}?</h4>
                </ModalBody>
                <ModalFooter className="justify-content-center">
                    <Button outline color="success" style={{width: '30%'}}
                            onClick={() => sendData(idBook, location.state.checkIn, location.state.checkOut)}>
                        Xác nhận
                    </Button>
                    <Button outline color="danger" style={{width: '30%'}} onClick={toggleAccept}>
                        Không
                    </Button>
                </ModalFooter>
            </Modal>

            <Modal className='modal-dialog modal-dialog-centered' isOpen={login} toggle={toggleLogin}>
                <ModalBody>
                    <h4>Bạn phải đăng nhập để đặt phòng!</h4>
                </ModalBody>
                <ModalFooter className="justify-content-center">
                    <Button outline color="success" style={{width: '30%'}} onClick={toggleLogin}>
                        OK
                    </Button>
                </ModalFooter>
            </Modal>

            <Modal className='modal-dialog modal-dialog-centered' isOpen={notUser} toggle={toggleNotUser}>
                <ModalBody>
                    <h4>Chức năng đặt phòng chỉ dành cho tài khoản người dùng!</h4>
                </ModalBody>
                <ModalFooter className="justify-content-center">
                    <Button outline color="success" style={{width: '30%'}} onClick={toggleNotUser}>
                        OK
                    </Button>
                </ModalFooter>
            </Modal>

            <Modal className='modal-dialog modal-dialog-centered' isOpen={success}>
                <ModalBody>
                    <h4>Đặt phòng thành công</h4>
                </ModalBody>
                <ModalFooter className="justify-content-center">
                    <Button outline color="success" style={{width: '40%'}}>
                        Đến trang cá nhân
                    </Button>
                    <Button outline color="success" style={{width: '40%'}}>
                        Về trang chủ
                    </Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}
