import React, {useState} from "react";
import {Grid, TextField, Form, Button, makeStyles, TextareaAutosize} from '@material-ui/core';
import  './css/InformationUpdate.css';

const useStyle = makeStyles(theme => ({
    root: {
        '& .MuiFormControl-root': {
            width: '80%',
            margin: theme.spacing(1)
        }
    }
}));

export default function InformationUpdate() {
    const classes = useStyle();

    return (
        <div className="update">
            <form onSubmit className={classes.root}>
                <Grid container className="test">
                    <Grid item xs={6}>
                        <TextField
                            name="Name"
                            label="Nhập tên"
                            variant="outlined"
                            required
                        />

                        <TextField
                            label="nhập địa chỉ Email"
                            name="Email"
                            type="email"
                            variant="outlined"
                            required
                        />

                        <TextField
                            label="Nhập mật khẩu"
                            name="passWord"
                            variant="outlined"
                            required
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            id="date"
                            label="Birthday"
                            type="date"
                            defaultValue="2017-05-24"
                            variant="outlined"
                        />

                        <TextField
                            label="Mobile"
                            name="mobile"
                            variant="outlined"
                            type="number"
                            required
                        />

                        <TextField
                            label="Nhập mô tả"
                            name="describe"
                            variant="outlined"
                        />

                        <br/>

                        <Button variant="contained" color="primary" type="submit">
                            Chỉnh sửa
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </div>
    )
}
