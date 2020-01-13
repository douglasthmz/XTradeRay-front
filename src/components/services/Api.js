import axios from 'axios';

const api = axios.create({baseURL: 'https://xtraderay-server.herokuapp.com'});


export default api;