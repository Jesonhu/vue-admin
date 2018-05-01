import fetch from '@/config/fetch';

/**
 * 登录处理
 * 
 * @param {string} username 登录提交的用户名
 * @param {string} password 登录提交的密码
 * @return {}
 */
export const login = (username, password) => {
  return fetch({
    url: '/user/login',
    method: 'post',
    data: {
      username,
      password
    }
  })
}

/**
 * 登出处理
 */
export const logout = () => fetch({url: '/user/logout', method: 'post'});

/**
 * 获取用户信息
 */
export const getInfo = (token) => fetch({ url: '/user/info', method: 'get', params: {token} });