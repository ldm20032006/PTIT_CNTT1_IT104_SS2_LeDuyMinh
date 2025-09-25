import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:8080", // thay bằng API server của bạn
  timeout: 10000,
});

// 👇 phải có dòng này thì mới import default được
export default axiosInstance;
