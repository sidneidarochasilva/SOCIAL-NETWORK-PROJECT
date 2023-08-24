import axios from "axios";


const api = axios.create({
  baseURL: "https://dummyapi.io/data/v1",
  headers: { 'APP-ID': '64e125cf5a73b16652ff93e5'},
});

export default api;
