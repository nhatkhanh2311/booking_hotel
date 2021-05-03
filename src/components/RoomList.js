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
import { TextareaAutosize } from '@material-ui/core';

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

function createData(code, price, describe, type) {
  return { code, price, describe, type };
}

const rows = [
  createData('102', 300000, "Phòng sạch sẽ thoáng mát ", "Phòng khách sạn"),
  createData('305', 580000, "Phòng sạch sẽ thoáng mát", "Phòng khách sạn"),
  createData('207', 600000, "Phòng sạch sẽ thoáng mát", "Phòng khách sạn"),
  createData('408', 900000, "Phòng sạch sẽ thoáng mát", "Phòng khách sạn"),
  createData('47', 200000, "Phòng sạch sẽ thoáng mát", "Phòng khách sạn"),
];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function RoomList() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell >Mã phòng</StyledTableCell>
            <StyledTableCell align="left">Giá phòng(mỗi ngày)</StyledTableCell>
            <StyledTableCell align="left">Mô tả</StyledTableCell>
            <StyledTableCell align="left">Loại phòng</StyledTableCell>
            <StyledTableCell align="center">Sửa</StyledTableCell>
            <StyledTableCell align="center">Xóa</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.code}
              </StyledTableCell>
              <StyledTableCell align="left">{row.price}</StyledTableCell>
              <StyledTableCell align="left"><TextareaAutosize>{row.describe}</TextareaAutosize></StyledTableCell>
              <StyledTableCell align="left">{row.type}</StyledTableCell>
              <StyledTableCell align="center">
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.button}

                >
                  Sửa
      </Button>
              </StyledTableCell>
              <StyledTableCell align="center">
                <Button
                  variant="contained"
                  color="secondary"
                  className={classes.button}

                >
                  Delete
      </Button>
              </StyledTableCell>

            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
