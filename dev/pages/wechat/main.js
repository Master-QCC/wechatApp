// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/index'

import 'swiper/dist/css/swiper.min.css'
import 'iview/dist/styles/iview.css'
import '@/less/index.less'
import VTooltip from 'v-tooltip'

Vue.use(VTooltip)
// import iView from 'iview'
// Vue.use(iView)

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
