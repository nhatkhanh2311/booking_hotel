import React, { useEffect, useState } from 'react';
import { axios } from "../../axios";
import AddHotel from "./AddHotel";
import { Modal, ModalBody, ModalHeader, Button } from "reactstrap";
import { StyledTableCell, StyledTableRow, useStyles } from "../Table";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import "../css/Hotel.css"
import 'react-slideshow-image/dist/styles.css'
import { Zoom } from 'react-slideshow-image';
import Pagination from "react-js-pagination";

export default function HotelList(props) {
    const classes = useStyles();
    const [activePage, setActivePage] = useState(1);
    const [data, setData] = useState([]);
    const [up, setUp] = useState(false);
    const toggleUp = () => setUp(!up);

    const getData = () => {
        const fetchData = () => {
            axios
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

    const deleteHotel = (id) => {
        const fetchData = () => {
            axios
                .delete(`/director/hotel/${id}/delete`)
                .then(function (res) {
                    console.log(res.data);
                    if (res.data['message'] === 'Delete hotel successful') window.alert('Xóa khách sạn thành công');
                })
                .catch(function (err) {
                    console.log(err);
                });
        }
        fetchData();
    }

    const refresh = () => {
        toggleUp();
        getData();
    }

    useEffect(() => {
        getData();
    }, []);

    return (
        <TableContainer class="hotels" style={{ padding: '30px' }}>
            <h2>Khách sạn của bạn</h2>

            <Fab color="primary" aria-label="add" className={classes.addButton} onClick={toggleUp}>
                <AddIcon />
            </Fab>

            <Modal className='modal-dialog modal-dialog-centered' isOpen={up} toggle={toggleUp}>
                <ModalHeader>
                    <h2>Thêm khách sạn</h2>
                </ModalHeader>
                <ModalBody>
                    <AddHotel render={(status) => {if (status === 'refresh') refresh()}}/>
                </ModalBody>
            </Modal>

            <div className="hotelList">
                {data.slice((activePage - 1) * 2, activePage * 2).map((row) => (
                    <StyledTableRow class="row" key={row.id}>
                        <StyledTableCell class="img" align="center" >
                            <Zoom scale={0.4}>
                                {row.images.map((each, index) => <img key={index} style={{width: "100%"}} src={`data:image/jpeg;base64,${each.img}`} />)}
                            </Zoom>
                        </StyledTableCell>

                        <StyledTableCell class="inf">
                            <h5>{row.name}</h5>
                            <br/>
                            <span>Address:</span> {row.address.street} {row.address.city} <br />
                            <span>Standard:</span> {row.standard}
                            <TableContainer className="chucnang">
                                <StyledTableRow>
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
                                        <Button outline color="danger" onClick={() => deleteHotel(row.id)}>
                                            Xóa
                                        </Button>
                                    </StyledTableCell>
                                </StyledTableRow>
                            </TableContainer>
                        </StyledTableCell>
                    </StyledTableRow>
                ))}
            </div>

            <Pagination activePage={activePage} itemsCountPerPage={2} totalItemsCount={data.length}
                        pageRangeDisplayed={5} onChange={(numPage) => {setActivePage(numPage)}}
                        itemClass="page-item" linkClass="page-link"/>
        </TableContainer>
    );
}
