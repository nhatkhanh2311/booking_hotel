import React, {useState} from "react";
import {axios} from "../../axios";
import {Label, Input, FormGroup, Form, Button} from "reactstrap";

export default function AddHotel() {
    const [name, setName] = useState("");
    const [city, setCity] = useState("");
    const [address, setAddress] = useState("");
    const [images, setImages] = useState({});

    const onSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        Object.keys(images).map((index) => formData.append('images', images[index]));
        // formData.append('images', images[0]);
        formData.append('hotelRequest', JSON.stringify({
            name: name,
            standar: 3,
            localization: {
                city: city,
                country: 'Viet Nam',
                street: address
            }
        }));
        const fetchData = async () => {
            await axios
                .post('/director/hotel/new-hotel', formData)
                .then(function (res) {
                    switch (res.data['message']) {
                        case 'image is empty':
                            window.alert('Vui lòng thêm ảnh!');
                            break;
                        case 'add hotel successfully':
                            // window.location.reload();
                            window.alert('Thêm khách sạn thành công!');
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

const cities = ['An Giang', 'Bà Rịa – Vũng Tàu', 'Bạc Liêu', 'Bắc Giang', 'Bắc Kạn', 'Bắc Ninh', 'Bến Tre', 'Bình Dương',
    'Bình Định', 'Bình Phước', 'Bình Thuận', 'Cà Mau', 'Cao Bằng', 'Cần Thơ', 'Đà Nẵng', 'Đắk Lắk', 'Đắk Nông',
    'Điện Biên', 'Đồng Nai', 'Đồng Tháp', 'Gia Lai', 'Hà Giang', 'Hà Nam', 'Hà Nội', 'Hà Tĩnh', 'Hải Dương', 'Hải Phòng',
    'Hậu Giang', 'Hòa Bình', 'Hồ Chí Minh', 'Hưng Yên', 'Khánh Hòa', 'Kiên Giang', 'Kon Tum', 'Lai Châu', 'Lạng Sơn',
    'Lào Cai', 'Lâm Đồng', 'Long An', 'Nam Định', 'Nghệ An', 'Ninh Bình', 'Ninh Thuận', 'Phú Thọ', 'Phú Yên',
    'Quảng Bình', 'Quảng Nam', 'Quảng Ngãi', 'Quảng Ninh', 'Quảng Trị', 'Sóc Trăng', 'Sơn La', 'Tây Ninh', 'Thái Bình',
    'Thái Nguyên', 'Thanh Hóa', 'Thừa Thiên Huế', 'Tiền Giang', 'Trà Vinh', 'Tuyên Quang', 'Vĩnh Long', 'Vĩnh Phúc',
    'Yên Bái'];
