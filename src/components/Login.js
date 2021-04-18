import axios from "axios";
import React, { useState } from "react";
import './css/Login.css';



export default function Login() {
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [err, setErr] = useState({});
    const [data, setData] = useState([]);
    const account = {
        tk: email,
        mk: pass
    };
    const temp = {};
    const onSubmit = async e => {
        e.preventDefault();
       
        if (validate()) {   

            const fetchData = async () => {
                const result = await axios.post(
                    // 'https://jsonplaceholder.typicode.com/users',
                    'http://localhost:8080/',{email,pass}
                );
                setData(result.data);
            };
            fetchData();
            
        }


    }
    
    const validate = () => {
        let isValid = true;
        let x = {};
        if (email == "") {

            x.email = "Email không được để trống";

            isValid = false;
        }
        if (pass == "") {

            x.pass = "Mật khẩu không được để trống";

            isValid = false;
        }

        setErr(x);



        return isValid;

    }
   
    let xx;
    if (data) {

        xx = data.map(item => (

        <li key={item.age}>{item.name}</li>
        
        ))
    } else {
        xx = "loading...";
    }
    return (
        <div className="Login">
            <form onSubmit={onSubmit} >

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
                        onChange={(e) => setPass(e.target.value)}
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
                <p className="forgot-password text-right" style={{ marginTop: '10px' }}>
                    <a href="#">Quên mật khẩu?</a>
                </p>
            </form>

            
            <ul>
                {xx}
            </ul>
        </div>
    );
}
