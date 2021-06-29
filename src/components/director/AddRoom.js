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
                <Label for="nameInput">Tên phòng</Label>
                <Input type="text" id="nameInput" placeholder="Nhập tên phòng" required
                       onChange={(e) => setName(e.target.value)}/>
            </FormGroup>

            <FormGroup>
                <Label for="typeInput">Loại phòng</Label>
                <Input type="select" id="typeInput" required
                       onChange={(e) => setType(e.target.value)}>
                    <option value='basic'>Tiêu chuẩn</option>
                    <option value='advance'>Cao cấp</option>
                </Input>
            </FormGroup>

            <FormGroup>
                <Label for="areaInput">Diện tích phòng (m²)</Label>
                <Input type="number" id="areaInput" placeholder="0" required
                       onChange={(e) => setArea(parseInt(e.target.value))}/>
            </FormGroup>

            <FormGroup>
                <Label for="priceInput">Giá phòng/ngày (VND)</Label>
                <Input type="number" step="50000" id="priceInput" placeholder="0" required
                       onChange={(e) => setPrice(parseInt(e.target.value))}/>
            </FormGroup>

            <FormGroup>
                <Label for="capaInput">Số người</Label>
                <Input type="number" id="capaInput" placeholder="0" required
                       onChange={(e) => setCapa(parseInt(e.target.value))}/>
            </FormGroup>

            <FormGroup>
                <Label for="descInput">Mô tả</Label>
                <Input type="textarea" id="descInput" placeholder="Nhập mô tả" required
                       onChange={(e) => setDesc(e.target.value)}/>
            </FormGroup>

            <FormGroup>
                <Label>Hình ảnh phòng</Label>
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
                Thêm phòng
            </Button>
        </Form>
    );
}
