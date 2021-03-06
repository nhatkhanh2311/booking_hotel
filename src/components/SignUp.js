import React, {useState} from "react";
import {axios} from '../axios';
import {Button, Form, FormGroup, Input, Label} from "reactstrap";

export default function SignUp() {
    const [email, setEmail] = useState("");
    const [user, setUser] = useState("");
    const [pass, setPass] = useState("");
    const [retypePass, setRetypePass] = useState("");
    const [name, setName] = useState("");
    const [date, setDate] = useState("");
    const [phone, setPhone] = useState("");
    const [role, setRole] = useState(true);

    const onSubmit = (e) => {
        e.preventDefault();
        if (pass === retypePass) {
            const fetchData = () => {
                axios
                    .post('/signup', {
                        username: user,
                        password: pass,
                        email: email,
                        role: [role ? "user" : "director"],
                        userDetail: {
                            nameUserDetail: name,
                            birth: date,
                            phoneNumber: phone
                        }
                    })
                    .then(function (res) {
                        switch (res.data['message']) {
                            case 'successfull':
                                window.location.reload();
                                window.alert('Đăng ký tài khoản thành công!');
                                break;
                            case 'email is taken':
                                window.alert('Email đã được sử dụng!');
                                break;
                            case 'username is taken':
                                window.alert('Tên đăng nhập đã được sử dụng!');
                        }
                    })
                    .catch(function (err) {
                        window.alert('Đã có lỗi xảy ra!');
                        console.log(err);
                    });
            }
            fetchData();
        }
    }

    return (
        <Form onSubmit={onSubmit}>
            <FormGroup>
                <Label style={{ marginBottom: '10px' }} for="userInput">Tên đăng nhập</Label>
                <Input style={{ marginBottom: '10px' }} type="text" id="userInput" placeholder="Nhập tên đăng nhập" required
                       onChange={(e) => setUser(e.target.value)}/>
            </FormGroup>

            <FormGroup>
                <Label style={{ marginBottom: '10px' }} for="passInput">Mật khẩu</Label>
                <Input style={{ marginBottom: '10px' }} type="password" id="passInput" placeholder="Nhập mật khẩu" required
                       onChange={(e) => setPass(e.target.value)}/>
            </FormGroup>

            <FormGroup>
                <Label style={{ marginBottom: '10px' }} for="repassInput">Nhập lại mật khẩu</Label>
                <Input style={{ marginBottom: '10px' }} type="password" id="repassInput" placeholder="Xác nhận lại mật khẩu" required
                       onChange={(e) => setRetypePass(e.target.value)}/>
                {retypePass && pass !== retypePass && <span style={{color: "red"}}>Mật khẩu nhập lại chưa đúng!</span>}
            </FormGroup>

            <FormGroup>
                <Label style={{ marginBottom: '10px' }} for="emailInput">Địa chỉ email</Label>
                <Input style={{ marginBottom: '10px' }} type="email" id="emailInput" placeholder="Nhập email" required
                       onChange={(e) => setEmail(e.target.value)}/>
            </FormGroup>

            <FormGroup>
                <Label style={{ marginBottom: '10px' }} for="nameInput">Họ tên</Label>
                <Input style={{ marginBottom: '10px' }} type="text" id="nameInput" placeholder="Nhập họ tên" required
                       onChange={(e) => setName(e.target.value)}/>
            </FormGroup>

            <FormGroup>
                <Label style={{ marginBottom: '10px' }} for="dateInput">Ngày sinh</Label>
                <Input style={{ marginBottom: '10px' }} type="date" id="dateInput" required
                       onChange={(e) => setDate(e.target.value)}/>
            </FormGroup>

            <FormGroup>
                <Label style={{ marginBottom: '10px' }} for="teleInput">Số điện thoại</Label>
                <Input style={{ marginBottom: '10px' }} type="tel" pattern="[0]{1}[0-9]{9}" id="teleInput" placeholder="Nhập số điện thoại" required
                       onChange={(e) => setPhone(e.target.value)}/>
            </FormGroup>

            <FormGroup>
                <FormGroup check>
                    <Input style={{ marginBottom: '10px' }} type="radio" name="role" id="user" defaultChecked
                           onClick={() => setRole(true)}/>
                    <Label style={{ marginBottom: '10px' }} check htmlFor="user">Tôi là khách hàng</Label>
                </FormGroup>
                <FormGroup check>
                    <Input style={{ marginBottom: '10px' }} type="radio" name="role" id="director"
                           onClick={() => setRole(false)}/>
                    <Label style={{ marginBottom: '10px' }} check htmlFor="director">Tôi là nhân viên khách sạn</Label>
                </FormGroup>
            </FormGroup>

            <br/>
            <Button color="primary" block>
                Đăng ký
            </Button>

            
        </Form>
    );
}
