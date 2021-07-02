import axios from 'axios'
import auth from '@/util/index'
import router from '@/router/index'
const basePath = 'http://123.182.234.124:11601/jmgc-cbs-upgrade'
// axios 配置
var instance = axios.create({
  headers:{
      'Content-Type': 'application/json',
  },
  timeout: 30000,
  baseURL: basePath,   //接口请求地址
})
// instance.defaults.baseURL = window.basePath;
instance.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  // const user = auth.getUser()
  // if (user.token) config.headers.Authorization = `Bearer ${user.token}`
  // //必须项 
  return config;
}, function (error) {
  // 对请求错误做些什么
  //必须项
  return Promise.reject(error);
});
instance.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  return response;
}, function (error) {
  // 对响应错误做点什么
  if (error.response && error.response.status === '401') {
    router.push('/login')
  }
  return Promise.reject(error);
});
// export default instance;
export function post (url, data = {}) {
  return new Promise((resolve, reject) => {
    instance.post(url, data).then(response => {
      //对接口错误码做处理
      resolve(response.data);
    }, err => {
      reject(err);
    })
  })
}