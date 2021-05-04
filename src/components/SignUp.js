import React, { useState } from "react";
import {axios} from '../axios';
import { Container } from "reactstrap";
import './css/SignUp.css';

export default function SignUp() {
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [retypePass, setRetypePass] = useState("");
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [err, setErr] = useState({});

    const onSubmit = (e) => {
        e.preventDefault();

        if (validate()) {
            const fetchData = async () => {
                await axios
                    .post('/signup', {

                    })
            }
        }
    }

    const validate = () => {
        let isValid = true;
        let x = {};
        if (email === "") {

            x.email = "Email không được để trống";

            isValid = false;
        }
        if (pass === "") {

            x.pass = "Mật khẩu không được để trống";

            isValid = false;
        }
        if (name === "") {
            x.name = "Tên đăng nhập không được để trống";
            isValid = false;
        }
        if (phone === "") {
            x.phone = "Số điện thoại không được để trống";
            isValid = false;
        }
        if (pass !== retypePass) {
            x.retypePass = "Nhập lại mật khẩu không chính xác";
            isValid = false;
        }

        setErr(x);
        return isValid;
    }

    return (
        <div className="SignUp">
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label>Tên đăng nhập</label>
                    <input type="text" className="form-control" placeholder="Nhập tên đăng nhập"
                        onBlur={(e) => setName(e.target.value)}
                    />
                    <span style={{ color: "red" }} >{err["name"]}</span>
                </div>

                <div className="form-group">
                    <label>Địa chỉ email</label>
                    <input type="email" className="form-control" placeholder="Nhập email"
                        onBlur={(e) => setEmail(e.target.value)}
                    />
                    <span style={{ color: "red" }} >{err["email"]}</span>
                </div>

                <div className="form-group">
                    <label>Mật khẩu</label>
                    <input type="password" className="form-control" placeholder="Nhập mật khẩu"
                        onBlur={(e) => setPass(e.target.value)}
                    />
                     <span style={{ color: "red" }} >{err["pass"]}</span>
                </div>

                <div className="form-group">
                    <label>Nhập lại mật khẩu</label>
                    <input type="password" className="form-control" placeholder="Xác nhận lại mật khẩu"
                        onBlur={(e) => setRetypePass(e.target.value)}
                    />
                     <span style={{ color: "red" }} >{err["retypePass"]}</span>
                </div>

                <div className="form-group">
                    <label>Số điện thoại</label>
                    <input type="tel" pattern="[0]{1}[0-9]{9}" className="form-control" placeholder="Nhập số điện thoại"
                        onBlur={(e) => setPhone(e.target.value)}
                    />
                     <span style={{ color: "red" }} >{err["phone"]}</span>
                </div>

                <div className="form-group">
                    <label>Mô tả</label>
                    <textarea type="phone" className="form-control" placeholder="Nhập mô tả" />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Tôi là nhân viên khách sạn</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary btn-block">Đăng ký</button>
                <p className="forgot-password text-right" style={{marginTop: '10px'}}>
                    Đã có tài khoản? <a href="#">Đăng nhập</a>
                </p>
            </form>
        </div>
    );
}
