import axios from 'axios';
import host from './host';
import store from '../store';
import { Message, MessageBox } from 'element-ui';
import { getToken } from '@/utils/auth';

const duration = {
  LONG_TIME: 5,
  MIDDLE_TIME: 3,
  SHORT_TIME: 1.5
}

// 创建 axios 实例
const service = axios.create({
  baseURL: host.baseUrl,
  timeout: 15000 // 请求超时时间
});

// request 拦截器
service.interceptors.request.use((config) => {
  if (store.getters.token) {
    config.headers['X-Token'] = getToken(); // 让每个请求携带自定义token 请根据实际情况自行修改
  }
  return config;
}, (error) => {
  // Do something with request error
  Promise.reject(error);
});

// response 拦截器
service.interceptors.response.use((response) => {
  /**
   * code 为非20000是抛错，可结合自己业务修改 
   */
  const OK_CODE = 20000;
  const res = response.data;
  if (res.code !== OK_CODE) {
    Message({
      message: res.message,
      type: 'error',
      duration: 5 * 1000
    });
  
    const ILLEGAL_TOKEN = 50008; // 非法的token
    const OTHER_LOGIN = 50012; // 其他客户端登录了
    const TIMEOUT_TOKEN = 50014; // token过期了

    if (res.code === ILLEGAL_TOKEN || res.code === OTHER_LOGIN || TIMEOUT_TOKEN) {
      Message.confirm('你已被登出，可以取消继续留在该页面，或者重新登录', '确定登出', {
        confirmButtonText: '重新登录',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        store.dispatch('FedLogOut').then(() => {
          location.reload(); // 为了重新实例化vue-router对象，避免bug
        });
      });
    }
    return Promise.reject('error');
  } else {
    return response.data;
  }
}, (error) => {
  if (true) console.log(`err${error}`); // for debug
  Message({
    message: error.message,
    type: 'error',
    duration: duration.MIDDLE_TIME * 1000
  });
  return Promise.reject(error);
});

export default service;