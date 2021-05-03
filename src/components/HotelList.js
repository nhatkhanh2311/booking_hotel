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

function createData(name, type, city, boss) {
  return { name, type, city, boss };
}

const rows = [
  createData('Frozen yoghurt', "Nguyễn văn A", "Hải Phòng", "Trần Cảnh"),
  createData('Ice cream sandwich', "Nguyễn văn Nguyên", "Thái Nguyên", "Lý Công Uẩn"),
  createData('Eclair', "Nguyễn văn Loan", "Thái Nguyên", "Lê Hoàng"),
  createData('Cupcake', "Nguyễn văn Huyền", "Thái Nguyên", "Nguyễn Long"),
  createData('Gingerbread', "Nguyễn văn Phong", "Thái Nguyên", "Phạm Hùng"),
];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function HotelList() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Tên khách sạn</StyledTableCell>
            <StyledTableCell align="left">Loại khách sạn</StyledTableCell>
            <StyledTableCell align="left">Thành phố</StyledTableCell>
            <StyledTableCell align="left">Đại diện khách sạn</StyledTableCell>
            <StyledTableCell align="center">Sửa</StyledTableCell>
            <StyledTableCell align="center">Xóa</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="left">{row.type}</StyledTableCell>
              <StyledTableCell align="left">{row.city}</StyledTableCell>
              <StyledTableCell align="left">{row.boss}</StyledTableCell>
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
