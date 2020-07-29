import { Input, Button, Select, Option, Link, Notification, Message } from 'element-ui'

export default {
  install(Vue) {
    Vue.use(Input)
    Vue.use(Select)
    Vue.use(Option)
    Vue.use(Button)
    Vue.use(Link)
    Vue.prototype.$message = Message
    Vue.prototype.$notify = Notification
  },
}
