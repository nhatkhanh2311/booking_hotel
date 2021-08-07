import React, {useState} from "react";
import {axios} from "../../axios";
import {cities} from "../Cities";
import {Button, Form, FormGroup, Input, Label} from "reactstrap";

export default function EditHotel(props) {
    const [name, setName] = useState(props.data.name);
    const [city, setCity] = useState(props.data.address.city);
    const [address, setAddress] = useState(props.data.address.street);
    const [standard, setStandard] = useState(1);
    const [images, setImages] = useState({});

    const onSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        Object.keys(images).map((index) => formData.append('images', images[index]));
        formData.append('hotelRequest', JSON.stringify({
            name: name,
            standard: standard,
            localization: {
                city: city,
                country: 'Viet Nam',
                street: address
            }
        }));
        const fetchData = () => {
            axios
                .post(`/director/hotel/${props.data.id}/update/save`, formData)
                .then(function (res) {
                    if (res.data['message'] === 'Save changes') {
                        window.alert(`Cập nhật khách sạn ${name} thành công!`);
                        props.render('refresh');
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
                <Label for="nameInput">Hotel name</Label>
                <Input style={{ margin: '10px 0' }} type="text" id="nameInput" placeholder="Enter hotel name" required
                       defaultValue={name}
                       onChange={(e) => setName(e.target.value)}/>
            </FormGroup>

            <FormGroup>
                <Label for="cityInput">Province/city</Label>
                <Input style={{ margin: '10px 0' }} type="select" id="cityInput" required
                       defaultValue={city}
                       onChange={(e) => setCity(e.target.value)}>
                    <option value=''>--Select province/city--</option>
                    {cities.map((city) => <option value={city}>{city}</option>)}
                </Input>
            </FormGroup>

            <FormGroup>
                <Label for="addressInput">Address</Label>
                <Input style={{ margin: '10px 0' }} type="text" id="addressInput" placeholder="Enter address" required
                       defaultValue={address}
                       onChange={(e) => setAddress(e.target.value)}/>
            </FormGroup>

            <FormGroup style={{ margin: '15px 0' }} style={{display: 'flex', flexDirection: 'row'}}>
                <Label>Standar</Label>
                <FormGroup check style={{marginLeft: '40px'}}>
                    <Input type="radio" name="standard" id="1" defaultChecked
                           onClick={() => setStandard(1)}/>
                    <Label check htmlFor="1">1</Label>
                </FormGroup>
                <FormGroup check style={{marginLeft: '40px'}}>
                    <Input type="radio" name="standard" id="2"
                           onClick={() => setStandard(2)}/>
                    <Label check htmlFor="2">2</Label>
                </FormGroup>
                <FormGroup check style={{marginLeft: '40px'}}>
                    <Input type="radio" name="standard" id="3"
                           onClick={() => setStandard(3)}/>
                    <Label check htmlFor="3">3</Label>
                </FormGroup>
                <FormGroup check style={{marginLeft: '40px'}}>
                    <Input type="radio" name="standard" id="3"
                           onClick={() => setStandard(4)}/>
                    <Label check htmlFor="4">4</Label>
                </FormGroup>
                <FormGroup check style={{marginLeft: '40px'}}>
                    <Input type="radio" name="standard" id="5"
                           onClick={() => setStandard(5)}/>
                    <Label check htmlFor="5">5</Label>
                </FormGroup>
            </FormGroup>

            <FormGroup>
                <Label>Hotel picture</Label>
                <Input style={{ margin: '10px 0' }} type="file" multiple required
                       onChange={(e) => setImages(e.target.files)}/>
            </FormGroup>

            <div>
                {Object.keys(images).map((index) => (
                    <img src={URL.createObjectURL(images[index])} style={{height:"100px"}}/>
                ))}
            </div>

            <br/>
            <Button color="primary" block>
                Update hotel
            </Button>
        </Form>
    );
}
