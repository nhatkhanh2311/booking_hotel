import React, {useEffect, useState} from 'react';
import {axios} from "../../axios";
import "../css/List.css";
import {StyledTableCell, StyledTableRow, useStyles} from "../Table";
import TableContainer from "@material-ui/core/TableContainer";
import {Link} from "react-router-dom";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";

export default function StatisticHotel(props) {
    const classes = useStyles();
    const [data, setData] = useState([]);

    const getData = (name) => {
        const fetchData = () => {
            axios
                .get(`/admin/thongke/${name}`)
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
        getData(props.name);
    }, []);

    return (
        <TableContainer style={{padding: '30px'}}>
            <Link className='back' onClick={() => props.render('city')}>
                {'<< Thống kê theo tỉnh/thành phố'}
            </Link>

            <h2>Khách sạn ở {props.name}</h2>

            <Table className={classes.table}>
                <TableHead>
                    <StyledTableRow>
                        <StyledTableCell align="center">Tên khách sạn</StyledTableCell>
                        <StyledTableCell align="center">Địa chỉ</StyledTableCell>
                        <StyledTableCell align="center">Chủ sở hữu</StyledTableCell>
                        <StyledTableCell align="center">Số điện thoại</StyledTableCell>
                    </StyledTableRow>
                </TableHead>

                <TableBody>
                    {data.map((row) => (
                        <StyledTableRow key={row.hotelID}>
                            <StyledTableCell align="center">
                                {row.hotelName}
                            </StyledTableCell>

                            <StyledTableCell align="center">
                                {row.street}
                            </StyledTableCell>

                            <StyledTableCell align="center">
                                {row.hotelOwner}
                            </StyledTableCell>

                            <StyledTableCell align="center">
                                {row.phone_number}
                            </StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
