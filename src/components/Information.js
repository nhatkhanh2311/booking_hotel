import React, {useEffect, useState} from 'react';
import {axios} from "../axios";
import {Button, Col, Collapse, Form, FormGroup, Input, Label, Table} from "reactstrap";
import "./css/Account.css";

export default function Information() {
    const [data, setData] = useState({
        userDetail: {
            nameUserDetail: '',
            birth: '',
            phoneNumber: ''
        },
        password: {
            currentPassword: null,
            newPassword: null
        },
        roles: [{
            name: ''
        }]
    });
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [birth, setBirth] = useState('');
    const [edit, setEdit] = useState(false);
    const toggleEdit = () => setEdit(!edit);

    const onSubmit = (e) => {
        e.preventDefault();
        const fetchData = () => {
            axios
                .post('/update-information/save', {
                    nameUserDetail: name,
                    phoneNumber: phone,
                    birth: birth
                })
                .then(function (res) {
                    console.log(res.data);
                    getData();
                    toggleEdit();
                })
                .catch(function (err) {
                    console.log(err);
                })
        }
        fetchData();
    }

    const getData = () => {
        const fetchData = () => {
            axios
                .get('/update-information')
                .then(function (res) {
                    console.log(res.data);
                    setData(res.data);
                    setName(res.data.userDetail.nameUserDetail);
                    setPhone(res.data.userDetail.phoneNumber);
                    setBirth(res.data.userDetail.birth);
                })
                .catch(function (err) {
                    console.log(err);
                })
        }
        fetchData();
    }

    useEffect(() => {
        getData();
    }, []);

    return (
        <div className="account">
            <div style={{padding: '2vh 1vw'}}>
                <h2>Thông tin cá nhân</h2>
                {!edit && (
                    <div className="infor">
                        <Form className="formAccount acc">
                            <FormGroup row>
                                <Label sm={3}>Tên</Label>
                                <Label sm={9}>{data.userDetail.nameUserDetail}</Label>
                            </FormGroup>

                            <FormGroup row>
                                <Label sm={3}>Số điện thoại</Label>
                                <Label sm={9}>{data.userDetail.phoneNumber}</Label>
                            </FormGroup>

                            <FormGroup row>
                                <Label sm={3}>Ngày sinh</Label>
                                <Label sm={9}>{data.userDetail.birth}</Label>
                            </FormGroup>

                            <FormGroup row>
                                <Label sm={3}>Email</Label>
                                <Label sm={9}>{data.email}</Label>
                            </FormGroup>

                            <FormGroup row>
                                <Label sm={3}>Tên đăng nhập</Label>
                                <Label sm={9}>{data.username}</Label>
                            </FormGroup>

                            <FormGroup row>
                                <Label sm={3}>Mật khẩu</Label>
                                <Label sm={9}>********</Label>
                            </FormGroup>

                            <FormGroup row>
                                <Label sm={3}>Chức năng tài khoản</Label>
                                <Label sm={9}>
                                    {data.roles[0].name === 'ROLE_USER' && 'Người dùng'}
                                    {data.roles[0].name === 'ROLE_DIRECTOR' && 'Quản lý khách sạn'}
                                    {data.roles[0].name === 'ROLE_ADMIN' && 'Quản trị viên'}
                                </Label>
                            </FormGroup>

                            {localStorage.getItem('roles') === 'ROLE_DIRECTOR' && (
                                <FormGroup row>
                                    <Label sm={3}>Trạng thái tài khoản</Label>
                                    {data.locked && <Label sm={9} style={{color: 'green'}}>Đã duyệt</Label>}
                                    {!data.locked && <Label sm={9} style={{color: 'red'}}>Chưa duyệt</Label>}
                                </FormGroup>
                            )}
                            <br/>
                            <Button color="success" style={{width: '30%'}} onClick={toggleEdit}>Chỉnh sửa</Button>
                        </Form>
                    </div>
                )}
                {edit && (
                    <div className="infor">
                        <Form className="formAccount acc" onSubmit={onSubmit}>
                            <FormGroup row>
                                <Label for="nameInput" sm={3}>Tên</Label>
                                <Col sm={9}>
                                    <Input type="text" id="nameInput" defaultValue={data.userDetail.nameUserDetail} required
                                           onChange={(e) => setName(e.target.value)}/>
                                </Col>
                            </FormGroup>

                            <FormGroup row>
                                <Label for="teleInput" sm={3}>Số điện thoại</Label>
                                <Col sm={9}>
                                    <Input type="tel" pattern="[0]{1}[0-9]{9}" id="teleInput" defaultValue={data.userDetail.phoneNumber} required
                                           onChange={(e) => setPhone(e.target.value)}/>
                                </Col>
                            </FormGroup>

                            <FormGroup row>
                                <Label for="birthInput" sm={3}>Ngày sinh</Label>
                                <Col sm={9}>
                                    <Input type="date" id="birthInput" defaultValue={data.userDetail.birth} required
                                           onChange={(e) => setBirth(e.target.value)}/>
                                </Col>
                            </FormGroup>

                            <br/>
                            <Button color="primary" style={{width: '30%', marginBottom: '10px'}}>Lưu thay đổi</Button>
                            <br/>
                            <Button color="success" style={{width: '30%'}} onClick={toggleEdit}>Hủy</Button>
                        </Form>
                    </div>
                )}
                <hr/>

                <div className="password">
                    <h4>CHANGE PASSWORD</h4>
                    <div className="pw">
                        {/* <Form onSubmit={onSubmitPW}> */}
                        <FormGroup row>
                            <Label for="currentPassword" sm={3}>Current password</Label>
                            <Col sm={9}>
                                <Input type="password" id="currentPassword" defaultValue={data.password.currentPassword} required
                                       onChange={(e) => setName(e.target.value)}/>
                            </Col>
                        </FormGroup>

                        <FormGroup row>
                            <Label for="newPassword" sm={3}>New password</Label>
                            <Col sm={9}>
                                <Input type="password" id="" defaultValue={data.password.newPassword} required
                                       onChange={(e) => setPhone(e.target.value)}/>
                            </Col>
                        </FormGroup>

                        <FormGroup row>
                            <Label for="newPasswordAgain" sm={3}>New password again</Label>
                            <Col sm={9}>
                                <Input type="password" id="passwordAgain" required
                                       onChange={(e) => setBirth(e.target.value)}/>
                            </Col>
                        </FormGroup>

                        <Button color="primary">
                            SAVE CHANGES
                        </Button>
                        {/* </Form> */}
                    </div>
                </div>
            </div>
        </div>
    );
}
