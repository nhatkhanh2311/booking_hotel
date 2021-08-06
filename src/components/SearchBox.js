import React, {useEffect, useState} from "react";
import {axios} from "../axios";
import {useHistory} from "react-router-dom";
import {cities} from "./Cities";
import "./css/SearchBox.css";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import {Button, Form, Input} from "reactstrap";

export default function SearchBox() {
    const history = useHistory();
    const [city, setCity] = useState("");
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [startString, setStartString] = useState(startDate.getFullYear() + '-' +
        String(startDate.getMonth() + 1).padStart(2, '0') + '-' +
        String(startDate.getDate()).padStart(2, '0'));
    const [endString, setEndString] = useState(endDate.getFullYear() + '-' +
        String(endDate.getMonth() + 1).padStart(2, '0') + '-' +
        String(endDate.getDate()).padStart(2, '0'));
    const [capa, setCapa] = useState(2);

    const onSubmit = (e) => {
        e.preventDefault();
        if (startDate != null && endDate != null) {
            const fetchData = () => {
                axios
                    .post('/search', {
                        cityName: city,
                        start: startString,
                        end: endString,
                        capacity: capa
                    })
                    .then((res) => {
                        history.push('/search', {
                            data: res.data,
                            city: city,
                            checkIn: startString,
                            checkOut: endString,
                            capacity: capa
                        });
                    })
                    .catch((err) => {
                        window.alert('Đã có lỗi xảy ra!');
                        console.log(err);
                    });
            }
            fetchData();
        }
    }

    const getDate = (dates) => {
        const [start, end] = dates;
        setStartDate(start);
        setEndDate(end);
        if (start != null && end != null) {
            setStartString(start.getFullYear() + '-' +
                String(start.getMonth() + 1).padStart(2, '0') + '-' +
                String(start.getDate()).padStart(2, '0'));
            setEndString(end.getFullYear() + '-' +
                String(end.getMonth() + 1).padStart(2, '0') + '-' +
                String(end.getDate()).padStart(2, '0'));
        }
    }

    return (
        <div className="cover-img">
            <div className="cover-container">
                <div className="cover">
                    <h1 className="cover-heading">provides metadata used when your web app is installed on a</h1>
                </div>

                <div id="search-box">
                    <Form onSubmit={onSubmit}>
                        <div className="row mb-1">
                            <div className="col-12 col-md-1 d-none d-md-inline-block"/>

                            <div className="col-12 col-md-4 col-lg-4 pr-0 pl-1" style={{ padding: 0 }}>
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

                            <div className="col-9 col-md-3 col-lg-3 pr-0 pl-1" style={{ padding: '0 5px' }}>
                                <div className="search-input-container">
                                    <div className="input-label">
                                        check-in - check-out
                                    </div>
                                    <DatePicker className="input-date" startDate={startDate} endDate={endDate}
                                                minDate={new Date()} selectsRange onChange={getDate} required/>
                                </div>
                            </div>

                            <div className="search-cpacity col-3 col-md-2 col-lg-2 text-center pr-0 pl-1" style={{ padding: '0' }}>
                                <div className="search-input-container">
                                    <div className="input-label">
                                        số người
                                    </div>
                                    <div className="search-input-guests d-inline-block pl-1">
                                        <input className="input-guests d-inline-block" required
                                               maxLength="1" min="1" max="10" type="number" defaultValue="2"
                                               onChange={(e) => setCapa(parseInt(e.target.value))}/>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12 col-md-2 col-lg-2 pr-0 pl-1" style={{ padding: '0 0' }}>
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
