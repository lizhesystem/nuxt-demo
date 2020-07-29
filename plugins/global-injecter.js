import Vue from 'vue'
import baseComponentRegister from '~/components/base-component-register'
import elComponentsRegister from '~/components/el-components-register'
import '~/assets/scss/element-variables.scss' // elementUI 自定义主题色
import utils from '~/utils/utils'

/**
 * 注册全局公共组件插件
 */
Vue.use(baseComponentRegister)
Vue.use(elComponentsRegister)

/**
 *  注册全局filter
 */
// Vue.filter('formatTime', f => utils.formatTime(f))

// 导出 inject 注入后可以使用this.$xxx来调用
export default (context, inject) => {
  inject('utils', utils)
}
