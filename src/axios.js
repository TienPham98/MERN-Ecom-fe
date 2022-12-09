import axios from "axios";

const instance = axios.create({
  baseURL: "https://mern-ecom-app-api.onrender.com",
});

export default instance;
