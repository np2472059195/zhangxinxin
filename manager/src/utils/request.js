import axios from "axios";
const service = axios.create({
  baseURL:"http://127.0.0.1:7001/",
  timeout:5000
})
service.interceptors.request.use(
  config => {
    return config
  },
  error => {
    return Promise.reject(error)
  }
)
service.interceptors.response.use(
  response => response.data,
  error => {
    return Promise.reject(error)
  }
)
export default service