import axios from "axios";
import nprogress from "nprogress";
import "nprogress/nprogress.css";
const mockrequest = axios.create({
  // baseURL: "http://mockjs.com/dist/mock",
  baseURL: "/mock",
  timeout: 1000,
});

nprogress.inc(0.2);
nprogress.configure({easing:'ease',speed:2000,showSpinner:false,trickle:false})

mockrequest.interceptors.request.use((config) => {
  nprogress.start();
  return config;
  // return res.data;
});

mockrequest.interceptors.response.use(
  (res) => {
    nprogress.done();
    return res.data;
  },
  (error) => {
    return Promise.reject(new error("faile"));
  }
);
export default mockrequest;
