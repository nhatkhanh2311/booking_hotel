import React from 'react';
import {withStyles, makeStyles} from '@material-ui/core/styles';
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

function createData(name, type, day, nameType) {
    return { name, type, day, nameType };
}

const rows = [
    createData('Frozen yoghurt', "Khách sạn", "22-5-2020", "Hotel Phú Bài"),
    createData('Ice cream sandwich', "Phòng", "17-4-2021", "108"),
    createData('Eclair', "Khách sạn", "30-4-2018", "Hotel Bình Minh"),
    createData('Cupcake', "Phòng", "19-10-2019", "109"),
    createData('Gingerbread', "Khách sạn", "15-9-2020", "Nhà nghỉ An Nhiên"),
];

const useStyles = makeStyles({
    table: {
        minWidth: 700,
    },
});

export default function PostRequest() {
    const classes = useStyles();

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Tên người đăng</StyledTableCell>
                        <StyledTableCell align="left">Loại</StyledTableCell>
                        <StyledTableCell align="left">Ngày đăng</StyledTableCell>
                        <StyledTableCell align="left">Tên khách sạn/ Mã phòng</StyledTableCell>
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
                            <StyledTableCell align="left">{row.type}</StyledTableCell>
                            <StyledTableCell align="left">{row.day}</StyledTableCell>
                            <StyledTableCell align="left">{row.nameType}</StyledTableCell>
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
