import axios from 'axios';

export const axiosInstance = axios.create({ baseURL: 'http://192.168.200.156:8000' });