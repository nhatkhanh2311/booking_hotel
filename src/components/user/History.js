import React, {useEffect, useState} from 'react';
import {axios} from "../../axios";
import "../css/List.css";
import {StyledTableCell, StyledTableRow, useStyles} from "../Table";
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
        <TableContainer style={{padding: '30px'}}>
            <h2>Lịch sử đặt phòng</h2>

            <Table className={classes.table}>
                <TableHead>
                    <StyledTableRow>
                        <StyledTableCell align="center">Tên phòng</StyledTableCell>
                        <StyledTableCell align="center">Khách sạn</StyledTableCell>
                        <StyledTableCell align="center">Địa chỉ</StyledTableCell>
                        <StyledTableCell align="center">Diện tích</StyledTableCell>
                        <StyledTableCell align="center">Loại phòng</StyledTableCell>
                        <StyledTableCell align="center">Số người</StyledTableCell>
                        <StyledTableCell align="center">Giá phòng/ngày</StyledTableCell>
                        <StyledTableCell align="center">Mô tả</StyledTableCell>
                        <StyledTableCell align="center">Ngày sử dụng</StyledTableCell>
                    </StyledTableRow>
                </TableHead>

                {/* <TableBody>
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
                                {row.area}m²
                            </StyledTableCell>

                            <StyledTableCell align="center">
                                {row.roomType === 'basic' && 'Tiêu chuẩn'}
                                {row.roomType === 'advance' && 'Cao cấp'}
                            </StyledTableCell>

                            <StyledTableCell align="center">
                                {row.capacity}
                            </StyledTableCell>

                            <StyledTableCell align="center">
                                {row.price} VND
                            </StyledTableCell>

                            <StyledTableCell align="center">
                                {row.description}
                            </StyledTableCell>

                            <StyledTableCell align="center">
                                {row.start} - {row.end}
                            </StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody> */}
            </Table>
        </TableContainer>
    );
}
