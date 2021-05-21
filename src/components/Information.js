import React, {useEffect, useState} from 'react';
import {axios} from "../axios";
import "./css/List.css"
import {Table} from "reactstrap";
import {useStyles} from "./Table";

export default function Information() {
    const classes = useStyles();
    const [data, setData] = useState({
        userDetail: {
            nameUserDetail: '',
            birth: '',
            phoneNumber: ''
        }
    });
    const [reload, setReload] = useState(false);

    const getData = () => {
        const fetchData = async () => {
            await axios
                .get('/update-information')
                .then(function (res) {
                    console.log(res.data);
                    setData(res.data);
                    setReload(true);
                })
                .catch(function (err) {
                    console.log(err);
                })
        }
        fetchData();
    }

    useEffect(() => {
        getData();
    }, [reload]);

    return (
        <div>
            <div>
                <h2>Thông tin cá nhân</h2>
                <Table className={classes.table}>
                    <tr>
                        <th>Tên</th>
                        <td>{data.userDetail.nameUserDetail}</td>
                    </tr>
                    <tr>
                        <th>Ngày sinh</th>
                        <td>{data.userDetail.birth}</td>
                    </tr>
                    <tr>
                        <th>Số điện thoại</th>
                        <td>{data.userDetail.phoneNumber}</td>
                    </tr>
                    <tr>
                        <th>Email</th>
                        <td>{data.email}</td>
                    </tr>
                </Table>
            </div>
        </div>
    )
}
