import React, { useState } from "react";
import { Container } from "reactstrap";
import './SignUp.css';


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
        if (name == "") {
            x.name = "Name not empty";
            isvalid = false;
        }
        if (phone == "") {
            x.phone = "Phone not empty";
            isvalid = false;
        }
        if (pass != retypePass) {
            x.retypePass = "Retype pass is not correct";
            isvalid = false;
        }

        setErr(x);



        return isvalid;

    }

    return (
        <div className="SignUp">
            <form onSubmit={onSubmit}>

                <div className="form-group">
                    <label>Name</label>
                    <input type="text" className="form-control" placeholder="Type your name"
                        onBlur={(e) => setName(e.target.value)}
                    />
                    <span style={{ color: "red" }} >{err["name"]}</span>
                </div>



                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email"
                        onBlur={(e) => setEmail(e.target.value)}
                    />
                    <span style={{ color: "red" }} >{err["email"]}</span>

                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password"
                        onBlur={(e) => setPass(e.target.value)}
                    />
                     <span style={{ color: "red" }} >{err["pass"]}</span>

                </div>
               
                <div className="form-group">
                    <label>Retype Password</label>
                    <input type="password" className="form-control" placeholder="Retype your password"
                        onBlur={(e) => setRetypePass(e.target.value)}
                    />
                     <span style={{ color: "red" }} >{err["retypePass"]}</span>

                </div>
               
                <div className="form-group">
                    <label>Phone</label>
                    <input type="tel" pattern="[0-9]{4}[0-9]{2}[0-9]{4}" className="form-control" placeholder="Enter your phone"
                        onBlur={(e) => setPhone(e.target.value)}
                    />
                     <span style={{ color: "red" }} >{err["phone"]}</span>

                </div>
               
                <div className="form-group">
                    <label>Description</label>
                    <textarea type="phone" className="form-control" placeholder="Enter your information" />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">I'm hotel director</label>
                    </div>
                </div>


                <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                <p className="forgot-password text-right">
                    Already registered <a href="#">sign in?</a>
                </p>
            </form>
        </div>
    );
}