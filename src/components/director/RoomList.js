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
import { Input } from '@material-ui/core';

export default function RoomList(props) {
    const classes = useStyles();
    const [data, setData] = useState(props.data.rooms);
    const [dataEdit, setDataEdit] = useState({});
    const [add, setAdd] = useState(false);
    const [edit, setEdit] = useState(false);
    const toggleAdd = () => setAdd(!add);
    const toggleEdit = () => setEdit(!edit);
    const [searchText, setSearchText] = useState('');

    const getData = () => {
        const fetchData = () => {
            axios
                .get(`/director/${props.data.id}/all-room`)
                .then(function (res) {
                    console.log('room',res.data);
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
                .delete(`/director/hotel/${props.data.id}/${roomID}/delete`)
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
        <TableContainer className="room-list" style={{ width: '98%' }}>
            <Link style={{ textDecoration: 'none', color: 'black' }} className='back' onClick={() => props.render('hotel')}>
                 <i class='bx bx-building-house'/> {'Back to hotel list'}
            </Link>

            <h2> {props.data.name}</h2>

            <Fab style={{ color: 'white', backgroundColor: 'rgb(5, 24, 43)', width: '45px', height: '45px', marginBottom: '20px'  }} className={classes.addButton} onClick={toggleAdd}>
                <AddIcon/>
            </Fab>

            <Modal className='modal-dialog modal-dialog-centered' isOpen={add} toggle={toggleAdd}>
                <ModalHeader>
                    <h2>Add room</h2>
                </ModalHeader>
                <ModalBody>
                    <AddRoom id={props.data.id} render={(status) => {if (status === 'refresh') refresh()}}/>
                </ModalBody>
            </Modal>

            <Modal className='modal-dialog modal-dialog-centered' isOpen={edit} toggle={toggleEdit}>
                <ModalHeader>
                    <h2>Update room {dataEdit.name}</h2>
                </ModalHeader>
                <ModalBody>
                    <EditRoom id={props.data.id} data={dataEdit} render={(status) => {if (status === 'refresh') refresh()}}/>
                </ModalBody>
            </Modal>

            <div>
                <Input style={{ marginBottom: '10px' }} type="text" id="userInput" placeholder="Search..." required
                                onChange={(e) => setSearchText(e.target.value)} />
            </div>
            <Table className={classes.table}  >
                <TableHead >
                    <StyledTableRow>
                        <StyledTableCell style={{ width: '200px' }} align="center">Name</StyledTableCell>
                        <StyledTableCell  align="center">Area</StyledTableCell>
                        <StyledTableCell style={{ width: '100px' }} align="center">Status</StyledTableCell>
                        <StyledTableCell align="center">Type</StyledTableCell>
                        <StyledTableCell align="center">People</StyledTableCell>
                        <StyledTableCell align="center">Cost/day</StyledTableCell>
                        <StyledTableCell style={{ width: '350px' }} align="center">Description</StyledTableCell>
                        <StyledTableCell style={{ width: '50px' }} align="center">Edit</StyledTableCell>
                        <StyledTableCell style={{ width: '50px' }} align="center">Delete</StyledTableCell>
                    </StyledTableRow>
                </TableHead>

                <TableBody>
                    {data.map((row) => (
                        <StyledTableRow key={row.id}>
                            <StyledTableCell align="center">
                                {row.name}
                            </StyledTableCell>

                            <StyledTableCell align="center">
                                {(row.area).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}m²
                            </StyledTableCell>

                            <StyledTableCell align="center">
                                {row.availability && <i class='bx bx-radio-circle-marked' style={{color: 'green', fontSize: '20px'}}/>}
                                {!row.availability && <i class='bx bx-radio-circle-marked' style={{color: 'red', fontSize: '20px'}}/>}
                            </StyledTableCell>

                            <StyledTableCell align="center">
                                {row.type === 'basic' && 'Basic'}
                                {row.type === 'advance' && 'Advance'}
                            </StyledTableCell>

                            <StyledTableCell align="center">
                                {row.capacity}
                            </StyledTableCell>

                            <StyledTableCell align="center">
                                {(row.price).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                            </StyledTableCell>

                            <StyledTableCell align="center">
                                {row.description}
                            </StyledTableCell>

                            <StyledTableCell align="center">
                                <i style={{color: 'green', fontSize: '20px'}} onClick={() => editRoom(row)} class='bx bx-pencil'/>
                            </StyledTableCell>

                            <StyledTableCell align="center">
                                <i style={{color: 'rgb(252, 96, 96)', fontSize: '20px'}} onClick={() => deleteRoom(row.id)} class='bx bx-trash'/>
                            </StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
