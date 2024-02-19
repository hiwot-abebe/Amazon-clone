import axios from "axios";
const axiosInstance = axios.create({
  baseURL: "https://amazon-api-dep.onrender.com",
});
export { axiosInstance }
