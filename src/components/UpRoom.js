import React, {useState} from "react";
import {axios} from "../axios";
import {Label, Input, Form, FormGroup, Button} from "reactstrap";

export default function UpRoom(props) {
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [area, setArea] = useState(0);
    const [price, setPrice] = useState(0);
    const [capa, setCapa] = useState(0);
    const [desc, setDesc] = useState("");
    const [image, setImage] = useState(null);

    const onSubmit = (e) => {
        e.preventDefault();
        // const images = new FormData();
        // images.append('images', image);
        const roomRequest = new FormData();
        roomRequest.append('roomRequest', {
            area: area,
            price: price,
            type: type,
            name: name,
            description: desc,
            capacity: capa
        });
        const fetchData = async () => {
            await axios
                .post(`/director/hotel/${props.id}/new-room`, {
                    // roomRequest
                    roomRequest: {
                        area: area,
                        price: price,
                        type: type,
                        name: name,
                        description: desc,
                        capacity: capa
                    }
                })
                .then(function (res) {
                    console.log(res.data);
                })
                .catch(function (err) {
                    window.alert('Đã có lỗi xảy ra!');
                    console.log(err);
                });
            console.log(roomRequest);
        }
        fetchData();
    }

    return (
        <Form onSubmit={onSubmit}>
            <FormGroup>
                <Label for="nameInput">Tên phòng</Label>
                <Input type="text" id="nameInput" placeholder="Nhập tên phòng" required
                       onBlur={(e) => setName(e.target.value)}/>
            </FormGroup>

            <FormGroup>
                <Label for="typeInput">Loại phòng</Label>
                <Input type="select" id="typeInput" required
                       onBlur={(e) => setType(e.target.value)}>
                    <option value='basic'>Tiêu chuẩn</option>
                    <option value='advance'>Cao cấp</option>
                </Input>
            </FormGroup>

            <FormGroup>
                <Label for="areaInput">Diện tích phòng (m²)</Label>
                <Input type="number" id="areaInput" placeholder="0" required
                       onBlur={(e) => setArea(parseInt(e.target.value))}/>
            </FormGroup>

            <FormGroup>
                <Label for="priceInput">Giá phòng/ngày (VND)</Label>
                <Input type="number" id="priceInput" placeholder="0" required
                       onBlur={(e) => setPrice(parseInt(e.target.value))}/>
            </FormGroup>

            <FormGroup>
                <Label for="capaInput">Số người</Label>
                <Input type="number" id="capaInput" placeholder="0" required
                       onBlur={(e) => setCapa(parseInt(e.target.value))}/>
            </FormGroup>

            <FormGroup>
                <Label for="descInput">Mô tả</Label>
                <Input type="textarea" id="descInput" placeholder="Nhập mô tả" required
                       onBlur={(e) => setDesc(e.target.value)}/>
            </FormGroup>

            <FormGroup>
                <Label>Hình ảnh phòng</Label>
                <Input type="file" required
                       onChange={(e) => setImage(e.target.files[0])}/>
            </FormGroup>

            <br/>
            <Button color="primary" block>
                Thêm phòng
            </Button>
        </Form>
    );
}
