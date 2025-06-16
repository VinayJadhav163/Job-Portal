import axios from './axios';

axios.defaults.baseURL = 'https://job-portal-x8r2.onrender.com/api/v1';
axios.defaults.withCredentials = true;

export default axios;
