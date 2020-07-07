import axios from "axios";

export const instance = axios.create({
  baseURL: "https://timer-server-jm.herokuapp.com",
});

export default instance;
