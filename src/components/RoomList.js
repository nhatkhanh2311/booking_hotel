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
import { TextareaAutosize } from '@material-ui/core';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';


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
  addButton:{
    marginLeft:'90%',
    marginBottom: '20px'
  },
});

export default function RoomList(props) {
  const classes = useStyles();
  const rows = props.data;
  return (
    <TableContainer component={Paper}>
      <Fab color="primary" aria-label="add" className={classes.addButton} >
        <AddIcon />      
      </Fab>
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
