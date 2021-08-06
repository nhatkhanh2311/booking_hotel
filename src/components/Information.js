import React, {useEffect, useState} from 'react';
import {axios} from "../axios";
import "./css/Account.css";
import {Button, Col, Collapse, Form, FormGroup, Input, Label} from "reactstrap";

export default function Information() {
    const [data, setData] = useState({
        userDetail: {
            nameUserDetail: '',
            birth: '',
            phoneNumber: ''
        },
        roles: [{
            name: ''
        }]
    });
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [birth, setBirth] = useState('');
    const [pass, setPass] = useState('');
    const [newPass, setNewPass] = useState('');
    const [rePass, setRePass] = useState('');
    const [err, setErr] = useState('');
    const [edit, setEdit] = useState(false);
    const [change, setChange] = useState(false);
    const toggleEdit = () => setEdit(!edit);
    const toggleChange = () => setChange(!change);

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
                });
        }
        fetchData();
    }

    const changePassword = (e) => {
        e.preventDefault();
        if (newPass === rePass) {
            setErr('');
            const fetchData = () => {
                axios
                    .post('update-information/save-password', {
                        oldPassword: pass,
                        newPassword: newPass
                    })
                    .then(function (res) {
                        console.log(res.data);
                        if (res.data['message'] === 'current password incorrect') {
                            setErr('Mật khẩu hiện tại chưa đúng!');
                        }
                        else {
                            window.alert('Đổi mật khẩu thành công!');
                            setPass('');
                            setRePass('');
                            setNewPass('');
                            toggleChange();
                        }
                    })
                    .catch(function (err) {
                        console.log(err);
                    });
            }
            fetchData();
        }
        else {
            setErr('Mật khẩu nhập lại chưa đúng!');
        }
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
                                <Label sm={3} style={{fontWeight: '600'}}>Tên</Label>
                                <Label sm={9}>{data.userDetail.nameUserDetail}</Label>
                            </FormGroup>

                            <FormGroup row>
                                <Label sm={3} style={{fontWeight: '600'}}>Số điện thoại</Label>
                                <Label sm={9}>{data.userDetail.phoneNumber}</Label>
                            </FormGroup>

                            <FormGroup row>
                                <Label sm={3} style={{fontWeight: '600'}}>Ngày sinh</Label>
                                <Label sm={9}>{data.userDetail.birth}</Label>
                            </FormGroup>

                            <FormGroup row>
                                <Label sm={3} style={{fontWeight: '600'}}>Email</Label>
                                <Label sm={9}>{data.email}</Label>
                            </FormGroup>

                            <FormGroup row>
                                <Label sm={3} style={{fontWeight: '600'}}>Tên đăng nhập</Label>
                                <Label sm={9}>{data.username}</Label>
                            </FormGroup>

                            <FormGroup row>
                                <Label sm={3} style={{fontWeight: '600'}}>Mật khẩu</Label>
                                <Label sm={9}>********</Label>
                            </FormGroup>

                            <FormGroup row>
                                <Label sm={3} style={{fontWeight: '600'}}>Chức năng tài khoản</Label>
                                <Label sm={9}>
                                    {data.roles[0].name === 'ROLE_USER' && 'Người dùng'}
                                    {data.roles[0].name === 'ROLE_DIRECTOR' && 'Quản lý khách sạn'}
                                    {data.roles[0].name === 'ROLE_ADMIN' && 'Quản trị viên'}
                                </Label>
                            </FormGroup>

                            {localStorage.getItem('roles') === 'ROLE_DIRECTOR' && (
                                <FormGroup row>
                                    <Label sm={3} style={{fontWeight: '600'}}>Trạng thái tài khoản</Label>
                                    {data.locked && <Label sm={9} style={{color: 'green'}}>Đã duyệt</Label>}
                                    {!data.locked && <Label sm={9} style={{color: 'red'}}>Chưa duyệt</Label>}
                                </FormGroup>
                            )}
                            <br/>
                            <Button  style={{width: '200px', backgroundColor:"#092A4A"}} onClick={toggleEdit}>Chỉnh sửa</Button>
                        </Form>
                    </div>
                )}

                {edit && (
                    <div className="infor">
                        <Form className="formAccount acc" onSubmit={onSubmit}>
                            <FormGroup row>
                                <Label for="nameInput" sm={3} style={{fontWeight: '600'}}>Tên</Label>
                                <Col sm={9}>
                                    <Input type="text" id="nameInput" defaultValue={data.userDetail.nameUserDetail} required
                                           onChange={(e) => setName(e.target.value)}/>
                                </Col>
                            </FormGroup>

                            <FormGroup row>
                                <Label for="teleInput" sm={3} style={{fontWeight: '600'}}>Số điện thoại</Label>
                                <Col sm={9}>
                                    <Input type="tel" pattern="[0]{1}[0-9]{9}" id="teleInput" defaultValue={data.userDetail.phoneNumber} required
                                           onChange={(e) => setPhone(e.target.value)}/>
                                </Col>
                            </FormGroup>

                            <FormGroup row>
                                <Label for="birthInput" sm={3} style={{fontWeight: '600'}}>Ngày sinh</Label>
                                <Col sm={9}>
                                    <Input type="date" id="birthInput" defaultValue={data.userDetail.birth} required
                                           onChange={(e) => setBirth(e.target.value)}/>
                                </Col>
                            </FormGroup>

                            <br/>
                            <Button style={{width: '200px', marginBottom: '10px', backgroundColor: "#092A4A" }}>
                                Lưu thay đổi
                            </Button>
                            <br/>
                            <Button color="secondary" style={{width: '200px'}} onClick={toggleEdit}>Hủy</Button>
                        </Form>
                    </div>
                )}
                <hr/>

                <div className="password pw">
                    <Collapse isOpen={change}>
                        <h4>Đổi mật khẩu</h4>
                        <Form onSubmit={changePassword}>
                            <FormGroup row>
                                <Label for="currentPassword" sm={3} style={{fontWeight: '600'}}>Mật khẩu hiện tại</Label>
                                <Col sm={9}>
                                    <Input type="password" id="currentPassword" required
                                           onChange={(e) => setPass(e.target.value)}/>
                                </Col>
                            </FormGroup>

                            <FormGroup row>
                                <Label for="newPassword" sm={3} style={{fontWeight: '600'}}>Mật khẩu mới</Label>
                                <Col sm={9}>
                                    <Input type="password" id="newPassword" required
                                           onChange={(e) => setNewPass(e.target.value)}/>
                                </Col>
                            </FormGroup>

                            <FormGroup row>
                                <Label for="newPasswordAgain" sm={3} style={{fontWeight: '600'}}>Xác nhận mật khẩu mới</Label>
                                <Col sm={9}>
                                    <Input type="password" id="newPasswordAgain" required
                                           onChange={(e) => setRePass(e.target.value)}/>
                                </Col>
                            </FormGroup>
                            <span style={{color: "red", width: "100%"}}>{err}</span>

                            <Button style={{width: '200px', marginBottom: '10px', backgroundColor: "#092A4A" }}>
                                Lưu thay đổi
                            </Button>
                        </Form>
                    </Collapse>

                    <Button color="secondary" style={{width: '200px'}} onClick={toggleChange}>
                        {change && 'Hủy'}
                        {!change && 'Đổi mật khẩu'}
                    </Button>
                </div>
            </div>
        </div>
    );
}
