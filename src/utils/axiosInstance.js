// axiosInstance.js
import axios from 'axios';
import { API_BASE_URL } from '../config/Url';
import { LocalStorage } from './LocalStorage';

const axiosInstance = axios.create({
  baseURL: API_BASE_URL, // Replace with your API's base URL
  timeout: 10000, // 10 seconds timeout
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});


// Add a request interceptor
axiosInstance.interceptors.request.use(
 async (config) => {
    // You can add custom logic here, e.g., attach tokens
    const token = LocalStorage.getString('token'); // If key doesn't exist, returns undefined
    console.log('----accessToken--',token)
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Add a response interceptor
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle errors globally
    console.error('Error response:', error.response);
    return Promise.reject(error);
  }
);

export default axiosInstance;

