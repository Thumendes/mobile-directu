import axios from "axios";

const development = false;

const api = axios.create({
  baseURL: development
    ? "http://192.168.0.3:3001/"
    : "https://directu-backend.herokuapp.com/",
});

export default api;
