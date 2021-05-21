import React, {useState} from "react";
import {axios} from "../../axios";
import {Label, Input, FormGroup, Form, Button} from "reactstrap";

export default function UpHotel() {
    const [name, setName] = useState("");
    const [city, setCity] = useState("");
    const [address, setAddress] = useState("");
    const [image, setImage] = useState(null);

    const onSubmit = (e) => {
        e.preventDefault();
        const images = new FormData();
        images.append('images', image);
        const hotelRequest = new FormData();
        hotelRequest.append('hotelRequest', {
            name: name,
            standar: 3,
            localization: {
                city: city,
                country: 'Viet Nam',
                street: address
            }
        });
        const fetchData = async () => {
            await axios
                .post('/director/hotel/new-hotel', {
                    hotelRequest
                    //     {
                    //     name: name,
                    //     standar: 3,
                    //     localization: {
                    //         city: city,
                    //         country: 'Viet Nam',
                    //         street: address
                    //     }
                    // }
                    // }, {
                    //     headers: {
                    //         Authorization: `${localStorage.getItem('tokenType')} ${localStorage.getItem('accessToken')}`
                    //     }
                })
                .then(function (res) {
                    // switch (res.data['message']) {
                    //     case 'image is empty':
                    //         window.alert('Vui lòng thêm ảnh!');
                    //         break;
                    //     case 'add hotel successfully':
                    //         window.location.reload();
                    //         window.alert('Thêm khách sạn thành công!');
                    // }
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
                <Input type="file" required
                       onChange={(e) => setImage(e.target.files[0])}/>
            </FormGroup>

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
    'Hậu Giang', 'Hòa Bình', 'Hưng Yên', 'Khánh Hòa', 'Kiên Giang', 'Kon Tum', 'Lai Châu', 'Lạng Sơn', 'Lào Cai',
    'Lâm Đồng', 'Long An', 'Nam Định', 'Nghệ An', 'Ninh Bình', 'Ninh Thuận', 'Phú Thọ', 'Phú Yên', 'Quảng Bình',
    'Quảng Nam', 'Quảng Ngãi', 'Quảng Ninh', 'Quảng Trị', 'Sóc Trăng', 'Sơn La', 'Tây Ninh', 'Thái Bình', 'Thái Nguyên',
    'Thanh Hóa', 'Thừa Thiên Huế', 'Tiền Giang', 'Tp. Hồ Chí Minh', 'Trà Vinh', 'Tuyên Quang', 'Vĩnh Long', 'Vĩnh Phúc',
    'Yên Bái'];
