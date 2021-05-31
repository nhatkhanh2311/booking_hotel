import { Button, Col, Collapse, Form, FormGroup, Input, Label, Table } from "reactstrap";

import "./css/HotelDetailToBook.css";
import * as IoIcons from 'react-icons/ai';




export default function HotelDetailToBook() {
    const data = [
        {
            img: "https://media-cdn.tripadvisor.com/media/photo-s/12/47/3e/c6/silverland-yen-hotel.jpg",
            ID: "102",
            area:"40m2",
            bed:"2",
            describe: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        }
        , {
            img: "https://www.hoteljob.vn/files/Anh-HTJ-Hong/mau-tam-trang%20tri-giuong-khach-san-dep-nhat-19.jpg",
            ID: "305",
            area:"35m2",
            bed:"1",

            describe: "This is a widernatural lead-in tonatural lead-in to card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        },
        {
            img: "https://thietkeaz.com/images/thiet-ke-phong-ngu-khach-san-36.jpg",
            ID: "408",
            area:"30m2",
            bed:"2",

            describe: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        },
        {
            img: "https://www.hoteljob.vn/files/Anh-Hoteljob-Ni/Nam-2019/Thang-6/Bo-sung-2/tim-hieu-dien-tich-phong-tieu-chuan-cac-hang-sao-khach-san-02.jpg",
            ID: "003",
            area:"28m2",
            bed:"1",

            describe: "This is a wider card with supporting text below as a natural lead-in tonatural lead-in tonatural lead-in to additional content. This content is a little bit longer.",
        },

    ]

    return (
        <div>
            <h2>Thông tin khách sạn</h2>
            <div className="container">
                <div className="img">
                    <img src="https://cdn.vntrip.vn/cam-nang/wp-content/uploads/2018/03/1-khachsan-hoian-royal-vntrip-e1520503214788.jpg"></img>
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
                        <div className="img">
                            <img src={d.img}></img>
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
                                    <td ><textarea rows="4" cols="50" style={{border:"none"}} readOnly>{d.describe}</textarea></td>
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