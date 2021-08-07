import React, {useState} from "react";
import {axios} from "../../axios";
import {Label, Input, Form, FormGroup, Button} from "reactstrap";

export default function AddRoom(props) {
    const [name, setName] = useState("");
    const [type, setType] = useState("basic");
    const [area, setArea] = useState(0);
    const [price, setPrice] = useState(0);
    const [capa, setCapa] = useState(0);
    const [desc, setDesc] = useState("");
    const [images, setImages] = useState({});

    const onSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        Object.keys(images).map((index) => formData.append('images', images[index]));
        formData.append('roomRequest', JSON.stringify({
            area: area,
            price: price,
            type: type,
            name: name,
            description: desc,
            capacity: capa
        }));
        const fetchData = () => {
            axios
                .post(`/director/hotel/${props.id}/new-room`, formData)
                .then(function (res) {
                    if (res.data['message'] === 'add room successfully') {
                        window.alert('Thêm phòng thành công!');
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
                <Label for="nameInput">Room name</Label>
                <Input type="text" id="nameInput" placeholder="Enter room name..." required
                       onChange={(e) => setName(e.target.value)}/>
            </FormGroup>

            <FormGroup>
                <Label for="typeInput">Room type</Label>
                <Input type="select" id="typeInput" required
                       onChange={(e) => setType(e.target.value)}>
                    <option value='basic'>Basic</option>
                    <option value='advance'>Advance</option>
                </Input>
            </FormGroup>

            <FormGroup>
                <Label for="areaInput">Area (m²)</Label>
                <Input type="number" id="areaInput" min="0" placeholder="0" required
                       onChange={(e) => setArea(parseInt(e.target.value))}/>
            </FormGroup>

            <FormGroup>
                <Label for="priceInput">Cost/day (VND)</Label>
                <Input type="number" step="10000" min="0" id="priceInput" placeholder="0" required
                       onChange={(e) => setPrice(parseInt(e.target.value))}/>
            </FormGroup>

            <FormGroup>
                <Label for="capaInput">Capacity</Label>
                <Input type="number" id="capaInput" min="0" placeholder="0" required
                       onChange={(e) => setCapa(parseInt(e.target.value))}/>
            </FormGroup>

            <FormGroup>
                <Label for="descInput">Description</Label>
                <Input type="textarea" id="descInput" placeholder="Enter description" required
                       onChange={(e) => setDesc(e.target.value)}/>
            </FormGroup>

            <FormGroup>
                <Label>Room picture</Label>
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
                Add room
            </Button>
        </Form>
    );
}
