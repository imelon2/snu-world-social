import axios from 'axios';
const BASE_URL: any = 'http://localhost:8080/';

const baseAPI = (url: string) => {
  return axios.create({
    baseURL: url,
  });
};

export const baseApi = baseAPI(BASE_URL);
