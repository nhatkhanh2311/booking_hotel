
import React, { useState } from "react";
import { Button, Label, Input, FormGroup, Col, Row, Form, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";
import './css/UpHotel.css'
export default function UpHotel() {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen(prevState => !prevState);
    

    return (
        <div className="Hotel">
            <Form>
                <Row form>
                    <Col md={6}>
                        <FormGroup>
                            <Label for="exampleEmail">Tên khách sạn</Label>
                            <Input type="text" name="name" placeholder="Nhập tên khách sạn" />
                        </FormGroup>
                    </Col>
                    <Col md={6}>
                        <FormGroup>
                            <Label for="examplePassword">Loại khách sạn:</Label>
                            <Input type="text" name="type" placeholder="Nhập loại" />
                        </FormGroup>
                    </Col>
                </Row>
                <FormGroup>
                    <Label for="exampleAddress">Nhập địa chỉ</Label>
                    <Input type="text" name="address" id="exampleAddress" placeholder="Nhập địa chỉ" />
                </FormGroup>

                <FormGroup>
                    <Label>Tải hình ảnh khách sạn:</Label>
                    <Input type="file" name="image" />
                    <br></br>

                </FormGroup>

                <FormGroup>
                    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                        <DropdownToggle caret>
                            Thành phố
            </DropdownToggle>
                        <DropdownMenu>

                            <DropdownItem>Huế</DropdownItem>
                            <DropdownItem>Đà nẵng</DropdownItem>
                            <DropdownItem>Quảng Nam</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </FormGroup>

                <button type="submit" className="btn btn-primary btn-block">Gửi</button>
            </Form>
        </div>
    );
}