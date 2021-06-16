import React, {useState} from 'react';
import {axios} from "../../axios";
import AddRoom from "./AddRoom";
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
                    <AddRoom id={props.data.id}/>
                </ModalBody>
            </Modal>

            <Table className={classes.table}>

                <TableBody>
                    {data.rooms.map((row) => (
                        <StyledTableRow key={row.id}>
                            <StyledTableCell class="imgRoom">
                                <Zoom scale={0.4}>
                                    {
                                        row.images.map((each, index) => <img key={index} style={{width: "100%"}} src={`data:image/jpeg;base64,${each.img}`} />)
                                    }
                                </Zoom>
                            </StyledTableCell>

                            <StyledTableCell>
                                Tên phòng: {row.name} <br/>
                                Diện tích: {row.area}m² <br/>
                                Trạng thái: {row.availability && 'Còn trống'}{!row.availability && 'Đã đặt'} <br/>
                                Loại phòng: {row.type === 'basic' && 'Tiêu chuẩn'}{row.type === 'advance' && 'Cao cấp'} <br/>
                                Giá phòng/ngày: {row.price} VND <br/>
                                Số người: {row.capacity} <br/>
                                Mô tả: {row.description} <br/>
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
