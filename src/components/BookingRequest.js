import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
    
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(name, phoneNumber, day1,day2,roomCode,hotelName, nameType) {
  return { name, phoneNumber, day1,day2,roomCode,hotelName, nameType };
}

const rows = [
  createData('Frozen yoghurt', "0858571662", "22-5-2020","27-5-2020","103", "Hotel Phú Bài"),
  createData('Ice cream sandwich', "0914156990", "17-4-2021","20-4-2021","305", "SaiGon Hotel"),
  createData('Eclair', "01648644145", "30-4-2018", "2-5-2018","008" ,"Codo Hotel"),
  createData('Cupcake', "01676780444", "19-10-2019","22-10-2019","100", "Trọ sinh viên"),
  createData('Gingerbread', "0353938409", "15-9-2020","18-9-2020","312", "Nhà nghỉ An Nhiên"),
];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function BookingRequest() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Tên người đặt</StyledTableCell>
            <StyledTableCell align="left">Số điện thoại</StyledTableCell>
            <StyledTableCell align="left">Ngày nhận</StyledTableCell>
            <StyledTableCell align="left">Ngày trả</StyledTableCell>
            <StyledTableCell align="left"> Mã phòng</StyledTableCell>
            <StyledTableCell align="left">Thuộc khách sạn</StyledTableCell>
            <StyledTableCell align="center">Đồng ý</StyledTableCell>
            <StyledTableCell align="center">Từ chối</StyledTableCell>
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
                  color="primary"
                  className={classes.button}

                >
                  Duyệt
      </Button>
              </StyledTableCell>
              <StyledTableCell align="center">
                <Button
                  variant="contained"
                  color="secondary"
                  className={classes.button}

                >
                  Từ chối
      </Button>
              </StyledTableCell>

            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
