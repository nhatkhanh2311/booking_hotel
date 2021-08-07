import React, { useEffect, useState } from 'react';
import { axios } from "../../axios";
import AddHotel from "./AddHotel";
import { Modal, ModalBody, ModalHeader, Button } from "reactstrap";
import { StyledTableCell, StyledTableRow, useStyles } from "../Table";
import TableContainer from '@material-ui/core/TableContainer';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import "../css/Hotel.css"
import 'react-slideshow-image/dist/styles.css'
import { Zoom } from 'react-slideshow-image';
import Pagination from "react-js-pagination";
import EditHotel from "./EditHotel";
import '../css/List.css'

export default function HotelList(props) {
    const classes = useStyles();
    const [activePage, setActivePage] = useState(1);
    const [data, setData] = useState([]);
    const [dataEdit, setDataEdit] = useState({});
    const [add, setAdd] = useState(false);
    const [edit, setEdit] = useState(false);
    const toggleAdd = () => setAdd(!add);
    const toggleEdit = () => setEdit(!edit);

    const getData = () => {
        const fetchData = () => {
            axios
                .get('/director/all-hotel')
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

    const editHotel = (data) => {
        setDataEdit(data);
        toggleEdit();
    }

    const deleteHotel = (id) => {
        const fetchData = () => {
            axios
                .delete(`/director/hotel/${id}/delete`)
                .then(function (res) {
                    console.log(res.data);
                    if (res.data['message'] === 'Delete hotel successful') window.alert('Xóa khách sạn thành công');
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
        getData();
    }, []);

    return (
        <TableContainer className="hotels" className="room-list" >
            <h2>Hotels</h2>

            <Fab style={{ color: 'white', backgroundColor: 'rgb(5, 24, 43)', width: '45px', height: '45px', margin: '0 0 20px 30px' }} className={classes.addButton} onClick={toggleAdd}>
                <AddIcon />
            </Fab>
            <Modal className='modal-dialog modal-dialog-centered' isOpen={add} toggle={toggleAdd}>
                <ModalHeader>
                    <h2>Thêm khách sạn</h2>
                </ModalHeader>
                <ModalBody>
                    <AddHotel render={(status) => { if (status === 'refresh') refresh() }} />
                </ModalBody>
            </Modal>

            <Modal className='modal-dialog modal-dialog-centered' isOpen={edit} toggle={toggleEdit}>
                <ModalHeader>
                    <h2>Cập nhật khách sạn {dataEdit.name}</h2>
                </ModalHeader>
                <ModalBody>
                    <EditHotel data={dataEdit} render={(status) => { if (status === 'refresh') refresh() }} />
                </ModalBody>
            </Modal>

            <div className="hotelList">
                {data.slice((activePage - 1) * 2, activePage * 2).map((row) => (
                    <StyledTableRow class="row" key={row.id}>
                        <StyledTableCell class="img" align="center">
                            <Zoom scale={0.4} >
                                {row.images.map((each, index) => <img key={index} style={{ width: "700%", margin: '0' }} src={`data:image/jpeg;base64,${each.img}`} />)}
                            </Zoom>
                        </StyledTableCell>

                        <StyledTableCell class="inf">
                            <h5>{row.name}</h5>
                            <br />
                            <span>Address:</span> {row.address.street}, {row.address.city}
                            <br />
                            <span>Standard:</span> {row.standard}
                            <TableContainer class="chucnang">
                                <StyledTableCell align="center">
                                    <i onClick={() => props.render('room', row)} style={{ color: 'black', fontSize: '20px' }} class='bx bx-show'></i>
                                </StyledTableCell>

                                <StyledTableCell align="center">
                                    <i onClick={() => editHotel(row)} style={{ color: 'green', fontSize: '20px' }} class='bx bx-pencil'></i>
                                </StyledTableCell>

                                <StyledTableCell align="center">
                                    <i onClick={() => deleteHotel(row.id)} style={{ color: 'red', fontSize: '20px' }} class='bx bx-trash' ></i>
                                </StyledTableCell>
                            </TableContainer>
                        </StyledTableCell>
                    </StyledTableRow>
                ))}
            </div>

            <div style={{ textAlign: 'center', marginLeft: '40%' }}>
            <Pagination  activePage={activePage} itemsCountPerPage={2} totalItemsCount={data.length}
                pageRangeDisplayed={5} onChange={(numPage) => { setActivePage(numPage) }}
                itemClass="page-item" linkClass="page-link" />
            </div>
        </TableContainer>
    );
}
