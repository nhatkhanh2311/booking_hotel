import React, {useEffect, useState} from 'react';
import {axios} from "../axios";
import "./css/Account.css";
import {Button, Col, Collapse, Form, FormGroup, Input, Label} from "reactstrap";

export default function Information() {
    const [data, setData] = useState({
        userDetail: {
            nameUserDetail: '',
            birth: '',
            phoneNumber: '',

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
                    .post('/update-information/save-password', {
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
            setErr('Password incorrect!');
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
                <h2>Profile</h2>
                {!edit && (
                    <div className="infor">
                        <Form className="formAccount acc">
                            <FormGroup row>
                                <Label sm={4} style={{fontWeight: '600'}}>Full name</Label>
                                <Label sm={7}>{data.userDetail.nameUserDetail}</Label>
                            </FormGroup>

                            <FormGroup row>
                                <Label sm={4} style={{fontWeight: '600'}}>Phone number</Label>
                                <Label sm={7}>{data.userDetail.phoneNumber}</Label>
                            </FormGroup>

                            <FormGroup row>
                                <Label sm={4} style={{fontWeight: '600'}}>Birthday</Label>
                                <Label sm={7}>{data.userDetail.birth}</Label>
                            </FormGroup>

                            <FormGroup row>
                                <Label sm={4} style={{fontWeight: '600'}}>Email</Label>
                                <Label sm={7}>{data.email}</Label>
                            </FormGroup>

                            <FormGroup row>
                                <Label sm={4} style={{fontWeight: '600'}}>Username</Label>
                                <Label sm={7}>{data.username}</Label>
                            </FormGroup>

                            <FormGroup row>
                                <Label sm={4} style={{fontWeight: '600'}}>Password</Label>
                                <Label sm={7}>********</Label>
                            </FormGroup>

                            <FormGroup row>
                                <Label sm={4} style={{fontWeight: '600'}}>Role</Label>
                                <Label sm={7}>
                                    {data.roles[0].name === 'ROLE_USER' && 'User'}
                                    {data.roles[0].name === 'ROLE_DIRECTOR' && 'Director'}
                                    {data.roles[0].name === 'ROLE_ADMIN' && 'Admin'}
                                </Label>
                            </FormGroup>

                            {localStorage.getItem('roles') === 'ROLE_DIRECTOR' && (
                                <FormGroup row>
                                    <Label sm={4} style={{fontWeight: '600'}}>Status</Label>
                                    {data.locked && <Label sm={7} style={{color: 'green'}}>Approved</Label>}
                                    {!data.locked && <Label sm={7} style={{color: 'red'}}>Not approved</Label>}
                                </FormGroup>
                            )}
                            <br/>
                            <Button  style={{width: '200px', backgroundColor:"#092A4A"}} onClick={toggleEdit}>Edit</Button>
                        </Form>
                    </div>
                )}

                {edit && (
                    <div className="infor">
                        <Form className="formAccount acc" onSubmit={onSubmit}>
                            <FormGroup row style={{ marginTop: '10px' }}>
                                <Label for="nameInput" sm={4} style={{fontWeight: '600'}}>Name</Label>
                                <Col sm={7}>
                                    <Input type="text" id="nameInput" defaultValue={data.userDetail.nameUserDetail} required
                                           onChange={(e) => setName(e.target.value)}/>
                                </Col>
                            </FormGroup>

                            <FormGroup row style={{ marginTop: '10px' }}>
                                <Label for="teleInput" sm={4} style={{fontWeight: '600'}}>Phone number</Label>
                                <Col sm={7}>
                                    <Input type="tel" pattern="[0]{1}[0-9]{9}" id="teleInput" defaultValue={data.userDetail.phoneNumber} required
                                           onChange={(e) => setPhone(e.target.value)}/>
                                </Col>
                            </FormGroup>

                            <FormGroup row style={{ marginTop: '10px' }}>
                                <Label for="birthInput" sm={4} style={{fontWeight: '600'}}>Birth</Label>
                                <Col sm={7}>
                                    <Input type="date" id="birthInput" defaultValue={data.userDetail.birth} required
                                           onChange={(e) => setBirth(e.target.value)}/>
                                </Col>
                            </FormGroup>

                            <br/>
                            <Button style={{width: '200px', marginBottom: '10px', backgroundColor: "#092A4A" }}>
                                Save change
                            </Button>
                            <br/>
                            <Button color="secondary" style={{width: '200px'}} onClick={toggleEdit}>Cancel</Button>
                        </Form>
                    </div>
                )}
                <hr/>

                <div className="password pw">
                    <Collapse isOpen={change}>
                        <h4>Change password</h4>
                        <Form onSubmit={changePassword}>
                            <FormGroup row style={{ marginTop: '10px' }}>
                                <Label for="currentPassword" sm={4} style={{fontWeight: '600'}}>Current password</Label>
                                <Col sm={7}>
                                    <Input type="password" id="currentPassword" required
                                           onChange={(e) => setPass(e.target.value)}/>
                                </Col>
                            </FormGroup>

                            <FormGroup row style={{ marginTop: '10px' }}>
                                <Label for="newPassword" sm={4} style={{fontWeight: '600'}}>New password</Label>
                                <Col sm={7}>
                                    <Input type="password" id="newPassword" required
                                           onChange={(e) => setNewPass(e.target.value)}/>
                                </Col>
                            </FormGroup>

                            <FormGroup row style={{ marginTop: '10px' }}>
                                <Label for="newPasswordAgain" sm={4} style={{fontWeight: '600'}}>Confirm password</Label>
                                <Col sm={7}>
                                    <Input type="password" id="newPasswordAgain" required
                                           onChange={(e) => setRePass(e.target.value)}/>
                                </Col>
                            </FormGroup>
                            <span style={{color: "red", width: "100%"}}>{err}</span>

                            <Button style={{width: '200px', marginBottom: '10px', backgroundColor: "#092A4A" }}>
                                Save changes
                            </Button>
                        </Form>
                    </Collapse>

                    <Button color="secondary" style={{width: '200px'}} onClick={toggleChange}>
                        {change && 'Cancel'}
                        {!change && 'Change password'}
                    </Button>
                </div>
            </div>
        </div>
    );
}
