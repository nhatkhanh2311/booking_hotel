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
                <Label for="nameInput">Tên phòng</Label>
                <Input type="text" id="nameInput" placeholder="Nhập tên phòng" required
                       defaultValue={name}
                       onChange={(e) => setName(e.target.value)}/>
            </FormGroup>

            <FormGroup>
                <Label for="typeInput">Loại phòng</Label>
                <Input type="select" id="typeInput" required
                       defaultValue={type}
                       onChange={(e) => setType(e.target.value)}>
                    <option value='basic'>Tiêu chuẩn</option>
                    <option value='advance'>Cao cấp</option>
                </Input>
            </FormGroup>

            <FormGroup>
                <Label for="areaInput">Diện tích phòng (m²)</Label>
                <Input type="number" id="areaInput" placeholder="0" required
                       defaultValue={area}
                       onChange={(e) => setArea(parseInt(e.target.value))}/>
            </FormGroup>

            <FormGroup>
                <Label for="priceInput">Giá phòng/ngày (VND)</Label>
                <Input type="number" step="50000" id="priceInput" placeholder="0" required
                       defaultValue={price}
                       onChange={(e) => setPrice(parseInt(e.target.value))}/>
            </FormGroup>

            <FormGroup>
                <Label for="capaInput">Số người</Label>
                <Input type="number" id="capaInput" placeholder="0" required
                       defaultValue={capa}
                       onChange={(e) => setCapa(parseInt(e.target.value))}/>
            </FormGroup>

            <FormGroup>
                <Label for="descInput">Mô tả</Label>
                <Input type="textarea" id="descInput" placeholder="Nhập mô tả" required
                       defaultValue={desc}
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
                Cập nhật phòng
            </Button>
        </Form>
    );
}
