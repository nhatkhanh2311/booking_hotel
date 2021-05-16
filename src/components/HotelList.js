import React, {useEffect, useState} from 'react';
import {axios} from "../axios";
import {withStyles, makeStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import {Modal, ModalBody, ModalHeader} from "reactstrap";
import UpHotel from "./UpHotel";

export default function HotelList() {
    const classes = useStyles();
    const [data, setData] = useState([]);
    const [up, setUp] = useState(false);
    const toggleUp = () => setUp(!up);

    const getData = () => {
        const fetchData = async () => {
            await axios
                .get('/director/hotel')
                .then(function (res) {
                    console.log(res.data);
                    setData([]);
                })
                .catch(function (err) {
                    console.log(err);
                });
        }
        fetchData();
    }

    useEffect(() => {
        getData();
    }, [data]);

    return (
        <TableContainer component={Paper}>
            <Fab color="primary" aria-label="add" className={classes.addButton} onClick={toggleUp}>
                <AddIcon/>
            </Fab>

            <Modal isOpen={up} toggle={toggleUp}>
                <ModalHeader>
                    <h2>Thêm khách sạn</h2>
                </ModalHeader>
                <ModalBody>
                    <UpHotel/>
                </ModalBody>
            </Modal>

            <Table className={classes.table} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell align="center">Tên</StyledTableCell>
                        <StyledTableCell align="center">Địa chỉ</StyledTableCell>
                        <StyledTableCell align="center">Số phòng</StyledTableCell>
                        <StyledTableCell align="center">Danh sách phòng</StyledTableCell>
                        <StyledTableCell align="center">Sửa</StyledTableCell>
                        <StyledTableCell align="center">Xóa</StyledTableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    {data.map((row) => (
                        <StyledTableRow key={row.name}>
                            <StyledTableCell align="center">{row.name}</StyledTableCell>

                            <StyledTableCell align="center">
                                {row.address.city}
                                <br/>
                                {row.address.street}
                            </StyledTableCell>

                            <StyledTableCell align="center">{row.rooms.length}</StyledTableCell>

                            <StyledTableCell align="center">
                                <Button variant="contained" color="success" className={classes.button}>
                                    Xem
                                </Button>
                            </StyledTableCell>

                            <StyledTableCell align="center">
                                <Button variant="contained" color="primary" className={classes.button}>
                                    Sửa
                                </Button>
                            </StyledTableCell>

                            <StyledTableCell align="center">
                                <Button variant="contained" color="secondary" className={classes.button}>
                                    Xóa
                                </Button>
                            </StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white
    },
    body: {
        fontSize: 14
    }
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover
        }
    }
}))(TableRow);

const useStyles = makeStyles({
    table: {
        minWidth: 700
    },
    addButton: {
        marginLeft:'90%',
        marginBottom: '20px'
    }
});
