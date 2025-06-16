import axios from 'axios';

axios.defaults.baseURL = '/api/v1';  // Relative path because same domain
axios.defaults.withCredentials = true;

export default axios;
