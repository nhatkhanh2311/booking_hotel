import { Button, Col, Collapse, Form, FormGroup, Input, Label, Table, UncontrolledCarousel } from "reactstrap";

import "./css/HotelDetailToBook.css";
import * as IoIcons from 'react-icons/ai';




export default function HotelDetailToBook() {
    const data = [
        {
            img:[
                {
                    src:"https://media-cdn.tripadvisor.com/media/photo-s/12/47/3e/c6/silverland-yen-hotel.jpg",
                    key:"1"
                },
                {
                    src:"https://www.hoteljob.vn/files/Anh-HTJ-Hong/mau-tam-trang%20tri-giuong-khach-san-dep-nhat-19.jpg",
                    key:"2"
                },
                {
                    src:"https://www.hoteljob.vn/files/Anh-Hoteljob-Ni/Nam-2019/Thang-6/Bo-sung-2/tim-hieu-dien-tich-phong-tieu-chuan-cac-hang-sao-khach-san-02.jpg",
                    key:"3"
                },
            ],
            ID: "102",
            area: "40m2",
            bed: "2",
            describe: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        }
        , {
            img:[
                {
                    src:"https://media-cdn.tripadvisor.com/media/photo-s/12/47/3e/c6/silverland-yen-hotel.jpg",
                    key:"1"
                },
                {
                    src:"https://www.hoteljob.vn/files/Anh-HTJ-Hong/mau-tam-trang%20tri-giuong-khach-san-dep-nhat-19.jpg",
                    key:"2"
                },
                {
                    src:"https://www.hoteljob.vn/files/Anh-Hoteljob-Ni/Nam-2019/Thang-6/Bo-sung-2/tim-hieu-dien-tich-phong-tieu-chuan-cac-hang-sao-khach-san-02.jpg",
                    key:"3"
                },
            ],
            ID: "305",
            area: "35m2",
            bed: "1",

            describe: "This is a widernatural lead-in tonatural lead-in to card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        },
        {
            img:[
                {
                    src:"https://media-cdn.tripadvisor.com/media/photo-s/12/47/3e/c6/silverland-yen-hotel.jpg",
                    key:"1"
                },
                {
                    src:"https://www.hoteljob.vn/files/Anh-HTJ-Hong/mau-tam-trang%20tri-giuong-khach-san-dep-nhat-19.jpg",
                    key:"2"
                },
                {
                    src:"https://www.hoteljob.vn/files/Anh-Hoteljob-Ni/Nam-2019/Thang-6/Bo-sung-2/tim-hieu-dien-tich-phong-tieu-chuan-cac-hang-sao-khach-san-02.jpg",
                    key:"3"
                },
            ],
            ID: "408",
            area: "30m2",
            bed: "2",

            describe: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        },
        {
            img:[
                {
                    src:"https://media-cdn.tripadvisor.com/media/photo-s/12/47/3e/c6/silverland-yen-hotel.jpg",
                    key:"1"
                },
                {
                    src:"https://www.hoteljob.vn/files/Anh-HTJ-Hong/mau-tam-trang%20tri-giuong-khach-san-dep-nhat-19.jpg",
                    key:"2"
                },
                {
                    src:"https://www.hoteljob.vn/files/Anh-Hoteljob-Ni/Nam-2019/Thang-6/Bo-sung-2/tim-hieu-dien-tich-phong-tieu-chuan-cac-hang-sao-khach-san-02.jpg",
                    key:"3"
                },
            ],
            ID: "003",
            area: "28m2",
            bed: "1",

            describe: "This is a wider card with supporting text below as a natural lead-in tonatural lead-in tonatural lead-in to additional content. This content is a little bit longer.",
        },

    ]




    const items = [
        {
            src: 'https://scontent-hkt1-2.xx.fbcdn.net/v/t1.6435-9/191690243_3749647558592972_8520217478779143203_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=dbeb18&_nc_ohc=sbA5TA96EScAX89A1bx&_nc_ht=scontent-hkt1-2.xx&oh=dd69e2767641888c885c7d66411c4a34&oe=60DAE4DB',

            key: '1'
        },
        {
            src: 'https://scontent-hkt1-2.xx.fbcdn.net/v/t1.6435-9/193188366_3749649658592762_4432743952637591946_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=dbeb18&_nc_ohc=KGonVKTy0IcAX9WMg6V&_nc_ht=scontent-hkt1-2.xx&oh=9d7545b409dd744e207373b094932bef&oe=60DB3A59',

            key: '2'
        },
        {
            src: 'https://scontent-hkt1-2.xx.fbcdn.net/v/t1.6435-9/194311594_3749650168592711_4792599046512115260_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=dbeb18&_nc_ohc=4tIpICuna54AX9oqyBn&tn=wrgkc2jAu5BN-k48&_nc_ht=scontent-hkt1-2.xx&oh=309976943e3bb96936ce4802d1cf16bc&oe=60DD5255',

            key: '3'
        },
        {
            src: 'https://scontent-hkt1-2.xx.fbcdn.net/v/t1.6435-9/193737741_3749650768592651_1305082715811875580_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=dbeb18&_nc_ohc=_L8dSRKm6BYAX_BK0j7&_nc_ht=scontent-hkt1-2.xx&oh=1270038e92681be1a960a1000b3e2afe&oe=60DB3879',

            key: '4'
        },



    ];
    return (
        <div>
            <h2>Thông tin khách sạn</h2>
            <div className="container">
                <div className="cou" >
                    <UncontrolledCarousel items={items} />
                </div>
                <div className="table">
                    <Table>
                        <tr>
                            <th>Tên khách sạn: </th>
                            <td>Hotel Hòa An 1</td>
                        </tr>

                        <tr>
                            <th>Địa chỉ</th>
                            <td>số 54, Nguyễn Lương Bằng, Liên Chiểu, Đà Nẵng</td>
                        </tr>

                        <tr>
                            <th>Số điện thoại:</th>
                            <td>0914 156 990</td>
                        </tr>

                        <tr>
                            <th>Email</th>
                            <td>HoaAnHotel@gmail.com</td>
                        </tr>

                        <tr>
                            <th>Mô tả:</th>
                            <td>Khách sạn hướng ra biển, view đẹp</td>
                        </tr>

                        <tr>
                            <th>Chất lượng </th>
                            <td style={{ color: "#FFBF00" }}>
                                <IoIcons.AiFillStar />
                                <IoIcons.AiFillStar />
                                <IoIcons.AiFillStar />
                                <IoIcons.AiFillStar />
                            </td>
                        </tr>
                    </Table>
                </div>
            </div>
            <h2>Phòng thuộc khách sạn</h2>

            {data.map(d => {
                return (
                    <div className="dt">
                        <div className="img" >
                            <UncontrolledCarousel items={d.img} />
                        </div>
                        <div className="table">
                            <Table borderless className="table">
                                <tr>
                                    <th>Mã phòng: </th>
                                    <td>{d.ID}</td>
                                </tr>

                                <tr>
                                    <th>Diện tích</th>
                                    <td>{d.area}</td>
                                </tr>

                                <tr>
                                    <th>Số giường:</th>
                                    <td>{d.bed}</td>
                                </tr>

                                <tr>
                                    <th>Mô tả:</th>
                                    <td ><textarea rows="4" cols="50" style={{ border: "none" }} readOnly>{d.describe}</textarea></td>
                                </tr>
                                <tr>
                                    <th></th>
                                    <td><Button color="info" >Đặt phòng</Button></td>
                                </tr>
                            </Table>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}