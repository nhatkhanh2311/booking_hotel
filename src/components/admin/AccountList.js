import React, {useEffect, useState} from 'react';
import {axios} from "../../axios";
import "../css/List.css";
import {Button} from "reactstrap";
import {StyledTableCell, StyledTableRow, useStyles} from "../Table";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import { Input } from '@material-ui/core';

export default function AccountList() {
    const classes = useStyles();
    const [data, setData] = useState([]);
    const [searchText, setSearchText] = useState('');

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
            <h2>Registered director accounts</h2>
            <div>
                <Input style={{ margin: '10px 0' }} type="text" id="userInput" placeholder="Search..." required
                                onChange={(e) => setSearchText(e.target.value)} />
            </div>
            <Table className={classes.table}>
                <TableHead>
                    <StyledTableRow>
                        <StyledTableCell align="center">Full name</StyledTableCell>
                        <StyledTableCell align="center">Username</StyledTableCell>
                        <StyledTableCell align="center">Email</StyledTableCell>
                        <StyledTableCell align="center">Phone number</StyledTableCell>
                        <StyledTableCell align="center">Birthday</StyledTableCell>
                        <StyledTableCell align="center">Approving</StyledTableCell>
                    </StyledTableRow>
                </TableHead>

                <TableBody>
                    {data.filter(director => director.username.includes(searchText) || director.email.includes(searchText) || director.userDetail.nameUserDetail.includes(searchText)|| director.userDetail.phoneNumber.includes(searchText)).map((row) => (
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
                                    Approve
                                </Button>
                            </StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
