import Axios from "axios";

export const axios = Axios.create({
    baseURL: 'https://booking-hotel-server.herokuapp.com',
    // headers: {
    //     Authorization: `${localStorage.getItem('tokenType')} ${localStorage.getItem('accessToken')}`
    // },
    timeout: 5000
});
