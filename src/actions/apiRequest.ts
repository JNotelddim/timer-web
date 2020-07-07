import axios from "axios";

export const instance = axios.create({
  // baseURL: "http://localhost:3000",
  baseURL: "https://timer-server-jm.herokuapp.com",
});

export default instance;
