import React, {useEffect, useState} from 'react';
import {axios} from "../../axios";
import "../css/List.css";
import {StyledTableCell, StyledTableRow, useStyles} from "../Table";
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";

export default function Statistic() {
    const classes = useStyles();
    const [data, setData] = useState([]);
    const [reload, setReload] = useState(false);

    const getData = () => {
        const fetchData = async () => {
            await axios
                .get('/admin/thongke')
                .then(function (res) {
                    console.log(res.data);
                    setData(res.data);
                    setReload(true);
                })
                .catch(function (err) {
                    console.log(err);
                });
        }
        fetchData();
    }

    useEffect(() => {
        getData();
    }, [reload]);

    return (
        <TableContainer style={{padding: '30px'}}>
            <h2>Thống kê khách sạn theo tỉnh/thành phố</h2>

            <Table className={classes.table}>
                <TableHead>
                    <StyledTableRow>
                        <StyledTableCell align="center">Tỉnh/Thành phố</StyledTableCell>
                        <StyledTableCell align="center">Số lượng khách sạn</StyledTableCell>
                    </StyledTableRow>
                </TableHead>

                <TableBody>
                    {data.map((row) => (
                        <StyledTableRow key={row.name}>
                            <StyledTableCell align="center">
                                {row.city}
                            </StyledTableCell>

                            <StyledTableCell align="center">
                                {row.numberOfHotel}
                            </StyledTableCell>
                        </StyledTableRow>
                        ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
