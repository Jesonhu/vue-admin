/**
 * Created by Jesonhu on 18/04/16 
 */

/**
 * str是否包含 'admin' 或 'editor'
 * 
 * @param {string} str
 * @return {boolean} str是否包含 'admin' 或 'editor'
 * 包含返回true; 否则返回false
 */
export const isvalidUsername = (str) => {
  const valid_map = ['admin', 'editor'];
  return valid_map.indexOf(str.trim()) >= 0;
}

/**
 * 合法url
 * 
 * @param {string} textval
 * @return {boolean} 是否是合法的url
 */
export const validateURL = (textval) => {
  const urlregexp = /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/;
  return urlregexp.test(textval);
}

/**
 * 小写字母 
 *
 * @param {string} str
 * @return {boolean}
 */
export const validateLowerCase = (str) => {
  const reg = /^[a-z]+$/;
  return reg.test(str);
}

/**
 * 大写字母
 * 
 * @param {string} str
 * @return {boolean}  
 */
export const validateUpperCase = (str) => {
  const reg = /^[A-Z]+$/;
  return reg.test(str);
}

/**
 * 大小写字母 
 * 
 * @param {string} str
 * @return {boolean} 
 */
export const validateAlphabets = (str) => {
  const reg = /^[a-zA-z]+$/;
  return reg.test(str);
}