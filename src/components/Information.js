import React, {useEffect, useState} from 'react';
import {axios} from "../axios";
import "./css/List.css"
import {Button, Col, Collapse, Form, FormGroup, Input, Label, Table} from "reactstrap";
import {useStyles} from "./Table";

export default function Information() {
    const classes = useStyles();
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
        <div>
            <div style={{padding: '30px'}}>
                <h2>Thông tin cá nhân</h2>

                <Table borderless className={classes.table}>
                    <tr>
                        <th>Tên</th>
                        <td>{data.userDetail.nameUserDetail}</td>
                    </tr>

                    <tr>
                        <th>Ngày sinh</th>
                        <td>{data.userDetail.birth}</td>
                    </tr>

                    <tr>
                        <th>Số điện thoại</th>
                        <td>{data.userDetail.phoneNumber}</td>
                    </tr>

                    <tr>
                        <th>Email</th>
                        <td>{data.email}</td>
                    </tr>

                    <tr>
                        <th>Tên đăng nhập</th>
                        <td>{data.username}</td>
                    </tr>

                    <tr>
                        <th>Mật khẩu</th>
                        <td>********</td>
                    </tr>

                    <tr>
                        <th>Chức năng tài khoản</th>
                        <td>
                            {data.roles[0].name === 'ROLE_USER' && 'User'}
                            {data.roles[0].name === 'ROLE_DIRECTOR' && 'Director'}
                            {data.roles[0].name === 'ROLE_ADMIN' && 'Admin'}
                        </td>
                    </tr>

                    {localStorage.getItem('roles') === 'ROLE_DIRECTOR' && (
                        <tr>
                            <th>Trạng thái tài khoản</th>
                            {data.locked && <td style={{color: 'green'}}>Đã duyệt</td>}
                            {!data.locked && <td style={{color: 'red'}}>Chưa duyệt</td>}
                        </tr>
                    )}
                </Table>

                <Button color="success" onClick={toggleOpen}>
                    {!open && 'CHỈNH SỬA'}
                    {open && 'HỦY'}
                </Button>

                <Collapse isOpen={open}>
                    <Form onSubmit={onSubmit}>
                        <FormGroup row>
                            <Label for="nameInput" sm={3}>Tên mới</Label>
                            <Col sm={9}>
                                <Input type="text" id="nameInput" defaultValue={data.userDetail.nameUserDetail} required
                                       onChange={(e) => setName(e.target.value)}/>
                            </Col>
                        </FormGroup>

                        <FormGroup row>
                            <Label for="teleInput" sm={3}>Số điện thoại mới</Label>
                            <Col sm={9}>
                                <Input type="tel" pattern="[0]{1}[0-9]{9}" id="teleInput" defaultValue={data.userDetail.phoneNumber} required
                                       onChange={(e) => setPhone(e.target.value)}/>
                            </Col>
                        </FormGroup>

                        <FormGroup row>
                            <Label for="birthInput" sm={3}>Ngày sinh mới</Label>
                            <Col sm={9}>
                                <Input type="date" id="birthInput" defaultValue={data.userDetail.birth} required
                                       onChange={(e) => setBirth(e.target.value)}/>
                            </Col>
                        </FormGroup>

                        <Button color="primary">
                            XÁC NHẬN
                        </Button>
                    </Form>
                </Collapse>
            </div>
        </div>
    );
}
