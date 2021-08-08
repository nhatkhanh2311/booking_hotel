import React, {useState} from "react";
import {axios} from "../../axios";
import {cities} from "../Cities";
import {Label, Input, FormGroup, Form, Button} from "reactstrap";

export default function AddHotel(props) {
    const [name, setName] = useState("");
    const [city, setCity] = useState("");
    const [address, setAddress] = useState("");
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
                .post('/director/hotel/new-hotel', formData)
                .then(function (res) {
                    if (res.data['message'] === 'add hotel successfully') {
                        window.alert('Add hotel successfully!');
                        props.render('refresh');
                    }
                    else window.alert('Your account have not approved yet!');
                    console.log(res.data);
                })
                .catch(function (err) {
                    window.alert('Something wrong!');
                    console.log(err);
                });
        }
        fetchData();
    }

    return (
        <Form onSubmit={onSubmit}>
            <FormGroup>
                <Label for="nameInput">Hotel name</Label>
                <Input style={{ margin: '10px 0' }} type="text" id="nameInput" placeholder="Enter your hotel name..." required
                       onChange={(e) => setName(e.target.value)}/>
            </FormGroup>

            <FormGroup>
                <Label for="cityInput">Province/city</Label>
                <Input style={{ margin: '10px 0' }} type="select" id="cityInput" required
                       onChange={(e) => setCity(e.target.value)}>
                    <option value=''>--Select province/city--</option>
                    {cities.map((city) => <option value={city}>{city}</option>)}
                </Input>
            </FormGroup>

            <FormGroup>
                <Label for="addressInput">Address</Label>
                <Input style={{ margin: '10px 0' }} type="text" id="addressInput" placeholder="Enter address..." required
                       onChange={(e) => setAddress(e.target.value)}/>
            </FormGroup>

            <FormGroup style={{display: 'flex', flexDirection: 'row', margin: '15px 0'}}>
                <Label>Standard</Label>
                <FormGroup check style={{marginLeft: '40px'}}>
                    <Input type="radio" name="standard" id="1" defaultChecked
                           onClick={() => setStandard(1)}/>
                    <Label check htmlFor="1">1</Label>
                </FormGroup>
                <FormGroup check style={{marginLeft: '40px'}}>
                    <Input  type="radio" name="standard" id="2"
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

            <FormGroup style={{ margin: '10px 0' }}>
                <Label>Hotel's picture</Label>
                <br/>
                <Input style={{ margin: '10px 0' }} type="file" multiple required
                       onChange={(e) => setImages(e.target.files)}/>
            </FormGroup>

            <div>
                {Object.keys(images).map((index) => (
                    <img src={URL.createObjectURL(images[index])} style={{height:"100px"}}/>
                ))}
            </div>

            <br/>
            <Button style={{width: '200px', backgroundColor: "#092A4A", margin:"auto" }} block>
                Add new hotel
            </Button>
        </Form>
    );
}
