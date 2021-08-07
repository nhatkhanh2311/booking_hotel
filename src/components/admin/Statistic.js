import React, {useEffect, useState} from 'react';
import {axios} from "../../axios";
import "../css/List.css";
import {Button} from "reactstrap";
import {StyledTableCell, StyledTableRow, useStyles} from "../Table";
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";

export default function Statistic(props) {
    const classes = useStyles();
    const [data, setData] = useState([]);

    const getData = () => {
        const fetchData = () => {
            axios
                .get('/admin/thongke')
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
            <h2>Hotel statistics by province/city</h2>

            <Table className={classes.table}>
                <TableHead>
                    <StyledTableRow>
                        <StyledTableCell align="center">Province/city</StyledTableCell>
                        <StyledTableCell align="center">
Number of hotels</StyledTableCell>
                        <StyledTableCell align="center">
List of hotels</StyledTableCell>
                    </StyledTableRow>
                </TableHead>

                <TableBody>
                    {data.map((row) => (
                        <StyledTableRow key={row.cityName}>
                            <StyledTableCell align="center">
                                {row.cityName}
                            </StyledTableCell>

                            <StyledTableCell align="center">
                                {row.numberOfHotel}
                            </StyledTableCell>

                            <StyledTableCell align="center">
                                <Button outline color="success" onClick={() => props.render('hotel', row.city)}>
                                    View
                                </Button>
                            </StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
