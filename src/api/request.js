import axios from "axios";
import nprogress from "nprogress";
import "nprogress/nprogress.css";
const requests = axios.create({
  // baseURL: "http://gmall-h5-api.atguigu.cn/api",
  baseURL: "/api",
  timeout: 1000,
});

nprogress.inc(0.2);
nprogress.configure({easing:'ease',speed:2000,showSpinner:false,trickle:false})

requests.interceptors.request.use((config) => {
  nprogress.start();
  return config;
  // return res.data;
});

requests.interceptors.response.use(
  (res) => {
    nprogress.done();
    return res.data;
  },
  (error) => {
    return Promise.reject(new Error("faile"));
  }
);
export default requests;
