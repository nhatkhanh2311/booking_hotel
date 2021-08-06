import React, { useState } from "react";
import { axios } from "../axios";
import { useHistory } from "react-router-dom";
import { cities } from "./Cities";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { Button, Form } from "reactstrap";

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
        <div className="search-left">
            <div className="search-left-container">
                <Form onSubmit={onSubmit}>
                    <div className="search-left-group" style={{ padding: 0 }}>
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

                    <div className="search-left-group" >
                        <div className="search-input-container">
                            <div className="input-label">
                                check-in - check-out
                            </div>
                            <DatePicker style={{ marginLeft: '50px' }} className="input-date" startDate={startDate} endDate={endDate}
                                minDate={new Date()} selectsRange onChange={getDate} required />
                        </div>
                    </div>

                    <div className="search-left-group" >
                        <div className="search-input-container">
                            <div className="input-label">
                                số người
                            </div>
                            <div className="search-input-guests d-inline-block pl-1">
                                <input className="input-guests d-inline-block" required
                                    maxLength="1" min="1" max="10" type="number" style={{ width: '40px', margin: '0 115px'}} defaultValue="2"
                                    onChange={(e) => setCapa(parseInt(e.target.value))} />
                            </div>
                        </div>
                    </div>

                    <div className="search-left-group">
                        <Button id="button-submit" style={{ width: '295px', margin: 'auto' }} className="search-input-container block search">
                            Search
                        </Button>
                    </div>
                </Form>
            </div>
        </div>
    );
}
