import React, { useState } from "react";
import './Login.css';


export default function Login() {
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [err, setErr] = useState({});


    const onSubmit = (e) => {
        e.preventDefault();
        
        if(validate()){
            e.target.submit();
        }

    }

    const validate = () => {
        let isvalid = true;
        let x = {};
        if (email == "") {
           
            x.email = "Email không được để trống";
           
            isvalid = false;
        }
        if (pass == "") {
            
            x.pass = "Mật khẩu không được để trống";
        
            isvalid = false;
        }
        
        setErr(x);
       
        
        
        return isvalid;

    }

    return (
        <div className="Login">
            <form onSubmit={onSubmit} action="/asdasd"  method="get">

                <div className="form-group">
                    <label>Địa chỉ email</label>
                    <input type="email"
                        onBlur={(e) => setEmail(e.target.value)}
                        className="form-control" placeholder="Nhập email" />
                    <span style={{ color: "red" }} >{err["email"]}</span>
                </div>

                <div className="form-group">
                    <label>Mật khẩu</label>
                    <input type="password" className="form-control" placeholder="Nhập mật khẩu"
                        onBlur={(e) => setPass(e.target.value)}
                    />
                    <span style={{ color: "red" }} >{err["pass"]}</span><br></br>
                    
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Ghi nhớ đăng nhập</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary btn-block">Đăng nhập</button>
                <p className="forgot-password text-right">
                    Quên <a href="#">mật khẩu ?</a>
                </p>
            </form>
        </div>
    );
}