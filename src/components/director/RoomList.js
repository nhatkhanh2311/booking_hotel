import React, {useEffect, useState} from 'react';
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
import EditRoom from "./EditRoom";

export default function RoomList(props) {
    const classes = useStyles();
    const [data, setData] = useState(props.data);
    const [dataEdit, setDataEdit] = useState({});
    const [add, setAdd] = useState(false);
    const [edit, setEdit] = useState(false);
    const toggleAdd = () => setAdd(!add);
    const toggleEdit = () => setEdit(!edit);

    const getData = () => {
        const fetchData = () => {
            axios
                .get(`/director/hotel/${data.id}`)
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

    const editRoom = (data) => {
        setDataEdit(data);
        toggleEdit();
    }

    const deleteRoom = (roomID) => {
        const fetchData = () => {
            axios
                .delete(`/director/hotel/${data.id}/${roomID}/delete`)
                .then(function (res) {
                    console.log(res.data);
                    if (res.data['message'] === 'Delete room successful') window.alert('Xóa phòng thành công');
                    getData();
                })
                .catch(function (err) {
                    console.log(err);
                });
        }
        fetchData();
    }

    const refresh = () => {
        setAdd(false);
        setEdit(false);
        getData();
    }

    useEffect(() => {
        console.log(props.data);
    }, []);

    return (
        <TableContainer className="room-list" style={{padding: '30px', width: '70vw'}}>
            <Link className='back' onClick={() => props.render('hotel')}>
                {'<< Khách sạn của bạn'}
            </Link>

            <h2>Khách sạn {data.name}</h2>

            <Fab color="primary" aria-label="add" className={classes.addButton} onClick={toggleAdd}>
                <AddIcon/>
            </Fab>

            <Modal className='modal-dialog modal-dialog-centered' isOpen={add} toggle={toggleAdd}>
                <ModalHeader>
                    <h2>Thêm phòng</h2>
                </ModalHeader>
                <ModalBody>
                    <AddRoom id={data.id} render={(status) => {if (status === 'refresh') refresh()}}/>
                </ModalBody>
            </Modal>

            <Modal className='modal-dialog modal-dialog-centered' isOpen={edit} toggle={toggleEdit}>
                <ModalHeader>
                    <h2>Cập nhật phòng {dataEdit.name}</h2>
                </ModalHeader>
                <ModalBody>
                    <EditRoom id={data.id} data={dataEdit} render={(status) => {if (status === 'refresh') refresh()}}/>
                </ModalBody>
            </Modal>

            <Table className={classes.table} style={{ width: '63vw' }}>
                <TableHead >
                    <StyledTableRow>
                        <StyledTableCell style={{ width: '200px' }} align="center">Tên phòng</StyledTableCell>
                        <StyledTableCell  align="center">Diện tích</StyledTableCell>
                        <StyledTableCell style={{ width: '200px' }} align="center">Trạng thái</StyledTableCell>
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
                        <StyledTableRow key={row.id}>
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
                                <Button outline color="primary" onClick={() => editRoom(row)}>
                                    Sửa
                                </Button>
                            </StyledTableCell>

                            <StyledTableCell align="center">
                                <Button outline color="danger" onClick={() => deleteRoom(row.id)}>
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
