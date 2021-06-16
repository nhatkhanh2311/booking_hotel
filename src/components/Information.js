import React, {useEffect, useState} from 'react';
import {axios} from "../axios";
// import "./css/List.css"
import {Button, Col, Collapse, Form, FormGroup, Input, Label, Table} from "reactstrap";
import {useStyles} from "./Table";
import "./css/Account.css"

export default function Information() {
    const classes = useStyles();
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
    const [open, setOpen] = useState(false);
    const toggleOpen = () => setOpen(!open);

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
                    toggleOpen();
                })
                .catch(function (err) {
                    console.log(err);
                })
        }
        fetchData();
    }

    const getData = () => {
        const fetchData = async () => {
            await axios
                .get('/update-information')
                .then(function (res) {
                    console.log(res.data);
                    setData(res.data);
                    setName(data.userDetail.nameUserDetail);
                    setPhone(data.userDetail.phoneNumber);
                    setBirth(data.userDetail.birth);
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
        <div class="account">
            <div style={{padding: '2vh 1vw'}}>
                <h2>Thông tin cá nhân</h2>

                <div class="avt">
                    <ul>
                        <li>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Kaito_Kid_signature.svg/506px-Kaito_Kid_signature.svg.png"></img>
                        </li>
                        <li>
                            <input type="file"/>
                        </li>
                    </ul>
                </div>
                <hr/>
                <div class="infor">
                    <h4>ACCOUNT INFORMATION</h4>
                    <div class="acc">
                        <Form className="formAccount" onSubmit={onSubmit}>
                            <FormGroup row>
                                <Label for="nameInput" sm={3}>Full Name</Label>
                                <Col sm={9}>
                                    <Input type="text" id="nameInput" defaultValue={data.userDetail.nameUserDetail} required
                                        onChange={(e) => setName(e.target.value)}/>
                                </Col>
                            </FormGroup>

                            <FormGroup row>
                                <Label for="teleInput" sm={3}>Phone Number</Label>
                                <Col sm={9}>
                                    <Input type="tel" pattern="[0]{1}[0-9]{9}" id="teleInput" defaultValue={data.userDetail.phoneNumber} required
                                        onChange={(e) => setPhone(e.target.value)}/>
                                </Col>
                            </FormGroup>

                            <FormGroup row>
                                <Label for="birthInput" sm={3}>Birthday</Label>
                                <Col sm={9}>
                                    <Input type="date" id="birthInput" defaultValue={data.userDetail.birth} required
                                        onChange={(e) => setBirth(e.target.value)}/>
                                </Col>
                            </FormGroup>

                            <Button color="primary">
                                SAVE CHANGES
                            </Button>
                        </Form>
                    </div>
                </div>
                <hr></hr>
                
                <div class="password">
                    <h4>CHANGE PASSWORD</h4>
                    <div class="pw">
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
