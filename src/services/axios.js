import axios from 'axios'

const axiosIntance = axios.create({
    baseURL: 'http://localhost:5050'
});

export default axiosIntance;