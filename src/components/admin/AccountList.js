import React, {useEffect, useState} from 'react';
import {axios} from "../../axios";
import "../css/List.css";
import {Button} from "reactstrap";
import {StyledTableCell, StyledTableRow, useStyles} from "../Table";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';

export default function AccountList() {
    const classes = useStyles();
    const [data, setData] = useState([]);

    const unlock = (id) => {
        const fetchData = () => {
            axios
                .put(`/admin/getDirector/unlock/${id}`)
                .then(function (res) {
                    getData();
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
                .get('/admin/getDirector')
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
            <h2>Duyệt tài khoản director đã đăng ký</h2>

            <Table className={classes.table}>
                <TableHead>
                    <StyledTableRow>
                        <StyledTableCell align="center">Tên tài khoản</StyledTableCell>
                        <StyledTableCell align="center">Tên đăng nhập</StyledTableCell>
                        <StyledTableCell align="center">Email</StyledTableCell>
                        <StyledTableCell align="center">Số điện thoại</StyledTableCell>
                        <StyledTableCell align="center">Ngày sinh</StyledTableCell>
                        <StyledTableCell align="center">Duyệt tài khoản</StyledTableCell>
                    </StyledTableRow>
                </TableHead>

                <TableBody>
                    {data.map((row) => (
                        <StyledTableRow key={row.id}>
                            <StyledTableCell align="center">
                                {row.userDetail.nameUserDetail}
                            </StyledTableCell>

                            <StyledTableCell align="center">
                                {row.username}
                            </StyledTableCell>

                            <StyledTableCell align="center">
                                {row.email}
                            </StyledTableCell>

                            <StyledTableCell align="center">
                                {row.userDetail.phoneNumber}
                            </StyledTableCell>

                            <StyledTableCell align="center">
                                {row.userDetail.birth}
                            </StyledTableCell>

                            <StyledTableCell align="center">
                                <Button outline color="success" onClick={() => unlock(row.id)}>
                                    Duyệt
                                </Button>
                            </StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
