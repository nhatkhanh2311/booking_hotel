import React, {useEffect, useState} from 'react';
import {axios} from "../../axios";
import "../css/List.css";
import {StyledTableCell, StyledTableRow, useStyles} from "../Table";
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import {Button} from "reactstrap";

export default function Booked() {
    const classes = useStyles();
    const [data, setData] = useState([]);

    const getData = () => {
        const fetchData = () => {
            axios
                .get('/user/history-booking-after')
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

    const cancel = (id) => {
        const fetchData = () => {
            axios
                .delete(`/user/cancelBooking/${id}`)
                .then(function (res) {
                    console.log(res);
                    getData();
                })
                .catch(function (err) {
                    console.log(err);
                });
        }
        fetchData();
    }

    useEffect(() => {
        getData();
    }, []);

    return (
        <TableContainer style={{padding: '30px'}}>
            <h2>Phòng đã đặt</h2>

            <Table className={classes.table}>
                <TableHead>
                    <StyledTableRow>
                        <StyledTableCell align="center">Tên phòng</StyledTableCell>
                        <StyledTableCell align="center">Khách sạn</StyledTableCell>
                        <StyledTableCell align="center">Địa chỉ</StyledTableCell>
                        <StyledTableCell align="center">Tổng tiền</StyledTableCell>
                        <StyledTableCell align="center">Ngày sử dụng</StyledTableCell>
                        <StyledTableCell align="center">Hủy đặt</StyledTableCell>
                    </StyledTableRow>
                </TableHead>

                <TableBody>
                    {data.map((row) => (
                        <StyledTableRow key={row.id}>
                            <StyledTableCell align="center">
                                {row.roomName}
                            </StyledTableCell>

                            <StyledTableCell align="center">
                                {row.hotelName}
                            </StyledTableCell>

                            <StyledTableCell align="center">
                                {row.street} - {row.city}
                            </StyledTableCell>

                            <StyledTableCell align="center">
                                {row.total}VND
                            </StyledTableCell>

                            <StyledTableCell align="center">
                                {row.start} - {row.end}
                            </StyledTableCell>

                            <StyledTableCell align="center">
                                <Button outline color="danger" onClick={() => cancel(row.bookingId)}>
                                    Hủy
                                </Button>
                            </StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
