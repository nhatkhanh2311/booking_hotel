import React from "react";
import {makeStyles, withStyles} from "@material-ui/core/styles";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";

export const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: 'rgb(5, 24, 43)',
        color: theme.palette.common.white
    },
    body: {
        fontSize: 14
    }
}))(TableCell);

export const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover
        }
    }
}))(TableRow);

export const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: '100%',
        backgroundColor: theme.palette.background.paper
    },
    table: {
        minWidth: 700
    },
    addButton: {
        marginLeft:'90%',
        marginBottom: '20px'
    }
}));
