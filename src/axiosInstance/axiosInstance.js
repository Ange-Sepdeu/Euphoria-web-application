import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "http://localhost:192.168.",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    }
})

export default axiosInstance;