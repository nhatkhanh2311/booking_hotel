import React from 'react';
import {makeStyles, withStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14
    }
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {'&:nth-of-type(odd)': {backgroundColor: theme.palette.action.hover}},
}))(TableRow);

function createData(name, phoneNumber, day1,day2,roomCode,hotelName, nameType) {
    return { name, phoneNumber, day1,day2,roomCode,hotelName, nameType };
}

const rows = [
    createData('108', "0858571662", "22-5-2020","27-5-2020","103 000", "Hotel Phú Bài"),
    createData('306', "0914156990", "17-4-2021","20-4-2021","305 000", "SaiGon Hotel"),
    createData('204', "01648644145", "30-4-2018", "2-5-2018","800 000" ,"Codo Hotel"),
    createData('305', "01676780444", "19-10-2019","22-10-2019","100 000", "Trọ sinh viên"),
    createData('114', "0353938409", "15-9-2020","18-9-2020","312 000", "Nhà nghỉ An Nhiên"),
];

const useStyles = makeStyles({
    table: {
        minWidth: 700,
    },
});

export default function RoomBooked() {
    const classes = useStyles();

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell align="left">Mã phòng</StyledTableCell>
                        <StyledTableCell align="left">Số điện thoại KS</StyledTableCell>
                        <StyledTableCell align="left">Ngày nhận</StyledTableCell>
                        <StyledTableCell align="left">Ngày trả</StyledTableCell>
                        <StyledTableCell align="left">Giá phòng(ngày)</StyledTableCell>
                        <StyledTableCell align="left">Thuộc khách sạn</StyledTableCell>
                        <StyledTableCell align="center">Hủy đặt phòng</StyledTableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    {rows.map((row) => (
                        <StyledTableRow key={row.name}>
                            <StyledTableCell component="th" scope="row">
                                {row.name}
                            </StyledTableCell>
                            <StyledTableCell align="left">{row.phoneNumber}</StyledTableCell>
                            <StyledTableCell align="left">{row.day1}</StyledTableCell>
                            <StyledTableCell align="left">{row.day2}</StyledTableCell>
                            <StyledTableCell align="left">{row.roomCode}</StyledTableCell>
                            <StyledTableCell align="left">{row.hotelName}</StyledTableCell>
                            <StyledTableCell align="center">
                                <Button
                                    variant="contained"
                                    color="secondary"
                                    className={classes.button}
                                >
                                    Hủy phòng
                                </Button>
                            </StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
