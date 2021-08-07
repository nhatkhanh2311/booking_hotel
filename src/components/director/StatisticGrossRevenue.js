import { Bar } from "react-chartjs-2";
import React, { useEffect, useState } from 'react';
import { axios } from "../../axios";
import { Button, Input } from "reactstrap";
import { TableContainer } from "@material-ui/core";


export default function Statistic() {
    const [listHotel, setListHotel] = useState([]);
    const [listData, setData] = useState([]);
    const [month, setMonth] = useState('1');

    const getHotel = () => {
        const fetchData = () => {
            axios
                .get('/director/all-hotel')
                .then(function (res) {
                    let listHotels = []
                    for (let i = 0; i < res.data.length; i++) {
                        listHotels.push(res.data[i].name)
                    }
                    console.log('list ten', listHotel);
                    setListHotel(listHotels);
                })
                .catch(function (err) {
                    console.log(err);
                });
        }
        fetchData();
    }

    const getData = () => {
            const fetchData = () => {
                axios
                .get(`/director/thongke/total/allHotel/${month}`)
                    .then(function (res) {
                        console.log('data', res.data);
                        let dulieuchart = []
                        for (let j = 0; j < listHotel.length; j++) {
                            let giatri = 0;
                            for (let i = 0; i < res.data.length; i++) {
                                if (listHotel[j] === res.data[i].hotelName) {
                                    giatri = res.data[i].totalInMonth;
                                    console.log('chang le k vo that', giatri);
                                    break;
                                }
                            }
                            dulieuchart.push(giatri)
                        }
                        setData(dulieuchart);
                        console.log(listData);
                    })
                    .catch(function (err) {
                        console.log(err);
                    });
            }
            fetchData();
    }

    useEffect(() => {
        getHotel();
        getData();
    }, []);

    return (
        <TableContainer>
            <div style={{ padding: '10px' }}>
                <div style={{ display: 'flex' }}>
                    <p style={{ margin: '1%' }}>Select month</p>
                    <Input style={{ flexBasis: '5%', textAlign: 'center', margin: '0 10px' }} type="select" id="month" required
                        onChange={(e) => setMonth(e.target.value)}>
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((month) => <option value={month}>{month}</option>)}
                    </Input>
                    <Button style={{ flexBasis: '15%', backgroundColor: 'rgb(5, 24, 43)' }} onClick={getData}>Get result</Button>
                </div>
                <div style={{ width: '60%', height: '300px', margin: '60px auto' }}>
                    <Bar
                        data={{
                            labels: listHotel,
                            datasets: [
                                {
                                    label: "Total (VND)",
                                    backgroundColor: ["#3e95cd",
                                    "#8e5ea2",
                                    "#3cba9f",
                                    "#e8c3b9",
                                    "#c45850", "#3e95cd",
                                    "#8e5ea2",
                                    "#3cba9f",
                                    "#e8c3b9",
                                    "#c45850"],
                                    data: listData
                                }
                            ]
                        }}
                        options={{
                            legend: { display: false },
                            title: {
                                display: true,
                                text: "Predicted world population (millions) in 2050"
                            }
                        }}
                    />
                </div>
            </div>
        </TableContainer>

    );
}
