import React, {useEffect, useState} from 'react';
import {axios} from "../../axios";
import AddHotel from "./AddHotel";
import {Modal, ModalBody, ModalHeader, Button} from "reactstrap";
import {StyledTableCell, StyledTableRow, useStyles} from "../Table";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import "../css/Hotel.css"

export default function HotelList(props) {
    const classes = useStyles();
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

            <div class="hotelList">
                {data.map((row) => (
                        <StyledTableRow class="row" key={row.id}>
                            <StyledTableCell class="img" align="center" >
                                <img src={`data:image/jpeg;base64,${row.images[0].img}` } />
                            </StyledTableCell>

                            <StyledTableCell class="inf">
                                <h5>{row.name}</h5>
                                <br/>
                                
                                <span>Address:</span> {row.address.street} {row.address.city} <br/>
                                <span>Standard:</span> {row.standard}
                            </StyledTableCell>

                            <StyledTableCell align="center">
                                <Button outline color="success" onClick={() => props.render('room', row)}>
                                    Xem
                                </Button>
                                <br/> <br/> <br/>
                                <StyledTableRow>
                                    <StyledTableCell align="center">
                                        <Button outline color="primary">
                                        <i class='far fa-edit'></i>
                                        </Button>
                                    </StyledTableCell>

                                    <StyledTableCell align="center">
                                        <Button outline color="danger">
                                        <i class='far fa-trash-alt'></i>
                                        </Button>
                                    </StyledTableCell>
                                </StyledTableRow> 
                            </StyledTableCell>
                            
                        </StyledTableRow>
                    ))}
            </div>
        </TableContainer>
    );
}
