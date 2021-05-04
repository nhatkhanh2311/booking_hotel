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

function createData(name, role, day, quality) {
  return { name, role, day, quality };
}

const rows = [
  createData('Frozen yoghurt', "Người dùng", "22-5-2020", "5"),
  createData('Ice cream sandwich', "Đại diện khách sạn", "17-4-2021", "1"),
  createData('Eclair', "Người dùng", "30-4-2018", "0"),
  createData('Cupcake', "Đại diện khách sạn", "19-10-2019", "2"),
  createData('Gingerbread', "Người dùng", "15-9-2020", "0"),
];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function AccountList() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Tên chủ tài khoản</StyledTableCell>
            <StyledTableCell align="left">Vai trò</StyledTableCell>
            <StyledTableCell align="left">Ngày đăng ký</StyledTableCell>
            <StyledTableCell align="center">Số lượng bài đăng</StyledTableCell>
            <StyledTableCell align="center">Khóa Tài khoản</StyledTableCell>
            <StyledTableCell align="center">Mở khóa</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="left">{row.role}</StyledTableCell>
              <StyledTableCell align="left">{row.day}</StyledTableCell>
              <StyledTableCell align="center">{row.quality}</StyledTableCell>
              <StyledTableCell align="center">
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.button}

                >
                  Khóa tài khoản
      </Button>
              </StyledTableCell>
              <StyledTableCell align="center">
                <Button
                  variant="contained"
                  color="secondary"
                  className={classes.button}

                >
                  Mở khóa   
      </Button>
              </StyledTableCell>

            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
