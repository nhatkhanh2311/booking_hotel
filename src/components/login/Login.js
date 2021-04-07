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
           
            x.email = "Email not empty";
           
            isvalid = false;
        }
        if (pass == "") {
            
            x.pass = "Password not empty";
        
            isvalid = false;
        }
        
        setErr(x);
       
        
        
        return isvalid;

    }

    return (
        <div className="Login">
            <form onSubmit={onSubmit} action="/asdasd"  method="get">
                <h2>Sign In</h2>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email"
                        onBlur={(e) => setEmail(e.target.value)}
                        className="form-control" placeholder="Enter email" />
                    <span style={{ color: "red" }} >{err["email"]}</span>
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password"
                        onBlur={(e) => setPass(e.target.value)}
                    />
                    <span style={{ color: "red" }} >{err["pass"]}</span><br></br>
                    
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary btn-block">Submit</button>
                <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p>
            </form>
        </div>
    );
}