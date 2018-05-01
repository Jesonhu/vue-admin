const Port = '8266';
const devHost = `//192.168.0.58`;
const proHost = '//xxx/';
// process.env.BASE_API来自于config/dev.env.js 和 config/prod.env.js 设置
const useHost = process.env.BASE_API; // 当前使用的域名前缀

/**
 * API 请求接口地址汇总
 */
export default {
  baseUrl: useHost
}
