import axios from 'axios';

const api = axios.create({
  baseURL: 'https://pixeltronic.info', // Replace with your server URL
});

export default api;
