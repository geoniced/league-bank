import axios from "axios";

const BACKEND_URL = `https://free.currconv.com/api/v7`;
const REQUEST_TIMEOUT = 5000;
export const API_KEY = `a46e3b61f2928d77ce4a`;

export const createAPI = () => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
  });

  const onSuccess = (response) => response;

  const onFail = (err) => {
    throw err;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};
