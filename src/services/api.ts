import axios from 'axios';

const api = axios.create({
  baseURL: 'https://my-json-server.typicode.com/rayanaprata/demo/produtos'
})

export default api;