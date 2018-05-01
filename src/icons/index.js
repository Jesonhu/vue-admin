import Vue from 'vue'
import SvgIcon from '@/components/SvgIcon'// svg组件

// register globally
Vue.component('svg-icon', SvgIcon)

const requireAll = requireContext => requireContext.keys().map(requireContext)

/**
 * @param {} directory：说明需要检索的目录
 * @param {} useSubdirectories：是否检索子目录
 * @param {} regExp: 匹配文件的正则表达式
 */
const req = require.context('./svg', false, /\.svg$/)
requireAll(req)

/**
 * 参考资料
 * [webpack去中心化管理](https://www.v2ex.com/t/359380)
 * [svg使用](http://www.runoob.com/svg/svg-inhtml.html)
 * [未来必热：SVG Sprite技术介绍](http://www.zhangxinxu.com/wordpress/2014/07/introduce-svg-sprite-technology/)
 * [webpack-svg-sprite](https://blog.csdn.net/zb0567/article/details/77987727)
 * [坑处理1](https://blog.csdn.net/github_35631540/article/details/78818919)
 */
