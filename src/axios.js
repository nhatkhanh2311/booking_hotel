import Axios from "axios";

export const axios = Axios.create({
    baseURL: "https://booking-hotel-server.herokuapp.com/api/auth",
    timeout: 3000
});
