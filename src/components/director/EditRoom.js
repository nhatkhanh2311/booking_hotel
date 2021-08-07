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
                        window.alert(`Cập nhật phòng ${name} thành công!`);
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
<<<<<<< HEAD
                <Label for="nameInput">Room name</Label>
                <Input type="text" id="nameInput" placeholder="Enter room name..." required
=======
                <Label for="nameInput">Tên phòng</Label>
                <Input style={{ margin: '10px 0' }} type="text" id="nameInput" placeholder="Nhập tên phòng" required
>>>>>>> master
                       defaultValue={name}
                       onChange={(e) => setName(e.target.value)}/>
            </FormGroup>

            <FormGroup>
<<<<<<< HEAD
                <Label for="typeInput">Room type</Label>
                <Input type="select" id="typeInput" required
=======
                <Label for="typeInput">Loại phòng</Label>
                <Input style={{ margin: '10px 0' }} type="select" id="typeInput" required
>>>>>>> master
                       defaultValue={type}
                       onChange={(e) => setType(e.target.value)}>
                    <option value='basic'>Basic</option>
                    <option value='advance'>Advance</option>
                </Input>
            </FormGroup>

            <FormGroup>
<<<<<<< HEAD
                <Label for="areaInput">Area (m²)</Label>
                <Input type="number" id="areaInput" placeholder="0" required
=======
                <Label for="areaInput">Diện tích phòng (m²)</Label>
                <Input style={{ margin: '10px 0' }} type="number" id="areaInput" min="0" placeholder="0" required
>>>>>>> master
                       defaultValue={area}
                       onChange={(e) => setArea(parseInt(e.target.value))}/>
            </FormGroup>

            <FormGroup>
<<<<<<< HEAD
                <Label for="priceInput">Cost/day (VND)</Label>
                <Input type="number" step="50000" id="priceInput" placeholder="0" required
=======
                <Label for="priceInput">Giá phòng/ngày (VND)</Label>
                <Input style={{ margin: '10px 0' }} type="number" step="10000" min="0" id="priceInput" placeholder="0" required
>>>>>>> master
                       defaultValue={price}
                       onChange={(e) => setPrice(parseInt(e.target.value))}/>
            </FormGroup>

            <FormGroup>
<<<<<<< HEAD
                <Label for="capaInput">Capacity</Label>
                <Input type="number" id="capaInput" placeholder="0" required
=======
                <Label for="capaInput">Số người</Label>
                <Input style={{ margin: '10px 0' }} type="number" id="capaInput" min="0" placeholder="0" required
>>>>>>> master
                       defaultValue={capa}
                       onChange={(e) => setCapa(parseInt(e.target.value))}/>
            </FormGroup>

            <FormGroup>
<<<<<<< HEAD
                <Label for="descInput">Description</Label>
                <Input type="textarea" id="descInput" placeholder="Nhập mô tả" required
=======
                <Label for="descInput">Mô tả</Label>
                <Input style={{ margin: '10px 0' }} type="textarea" id="descInput" placeholder="Nhập mô tả" required
>>>>>>> master
                       defaultValue={desc}
                       onChange={(e) => setDesc(e.target.value)}/>
            </FormGroup>

            <FormGroup>
<<<<<<< HEAD
                <Label>Room picture</Label>
=======
                <Label>Hình ảnh phòng</Label>
                <br/>
>>>>>>> master
                <Input type="file" multiple required
                       onChange={(e) => setImages(e.target.files)}/>
            </FormGroup>

            <div>
                {Object.keys(images).map((index) => (
                    <img src={URL.createObjectURL(images[index])} style={{height:"100px"}}/>
                ))}
            </div>

            <br/>
<<<<<<< HEAD
            <Button color="primary" block>
                Update room
=======
            <Button style={{width: '200px', backgroundColor: "#092A4A", margin:"auto" }} block>
                Cập nhật phòng
>>>>>>> master
            </Button>
        </Form>
    );
}
