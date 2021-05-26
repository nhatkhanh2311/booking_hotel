import React, {useEffect, useState} from 'react';
import {axios} from "../../axios";
import UpRoom from "./UpRoom";
import "../css/List.css";
import {Modal, ModalBody, ModalHeader, Button} from "reactstrap";
import {Link} from "react-router-dom";
import {StyledTableCell, StyledTableRow, useStyles} from "../Table";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

export default function RoomList(props) {
    const classes = useStyles();
    const [data, setData] = useState(props.data);
    const [up, setUp] = useState(false);
    const toggleUp = () => setUp(!up);

    return (
        <TableContainer style={{padding: '30px'}}>
            <Link className='back' onClick={() => props.render('hotel')}>
                {'<< Khách sạn của bạn'}
            </Link>

            <h2>Khách sạn {props.data.name}</h2>

            <Fab color="primary" aria-label="add" className={classes.addButton} onClick={toggleUp}>
                <AddIcon/>
            </Fab>

            <Modal className='modal-dialog modal-dialog-centered' isOpen={up} toggle={toggleUp}>
                <ModalHeader>
                    <h2>Thêm phòng</h2>
                </ModalHeader>
                <ModalBody>
                    <UpRoom id={props.data.id}/>
                </ModalBody>
            </Modal>

            <Table className={classes.table}>
                <TableHead>
                    <StyledTableRow>
                        <StyledTableCell align="center">Tên phòng</StyledTableCell>
                        <StyledTableCell align="center">Diện tích</StyledTableCell>
                        <StyledTableCell align="center">Trạng thái</StyledTableCell>
                        <StyledTableCell align="center">Loại phòng</StyledTableCell>
                        <StyledTableCell align="center">Số người</StyledTableCell>
                        <StyledTableCell align="center">Giá phòng/ngày</StyledTableCell>
                        <StyledTableCell align="center">Mô tả</StyledTableCell>
                        <StyledTableCell align="center">Sửa</StyledTableCell>
                        <StyledTableCell align="center">Xóa</StyledTableCell>
                    </StyledTableRow>
                </TableHead>

                <TableBody>
                    {data.rooms.map((row) => (
                        <StyledTableRow key={row.name}>
                            <StyledTableCell align="center">
                                {row.name}
                            </StyledTableCell>

                            <StyledTableCell align="center">
                                {row.area}m²
                            </StyledTableCell>

                            <StyledTableCell align="center">
                                {row.availability && 'Còn trống'}
                                {!row.availability && 'Đã đặt'}
                            </StyledTableCell>

                            <StyledTableCell align="center">
                                {row.type === 'basic' && 'Tiêu chuẩn'}
                                {row.type === 'advance' && 'Cao cấp'}
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