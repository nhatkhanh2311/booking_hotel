import React, {useState} from "react";
import {axios} from '../axios';
import {useHistory} from "react-router-dom";
import {Button, Form, FormGroup, Input, Label} from "reactstrap";

export default function Login() {
    const history = useHistory();
    const [user, setUser] = useState("");
    const [pass, setPass] = useState("");

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

    return (
        <Form onSubmit={onSubmit} >
            <FormGroup>
                <Label for="userInput">Tên đăng nhập</Label>
                <Input type="text" id="userInput" placeholder="Nhập tên đăng nhập" required
                       onChange={(e) => setUser(e.target.value)}/>
            </FormGroup>

            <FormGroup>
                <Label for="passInput">Mật khẩu</Label>
                <Input type="password" id="passInput" placeholder="Nhập mật khẩu" required
                       onChange={(e) => setPass(e.target.value)}/>
            </FormGroup>

            <br/>
            <Button color="primary" block>
                Đăng nhập
            </Button>

            <p className="text-right" style={{marginTop: '10px'}}>
                <a href="#">Quên mật khẩu?</a>
            </p>
        </Form>
    );
}
