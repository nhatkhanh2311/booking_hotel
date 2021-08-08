import React, {useState} from "react";
import {axios} from "../../axios";
import {Button, Form, FormGroup, Input, Label} from "reactstrap";

export default function EditRoom(props) {
    const [name, setName] = useState(props.data.name);
    const [type, setType] = useState(props.data.type);
    const [area, setArea] = useState(props.data.area);
    const [price, setPrice] = useState(props.data.price);
    const [capa, setCapa] = useState(props.data.capacity);
    const [desc, setDesc] = useState(props.data.description);
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
                .post(`/director/hotel/${props.id}/${props.data.id}/update/save`, formData)
                .then(function (res) {
                    if (res.data['message'] === 'Save changes') {
                        window.alert(`Update room ${name} successfully!`);
                        props.render('refresh');
                    }
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
                <Label for="nameInput">Room name</Label>
                <Input style={{ margin: '10px 0' }} type="text" id="nameInput" placeholder="Enter room name..." required
                       defaultValue={name}
                       onChange={(e) => setName(e.target.value)}/>
            </FormGroup>

            <FormGroup>
                <Label for="typeInput">Room type</Label>
                <Input style={{ margin: '10px 0' }} type="select" id="typeInput" required
                       defaultValue={type}
                       onChange={(e) => setType(e.target.value)}>
                    <option value='basic'>Basic</option>
                    <option value='advance'>Advance</option>
                </Input>
            </FormGroup>

            <FormGroup>
                <Label for="areaInput">Area (m²)</Label>
                <Input style={{ margin: '10px 0' }} type="number" id="areaInput" placeholder="0" required
                       defaultValue={area}
                       onChange={(e) => setArea(parseInt(e.target.value))}/>
            </FormGroup>

            <FormGroup>
                <Label for="priceInput">Cost/day (VND)</Label>
                <Input style={{ margin: '10px 0' }} type="number" step="50000" id="priceInput" placeholder="0" required
                       defaultValue={price}
                       onChange={(e) => setPrice(parseInt(e.target.value))}/>
            </FormGroup>

            <FormGroup>
                <Label for="capaInput">Capacity</Label>
                <Input style={{ margin: '10px 0' }} type="number" id="capaInput" placeholder="0" required
                       defaultValue={capa}
                       onChange={(e) => setCapa(parseInt(e.target.value))}/>
            </FormGroup>

            <FormGroup>
                <Label for="descInput">Description</Label>
                <Input style={{ margin: '10px 0' }} type="textarea" id="descInput" placeholder="Nhập mô tả" required
                       defaultValue={desc}
                       onChange={(e) => setDesc(e.target.value)}/>
            </FormGroup>

            <FormGroup>
                <Label>Room picture</Label>
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
            <Button color="primary" block>
                Update room
            </Button>
        </Form>
    );
}
