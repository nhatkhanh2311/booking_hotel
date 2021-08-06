import React, { useState } from "react";
import { axios } from '../axios';
import { useHistory } from "react-router-dom";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

export default function Login() {
    const history = useHistory();
    const [user, setUser] = useState("");
    const [pass, setPass] = useState("");
    const [email, setEmail] = useState("");
    const [token, setToken] = useState("");
    const [forgot, setForgot] = useState(false);
    const [send, setSend] = useState(false);
    const toggleForgot = () => setForgot(!forgot);
    const toggleSend = () => setSend(!send);

    const onSubmit = (e) => {
        e.preventDefault();
        const fetchData = () => {
            axios
                .post('/signin', {
                    username: user,
                    password: pass
                })
                .then(function (res) {
                    if (res.data['message'] === 'incorrect')
                        window.alert('Tên tài khoản hoặc mật khẩu không đúng!');
                    else {
                        localStorage.setItem('username', res.data['username']);
                        localStorage.setItem('roles', res.data['roles'][0]);
                        localStorage.setItem('accessToken', res.data['accessToken']);
                        localStorage.setItem('tokenType', res.data['tokenType']);
                        switch (res.data['roles'][0]) {
                            case 'ROLE_USER':
                                window.location.reload();
                                break;
                            case 'ROLE_DIRECTOR':
                                history.push('/director');
                                break;
                            case 'ROLE_ADMIN':
                                history.push('/admin');
                        }
                    }
                })
                .catch(function (err) {
                    window.alert('Đã có lỗi xảy ra!');
                    console.log(err);
                });
        }
        fetchData();
    }

    const submitForgot = (e) => {
        e.preventDefault();
        const fetchData = () => {
            axios
                .post(`/forgot-password/${email}`)
                .then(function (res) {
                    if (res.data['message'] === 'Email does not exist')
                        window.alert('Email không tồn tại!');
                    else {
                        toggleSend();
                    }
                })
                .catch(function (err) {
                    window.alert('Đã có lỗi xảy ra!');
                    console.log(err);
                });
        }
        fetchData();
    }

    return (
            <>
                {!forgot && (
                    <Form onSubmit={onSubmit}>
                        <FormGroup>
                            <Label style={{ marginBottom: '10px' }} for="userInput">Tên đăng nhập</Label>
                            <Input style={{ marginBottom: '10px' }} type="text" id="userInput" placeholder="Nhập tên đăng nhập" required
                                onChange={(e) => setUser(e.target.value)} />
                        </FormGroup>

                        <FormGroup>
                            <Label style={{ marginBottom: '10px' }} for="passInput">Mật khẩu</Label>
                            <Input style={{ marginBottom: '10px' }} type="password" id="passInput" placeholder="Nhập mật khẩu" required
                                onChange={(e) => setPass(e.target.value)} />
                        </FormGroup>

                        <br />
                        <Button color="primary" block>
                            Đăng nhập
                        </Button>

                        <p className="text-right" style={{ marginTop: '10px' }}>
                            <a href="#" onClick={toggleForgot}>Quên mật khẩu?</a>
                        </p>
                    </Form>
                )}
                {forgot && !send && (
                    <Form onSubmit={submitForgot}>
                        <h5 style={{ textAlign: 'center' }}>Quên mật khẩu</h5>
                        <FormGroup>
                            <Label for="emailInput">Nhập email</Label>
                            <Input type="email" id="emailInput" placeholder="Nhập email" required
                                onChange={(e) => setEmail(e.target.value)} />
                        </FormGroup>
                        <Button color="primary" block>
                            Gửi email xác nhận
                        </Button>

                        <p className="text-right" style={{ marginTop: '10px' }}>
                            <a href="#" onClick={toggleForgot}>Nhớ mật khẩu?</a>
                        </p>
                    </Form>
                )}
                {forgot && send && (
                    <Form>
                        <h5 style={{ textAlign: 'center' }}>Quên mật khẩu</h5>
                        <FormGroup>
                            <Label for="tokenInput">Kiểm tra email và nhập token vào đây</Label>
                            <Input type="token" id="tokenInput" placeholder="Nhập token" required
                                onChange={(e) => setToken(e.target.value)} />
                        </FormGroup>
                        <Button color="primary" block>
                            Xác nhận
                        </Button>

                        <p className="text-right" style={{ marginTop: '10px' }}>
                            <a href="#" onClick={toggleForgot}>Nhớ mật khẩu?</a>
                        </p>
                    </Form>
                )}
            </>
            );
}
