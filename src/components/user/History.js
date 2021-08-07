import React, { useEffect, useState } from 'react';
import { axios } from "../../axios";
import "../css/List.css";
import { StyledTableCell, StyledTableRow, useStyles } from "../Table";
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";

export default function History() {
    const classes = useStyles();
    const [data, setData] = useState([]);

    const getData = () => {
        const fetchData = () => {
            axios
                .get('/user/history-booking-before')
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

    useEffect(() => {
        getData();
    }, []);

    return (
        <TableContainer style={{ padding: '30px' }}>
            <h2>Lịch sử đặt phòng</h2>

            <Table className={classes.table}>
                <TableHead>
                    <StyledTableRow>

                        <StyledTableCell align="center">Room name</StyledTableCell>
                        <StyledTableCell align="center">Hotel</StyledTableCell>
                        <StyledTableCell align="center">Address</StyledTableCell>
                        <StyledTableCell align="center">Room type</StyledTableCell>
                        <StyledTableCell align="center">Total cost</StyledTableCell>
                        <StyledTableCell align="center">Checkin - Checkout</StyledTableCell>
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
                                {row.roomType === 'basic' && 'Basic'}
                                {row.roomType === 'advance' && 'Advance'}
                            </StyledTableCell>

                            <StyledTableCell align="center">
                                {(row.total).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}VND
                            </StyledTableCell>

                            <StyledTableCell align="center">
                                {row.start} - {row.end}
                            </StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
