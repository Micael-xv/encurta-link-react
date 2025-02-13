import axios from 'axios';

export const key = "077f4d7f552d1db049dcc24bc07c44305c8adba3";

const api = axios.create({
  baseURL: 'https://api-ssl.bitly.com/v4',
  headers: {
    'Authorization': `Bearer ${key}`,
  }
})

export default api;
