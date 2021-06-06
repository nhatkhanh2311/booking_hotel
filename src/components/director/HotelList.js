import React, {useEffect, useState} from 'react';
import {axios} from "../../axios";
import AddHotel from "./AddHotel";
import "../css/List.css";
import {Modal, ModalBody, ModalHeader, Button} from "reactstrap";
import {StyledTableCell, StyledTableRow, useStyles} from "../Table";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

export default function HotelList(props) {
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
            <h2>Khách sạn của bạn</h2>

            <Fab color="primary" aria-label="add" className={classes.addButton} onClick={toggleUp}>
                <AddIcon/>
            </Fab>

            <Modal className='modal-dialog modal-dialog-centered' isOpen={up} toggle={toggleUp}>
                <ModalHeader>
                    <h2>Thêm khách sạn</h2>
                </ModalHeader>
                <ModalBody>
                    <AddHotel/>
                </ModalBody>
            </Modal>

            <Table className={classes.table}>
                <TableHead>
                    <StyledTableRow>
                        <StyledTableCell align="center">Tên khách sạn</StyledTableCell>
                        <StyledTableCell align="center">Địa chỉ</StyledTableCell>
                        <StyledTableCell align="center">Số phòng</StyledTableCell>
                        <StyledTableCell align="center">Danh sách phòng</StyledTableCell>
                        <StyledTableCell align="center">Sửa</StyledTableCell>
                        <StyledTableCell align="center">Xóa</StyledTableCell>
                    </StyledTableRow>
                </TableHead>

                <TableBody>
                    {data.map((row) => (
                        <StyledTableRow key={row.id}>
                            <StyledTableCell align="center">
                                {row.name}
                            </StyledTableCell>

                            <StyledTableCell align="center">
                                {row.address.city}
                                <br/>
                                {row.address.street}
                            </StyledTableCell>

                            <StyledTableCell align="center">
                                {row.rooms.length}
                            </StyledTableCell>

                            <StyledTableCell align="center">
                                <Button outline color="success" onClick={() => props.render('room', row)}>
                                    Xem
                                </Button>
                            </StyledTableCell>

                            <StyledTableCell align="center">
                                <Button outline color="primary">
                                    Sửa
                                </Button>
                            </StyledTableCell>

                            <StyledTableCell align="center">
                                <Button outline color="danger">
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
