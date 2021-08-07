import React, {useEffect, useState} from 'react';
import {axios} from "../../axios";
import "../css/List.css";
import {StyledTableCell, StyledTableRow, useStyles} from "../Table";
import TableContainer from "@material-ui/core/TableContainer";
import {Link} from "react-router-dom";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import Pagination from "react-js-pagination";

export default function StatisticHotel(props) {
    const classes = useStyles();
    const [activePage, setActivePage] = useState(1);
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
        <TableContainer style={{ padding: '30px', width: '90%', marginLeft: '5%' }}>
            <Link style={{ textDecoration: 'none' }} className='back' onClick={() => props.render('city')}>
                <i class='bx bxs-dashboard' /> {' Thống kê theo tỉnh/thành phố'}
            </Link>

            <h2>Khách sạn ở {props.name}</h2>

            <Table className={classes.table}>
                <TableHead>
                    <StyledTableRow>
                        <StyledTableCell align="center">Tên khách sạn</StyledTableCell>
                        <StyledTableCell align="center">Địa chỉ</StyledTableCell>
                        <StyledTableCell align="center">Chủ sở hữu</StyledTableCell>
                        <StyledTableCell align="center">Email</StyledTableCell>
                    </StyledTableRow>
                </TableHead>

                <TableBody>
                    {data.slice((activePage - 1) * 5, activePage * 5).map((row) => (
                        <StyledTableRow key={row.hotelID}>
                            <StyledTableCell align="center">
                                {row.hotelName}
                            </StyledTableCell>

                            <StyledTableCell align="center">
                                {row.street}
                            </StyledTableCell>

                            <StyledTableCell align="center">
                                {row.directorName}
                            </StyledTableCell>

                            <StyledTableCell align="center">
                                {row.directorEmail}
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
