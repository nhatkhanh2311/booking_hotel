import React, {useEffect, useState} from 'react';
import {axios} from "../../axios";
import "../css/List.css";
import {StyledTableCell, StyledTableRow, useStyles} from "../Table";
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import {Button} from "reactstrap";
import Pagination from "react-js-pagination";

export default function Booked() {
    const classes = useStyles();
    const [activePage, setActivePage] = useState(1);
    const [data, setData] = useState([]);

    const getData = () => {
        const fetchData = () => {
            axios
                .get('/user/history-booking-after')
                .then(function (res) {
                    console.log('after', res.data);
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
            <h2>List booking</h2>

            <Table className={classes.table}>
                <TableHead>
                    <StyledTableRow>
                    <StyledTableCell align="center">Room name</StyledTableCell>
                        <StyledTableCell align="center">Hotel</StyledTableCell>
                        <StyledTableCell align="center">Address</StyledTableCell>
                        <StyledTableCell align="center">Room type</StyledTableCell>
                        <StyledTableCell align="center">Total cost</StyledTableCell>
                        <StyledTableCell align="center">Checkin - Checkout</StyledTableCell>
                        <StyledTableCell align="center">Cancel</StyledTableCell>
                    </StyledTableRow>
                </TableHead>

                <TableBody>
                    {data.slice((activePage - 1) * 5, activePage * 5).map((row) => (
                        <StyledTableRow key={row.bookingId}>
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

                            <StyledTableCell align="center">
                                <Button outline color="danger" onClick={() => cancel(row.bookingId)}>
                                    Hủy
                                </Button>
                            </StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>

            <br/>
            <div style={{ textAlign: 'center', marginLeft: '40%' }}>
                <Pagination  activePage={activePage} itemsCountPerPage={5} totalItemsCount={data.length}
                             pageRangeDisplayed={5} onChange={(numPage) => { setActivePage(numPage) }}
                             itemClass="page-item" linkClass="page-link" />
            </div>
        </TableContainer>
    );
}
