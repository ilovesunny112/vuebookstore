import Vue from 'vue'
import notify from './notify'

Vue.aaaaa = 1
let notifyPlugin = {

}
notifyPlugin.install = function (Vue, options) {
  console.log(Vue)

  Vue.prototype.$notify = function () {
    notify.init()
  }
}

export default notifyPlugin
