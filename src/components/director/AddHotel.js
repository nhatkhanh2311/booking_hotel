import React, {useState} from "react";
import {axios} from "../../axios";
import {cities} from "../Cities";
import {Label, Input, FormGroup, Form, Button} from "reactstrap";

export default function AddHotel(props) {
    const [name, setName] = useState("");
    const [city, setCity] = useState("");
    const [address, setAddress] = useState("");
    const [images, setImages] = useState({});

    const onSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        Object.keys(images).map((index) => formData.append('images', images[index]));
        formData.append('hotelRequest', JSON.stringify({
            name: name,
            standard: 3,
            localization: {
                city: city,
                country: 'Viet Nam',
                street: address
            }
        }));
        const fetchData = () => {
            axios
                .post('/director/hotel/new-hotel', formData)
                .then(function (res) {
                    switch (res.data['message']) {
                        case 'image is empty':
                            window.alert('Vui lòng thêm ảnh!');
                            break;
                        case 'add hotel successfully':
                            window.alert('Thêm khách sạn thành công!');
                            props.render('success');
                    }
                    console.log(res.data);
                })
                .catch(function (err) {
                    window.alert('Đã có lỗi xảy ra!');
                    console.log(err);
                });
        }
        fetchData();
    }

    return (
        <Form onSubmit={onSubmit}>
            <FormGroup>
                <Label for="nameInput">Tên khách sạn</Label>
                <Input type="text" id="nameInput" placeholder="Nhập tên khách sạn" required
                       onChange={(e) => setName(e.target.value)}/>
            </FormGroup>

            <FormGroup>
                <Label for="cityInput">Tỉnh/Thành phố</Label>
                <Input type="select" id="cityInput" required
                       onChange={(e) => setCity(e.target.value)}>
                    <option value=''>--Chọn tỉnh/thành--</option>
                    {cities.map((city) => <option value={city}>{city}</option>)}
                </Input>
            </FormGroup>

            <FormGroup>
                <Label for="addressInput">Số nhà, tên đường</Label>
                <Input type="text" id="addressInput" placeholder="Nhập số nhà, tên đường" required
                       onChange={(e) => setAddress(e.target.value)}/>
            </FormGroup>

            <FormGroup>
                <Label>Hình ảnh khách sạn</Label>
                <Input type="file" multiple required
                       onChange={(e) => setImages(e.target.files)}/>
            </FormGroup>

            <div>
                {Object.keys(images).map((index) => (
                    <img src={URL.createObjectURL(images[index])} style={{height:"100px"}}/>
                ))}
            </div>

            <br/>
            <Button color="primary" block>
                Thêm khách sạn
            </Button>
        </Form>
    );
}
