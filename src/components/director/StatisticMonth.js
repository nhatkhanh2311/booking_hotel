import React, { useEffect, useState } from 'react';
import { axios } from "../../axios";
import TableContainer from "@material-ui/core/TableContainer";
import { Button, Input } from "reactstrap";
import { StyledTableCell, StyledTableRow, useStyles } from "../Table";
import TableHead from "@material-ui/core/TableHead";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import Pagination from "react-js-pagination";

export default function StatisticMonth() {
    const classes = useStyles();
    const [activePage, setActivePage] = useState(1);
    const [data, setData] = useState([]);
    const [stat, setStat] = useState([]);
    const [month, setMonth] = useState('1');
    const [hotel, setHotel] = useState('');

    const getHotel = () => {
        const fetchData = () => {
            axios
                .get('/director/all-hotel')
                .then(function (res) {
                    console.log(res.data);
                    setData(res.data);
                })
                .catch(function (err) {
                    console.log(err);
                });
        }
        fetchData();
    }

    const getData = () => {
        if (hotel === '') {
            const fetchData = () => {
                axios
                    .get(`/director/thongke/${month}`)
                    .then(function (res) {
                        console.log(res.data);
                        setStat(res.data);
                    })
                    .catch(function (err) {
                        console.log(err);
                    });
            }
            fetchData();
        }
        else {
            const fetchData = () => {
                axios
                    .get(`/director/thongke/${month}/${hotel}`)
                    .then(function (res) {
                        console.log(res.data);
                        setStat(res.data);
                    })
                    .catch(function (err) {
                        console.log(err);
                    });
            }
            fetchData();
        }
    }

    useEffect(() => {
        getHotel();
        getData();
    }, []);

    return (
        <TableContainer style={{ padding: '30px' }}>
            <h2>Thống kê </h2>

            <div style={{ display: 'flex', justifyContent: 'row', margin: '20px 0', }}>
                <div style={{ flexBasic: '30%', width: '30%' }}>
                    <p>Chọn tháng</p>
                    <Input type="select" id="month" required
                           onChange={(e) => setMonth(e.target.value)}>
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((month) => <option value={month}>{month}</option>)}
                    </Input>
                </div>

                <div style={{ flexBasic: '30%', width: '30%', marginLeft: '30px' }}>
                    <p>Chọn khách sạn</p>
                    <Input type="select" id="hotel" required
                           onChange={(e) => setHotel(e.target.value)}>
                        <option value="">--Tất cả--</option>
                        {data.map((hotel) => <option value={hotel.id}>{hotel.name}</option>)}
                    </Input>
                </div>

                <div style={{ flexBasic: '30%', width: '15%', marginTop: '40px', marginLeft: '30px' }}>
                    <Button color="primary" onClick={getData}>Get result</Button>
                </div>
            </div>

            <Table className={classes.table}>
                <TableHead>
                    <StyledTableRow>
                        <StyledTableCell align="center">Tên khách sạn</StyledTableCell>
                        <StyledTableCell align="center">Tên phòng</StyledTableCell>
                        <StyledTableCell align="center">Loại phòng</StyledTableCell>
                        <StyledTableCell align="center">Người đặt</StyledTableCell>
                        <StyledTableCell align="center">Email</StyledTableCell>
                        <StyledTableCell align="center">Check in</StyledTableCell>
                        <StyledTableCell align="center">Check out</StyledTableCell>
                    </StyledTableRow>
                </TableHead>

                <TableBody>
                    {stat.slice((activePage - 1) * 5, activePage * 5).map((row) => (
                        <StyledTableRow key={row.bookingId}>
                            <StyledTableCell align="center">
                                {row.hotelName}
                            </StyledTableCell>

                            <StyledTableCell align="center">
                                {row.roomName}
                            </StyledTableCell>

                            <StyledTableCell align="center">
                                {row.roomType === 'basic' && 'Tiêu chuẩn'}
                                {row.roomType === 'advance' && 'Cao cấp'}
                            </StyledTableCell>

                            <StyledTableCell align="center">
                                {row.userName}
                            </StyledTableCell>

                            <StyledTableCell align="center">
                                {row.userEmail}
                            </StyledTableCell>

                            <StyledTableCell align="center">
                                {row.start}
                            </StyledTableCell>

                            <StyledTableCell align="center">
                                {row.end}
                            </StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>

            <br/>
            <div style={{ textAlign: 'center', marginLeft: '40%' }}>
                <Pagination  activePage={activePage} itemsCountPerPage={5} totalItemsCount={stat.length}
                             pageRangeDisplayed={5} onChange={(numPage) => { setActivePage(numPage) }}
                             itemClass="page-item" linkClass="page-link" />
            </div>
        </TableContainer>
    );
}
