import React, {useEffect, useState} from 'react';
import {axios} from "../../axios";
import "../css/List.css";
import {StyledTableCell, StyledTableRow, useStyles} from "../Table";
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import {Button} from "reactstrap";

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

                <TableBody>
                    {data.map((row) => (
                        <StyledTableRow key={row.id}>
                            <StyledTableCell align="center">
                                {row.room.name}
                            </StyledTableCell>

                            <StyledTableCell align="center">

                            </StyledTableCell>

                            <StyledTableCell align="center">

                            </StyledTableCell>

                            <StyledTableCell align="center">
                                {row.room.area}m²
                            </StyledTableCell>

                            <StyledTableCell align="center">
                                {row.room.type === 'basic' && 'Tiêu chuẩn'}
                                {row.room.type === 'advance' && 'Cao cấp'}
                            </StyledTableCell>

                            <StyledTableCell align="center">
                                {row.room.capacity}
                            </StyledTableCell>

                            <StyledTableCell align="center">
                                {row.room.price} VND
                            </StyledTableCell>

                            <StyledTableCell align="center">
                                {row.room.description}
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
