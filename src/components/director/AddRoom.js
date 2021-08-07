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
                <Label for="nameInput">Tên phòng</Label>
                <Input style={{ margin: '10px 0' }} type="text" id="nameInput" placeholder="Nhập tên phòng" required
                       onChange={(e) => setName(e.target.value)}/>
            </FormGroup>

            <FormGroup>
                <Label for="typeInput">Loại phòng</Label>
                <Input style={{ margin: '10px 0' }} type="select" id="typeInput" required
                       onChange={(e) => setType(e.target.value)}>
                    <option value='basic'>Tiêu chuẩn</option>
                    <option value='advance'>Cao cấp</option>
                </Input>
            </FormGroup>

            <FormGroup>
                <Label for="areaInput">Diện tích phòng (m²)</Label>
                <Input style={{ margin: '10px 0' }} type="number" id="areaInput" min="0" placeholder="0" required
                       onChange={(e) => setArea(parseInt(e.target.value))}/>
            </FormGroup>

            <FormGroup>
                <Label for="priceInput">Giá phòng/ngày (VND)</Label>
                <Input style={{ margin: '10px 0' }} type="number" step="10000" min="0" id="priceInput" placeholder="0" required
                       onChange={(e) => setPrice(parseInt(e.target.value))}/>
            </FormGroup>

            <FormGroup>
                <Label for="capaInput">Số người</Label>
                <Input style={{ margin: '10px 0' }} type="number" id="capaInput" min="0" placeholder="0" required
                       onChange={(e) => setCapa(parseInt(e.target.value))}/>
            </FormGroup>

            <FormGroup>
                <Label for="descInput">Mô tả</Label>
                <Input style={{ margin: '10px 0' }} type="textarea" id="descInput" placeholder="Nhập mô tả" required
                       onChange={(e) => setDesc(e.target.value)}/>
            </FormGroup>

            <FormGroup>
                <Label>Hình ảnh phòng</Label>
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
                Thêm phòng
            </Button>
        </Form>
    );
}
