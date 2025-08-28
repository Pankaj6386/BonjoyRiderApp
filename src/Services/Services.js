import axios from 'axios';
import axiosInstance from '../utils/axiosInstance';

export const Call_PostServices = (url, payload) => {
  return axios
    .post(url, payload)
    .then(res => res.data)
    .catch(err => err.response);
};

export const Call_ResetPassServices = (url, payload) => {
  return axios
    .put(url, payload)
    .then(res => res.data)
    .catch(err => err);
};

export const Call_GetListServices = url => {
  return axiosInstance
    .get(url)
    .then(res => res.data)
    .catch(err => err);
};

export const Call_InstancePostServices = (url, payload) => {
  return axiosInstance
    .post(url, payload)
    .then(res => res.data)
    .catch(err => err.response);
};


export const Call_MediaUploadServices = (url, payload) => {
  console.log('-----services screen -----',url, '-------',payload)
  return axiosInstance
    .post(url, payload,{
      headers: {
        'Content-Type': 'multipart/form-data',
      }})
    .then(res => res.data)
    .catch(err => err.config);
};


export const Call_InstancePutServices = (url, payload) => {
  return axiosInstance
    .put(url, payload)
    .then(res => res.data)
    .catch(err => err);
};