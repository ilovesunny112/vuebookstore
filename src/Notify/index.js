import notify from './notify'

let notifyPlugin = {

}
notifyPlugin.install = function (Vue, options) {
  Vue.prototype.$notify = function (msg) {
    let V = Vue.extend(notify)
    let vm = new V()
    var oDiv = document.createElement('div')
    document.body.appendChild(oDiv)
    vm.msg = msg
    vm.$mount(oDiv)

    window.setTimeout(() => {
      vm.show = false
      window.setTimeout(() => {
        document.body.removeChild(vm.$el)
      }, 600)
    }, 1000)
  }
}

export default notifyPlugin
