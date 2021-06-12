import React, {useState} from "react";
import {axios} from "../axios";
import {cities} from "./Cities";
import "./css/SearchBox.css";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import {Button, Form, Input} from "reactstrap";

export default function SearchBox() {
    const [city, setCity] = useState("");
    const [checkInDate, setCheckInDate] = useState("");
    const [checkOutDate, setCheckOutDate] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();

    }

    const handleCheckInDate = (date) => {
        setCheckInDate(date);
        setCheckOutDate("");
        console.log(checkInDate);
    };

    const handleCheckOutDate = (date) => {
        setCheckOutDate(date);
        console.log(checkOutDate);
    };

    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const onChange = (dates) => {
        const [start, end] = dates;
        setStartDate(start);
        setEndDate(end);
        console.log(startDate, endDate);
    };

    return (
        <div className="cover-img">
            <div className="cover-container">
                <div className="cover">
                    <h1 className="cover-heading">Giải pháp đặt phòng khách sạn sang trọng và hiện đại</h1>
                </div>

                <div id="search-box">
                    <Form onSubmit={onSubmit}>
                        <div className="row mb-1">
                            <div className="col-12 col-md-1 d-none d-md-inline-block"/>

                            <div className="col-12 col-md-4 col-lg-4 pr-0 pl-1">
                                <div className="search-input-container">
                                    <div className="input-label">
                                        điểm đến
                                    </div>

                                    <select id="search-keyword" color="#292e46" required
                                            onChange={(e) => setCity(e.target.value)}>
                                        <option value=''>Bạn dự định đến đâu?</option>
                                        {cities.map((city) => <option value={city}>{city}</option>)}
                                    </select>
                                </div>
                            </div>

                            <div className="col-9 col-md-3 col-lg-3 pr-0 pl-1">
                                <div className="search-input-container">
                                    <div className="input-label">
                                        check-in / check-out
                                    </div>
                                    <DatePicker className="input-date"
                                        onChange={onChange}
                                        startDate={startDate}
                                        endDate={endDate}
                                                minDate={new Date()}
                                        selectsRange
                                    />
                                    {/*<div>*/}
                                    {/*    <div className="input-label">*/}
                                    {/*        check-in*/}
                                    {/*    </div>*/}
                                    {/*    <DatePicker className="input-date" selected={checkInDate} minDate={new Date()}*/}
                                    {/*                onChange={handleCheckInDate} required/>*/}
                                    {/*</div>*/}
                                    {/*<div>*/}
                                    {/*    <div className="input-label">*/}
                                    {/*        check-out*/}
                                    {/*    </div>*/}
                                    {/*    <DatePicker className="input-date" selected={checkOutDate} minDate={checkInDate}*/}
                                    {/*                onChange={handleCheckOutDate} required/>*/}
                                    {/*</div>*/}
                                </div>
                            </div>

                            <div className="col-3 col-md-1 col-lg-1 text-center pr-0 pl-1">
                                <div className="search-input-container">
                                    <div className="input-label">
                                        số người
                                    </div>
                                    <div className="search-input-guests d-inline-block pl-1">
                                        <input className="input-guests d-inline-block" required
                                               maxLength="1" min="1" max="10" type="number" defaultValue="2"/>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12 col-md-2 col-lg-2 pr-0 pl-1">
                                <Button id="button-submit" className="search-input-container search">
                                        Search
                                </Button>
                            </div>

                            <div className="col-12 col-md-1 d-none d-md-inline-block"/>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    );
}
