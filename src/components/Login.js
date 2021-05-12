import React, {useState} from "react";
import {axios} from '../axios';
import {useHistory} from "react-router-dom";

export default function Login() {
    const history = useHistory();
    const [user, setUser] = useState("");
    const [pass, setPass] = useState("");
    const [err, setErr] = useState({});

    const onSubmit = async e => {
        e.preventDefault();
        if (validate()) {
            const fetchData = async () => {
                await axios
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
            };
            fetchData();
        }
    }

    const validate = () => {
        let isValid = true;
        let x = {};
        if (user === "") {
            x.user = "Tên đăng nhập không được để trống!";
            isValid = false;
        }
        if (pass === "") {
            x.pass = "Mật khẩu không được để trống!";
            isValid = false;
        }
        setErr(x);
        return isValid;
    }

    return (
        <div className="Login">
            <form onSubmit={onSubmit} >
                <div className="form-group">
                    <label>Tên đăng nhập</label>
                    <input type="user"
                           onBlur={(e) => setUser(e.target.value)}
                           className="form-control" placeholder="Nhập tên đăng nhập"/>
                    <span style={{ color: "red" }}>{err["user"]}</span>
                </div>

                <div className="form-group">
                    <label>Mật khẩu</label>
                    <input type="password" className="form-control" placeholder="Nhập mật khẩu"
                           onChange={(e) => setPass(e.target.value)}/>
                    <span style={{ color: "red" }}>{err["pass"]}</span><br/>
                </div>

                <button type="submit" className="btn btn-primary btn-block">Đăng nhập</button>

                <p className="forgot-password text-right" style={{ marginTop: '10px' }}>
                    <a href="#">Quên mật khẩu?</a>
                </p>
            </form>
        </div>
    );
}
