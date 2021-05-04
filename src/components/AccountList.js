import React, { useState } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';


const data = [
  {'name':'Frozen yoghurt','role': "Người dùng",'day': "22-5-2020",'quantity': "5",'status': 0},
   {'name':'Ice cream sandwich','role': "Đại diện khách sạn",'day': "17-4-2021",'quantity': "1",'status': 1},
    {'name':'Eclair','role': "Người dùng",'day': "30-4-2018",'quantity': "0",'status': 0},
    {'name':'Cupcake','role': "Đại diện khách sạn",'day': "19-10-2019",'quantity': "2",'status': 1},
    {'name':'Gingerbread','role': "Người dùng",'day': "15-9-2020",'quantity': "0",'status': 1},
  ];

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

  
const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});



export default function AccountList() {
  const classes = useStyles();
  
  const [rows,setRows] = useState(data);
  const [tric, setTric] = useState(0);
  
  console.log("a");
  const kiemTra = (x) => {
    if (x.status == 0) {
      return <Button
        variant="contained"
        color="secondary"
        className={classes.button}
        onClick={()=>{
          x.status = 1;
          setTric(tric+1);
        }}
      >
        Mở
</Button>
    }
    return <Button
      variant="contained"
      color="primary"
      className={classes.button}
      onClick={()=>{
        x.status = 0;
        setTric(tric+1);
      }}
    >
      Khóa
</Button>
  }


  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Tên chủ tài khoản</StyledTableCell>
            <StyledTableCell align="left">Vai trò</StyledTableCell>
            <StyledTableCell align="left">Ngày đăng ký</StyledTableCell>
            <StyledTableCell align="center">Số lượng bài đăng</StyledTableCell>
            <StyledTableCell align="center">Khóa/Mở Tài khoản</StyledTableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="left" >{row.role}</StyledTableCell>
              <StyledTableCell align="left">{row.day}</StyledTableCell>
              <StyledTableCell align="center">{row.quantity}</StyledTableCell>
              <StyledTableCell align="center">
                {kiemTra(row)}
              </StyledTableCell>


            </StyledTableRow>
          )

          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
