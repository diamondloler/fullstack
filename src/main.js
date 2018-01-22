// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import 'babel-polyfill'
import App from './App'
import Router from './route.config'
import element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './common/common.css'
import DZ from './directive/niupi'
import dzInput from './dz/dz-input.vue'
import dzRadio from './dz/dz-radio.vue'
import dzCollapse from './dz/dz-collapse.vue'
import dzCollapseItem from "./dz/dz-collapse-item";
import dzSelect from "./dz/dz-select";
import dzOption from "./dz/dz-option";
Vue.use(element);
Vue.use(DZ, {
  bitch: '陈老师',
  callback: true
})
Vue.component('dz-input', dzInput)
Vue.component('dz-radio', dzRadio)
Vue.component('dz-collapse', dzCollapse)
Vue.component('dz-collapse-item', dzCollapseItem)
Vue.component('dz-select', dzSelect)
Vue.component('dz-option', dzOption)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: {
    App
  },
  router: Router
})
