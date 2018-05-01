import { login, logout, getInfo } from '@/config/api/login';
import { getToken, setToken, removeToken } from '@/utils/auth';

const user = {
  state: {
    token: getToken(),
    name: '',
    avatar: '',
    roles: []
  },

  actions: {
    // 登录
    Login({commit}, userInfo) {
      const username = userInfo.username.trim();
      return new Promise((resolve, reject) => {
        login(username, userInfo.password).then(response => {
          const data = response.data;
          setToken(data.token);
          commit('SET_TOKEN', data.token);
          resolve();
        }).catch(error => {
          reject(error);
        })
      });
    },

    // 获取用户信息
    GetInfo({commit, state}) {
      return new Promise((resolve, reject) => {
        getInfo(state.token).then((res) => {
          const data = res.data;
          commit('SET_ROLES', data.roles);
          commit('SET_NAME', data.name);
          commit('SET_AVATAR', data.avatar);
          resolve(res);
        }).catch(err => {
          reject(err);
        });
      });
    },

    // 登出
    LogOut({commit, state}) {
      return new Promise((resolve, reject) => {
        logout(state.token).then(() => {
          commit('SET_TOKEN', '');
          commit('SET_ROLES', []);
          removeToken();
          resolve();
        }).catch(err => {
          reject(err);
        });
      });
    },

    // 前端登出(异地登录)
    FedLogOut({commit}) {
      return new Promise((resolve, reject) => {
        commit('SET_TOKEN', '');
        removeToken();
        resolve();
      });
    }
  },

  mutations: {
    // 设置 token
    SET_TOKEN: (state, token) => {
      state.token = token;
    },
    // 设置用户名
    SET_NAME: (state, name) => {
      state.name = name;
    },
    // 设置头像图标
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar;
    },
    // 设置权限
    SET_ROLES: (state, roles) => {
      state.roles = roles;
    }
  }
}

export default user;