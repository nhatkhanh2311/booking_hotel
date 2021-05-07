
import React, { useState } from "react";
import { Button, Label, Input, FormGroup, Col, Row, Form, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";
import './css/UpHotel.css'
export default function HotelDetailToFix() {
    const [dropdownOpen, setDropdownOpen] = useState(true);

    const toggle = () => setDropdownOpen(prevState => !prevState);
    

    return (
        <div className="Hotel">
            <Form>
                <Row form>
                    <Col md={6}>
                        <FormGroup>
                            <Label for="exampleEmail">Tên khách sạn</Label>
                            <Input type="text" name="name" placeholder="Nhập tên khách sạn" required  />
                        </FormGroup>
                    </Col>
                    <Col md={6}>
                        <FormGroup>
                            <Label for="examplePassword">Loại khách sạn:</Label>
                            <Input type="text" name="type" placeholder="Nhập loại"  required />
                        </FormGroup>
                    </Col>
                </Row>
                <FormGroup>
                    <Label for="exampleAddress">Nhập địa chỉ</Label>
                    <Input type="text" name="address" id="exampleAddress" placeholder="Nhập địa chỉ" required />
                </FormGroup>

                <FormGroup>
                    <Label>Tải hình ảnh khách sạn:</Label>
                    <Input type="file" name="image" />
                    <br></br>

                </FormGroup>

                <FormGroup>
                    <select className="select-css">
                        <option >Huế</option>
                        <option>Đà Nẵng</option>
                        <option>Quảng Nam</option>
                    </select>
                    
                </FormGroup>

                <button type="submit" className="btn btn-primary btn-block">Sửa</button>
            </Form>
        </div>
    );
}