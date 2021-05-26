import Axios from "axios";

export const axios = Axios.create({
    baseURL: 'https://hotels-booking-server.herokuapp.com',
    timeout: 5000
});

axios.interceptors.request.use(
    async (config) => {
        config.headers.Authorization = `${localStorage.getItem('tokenType')} ${localStorage.getItem('accessToken')}`;
        return config;
    }
);
