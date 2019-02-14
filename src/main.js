// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import './assets/styles/border.css'
import './assets/styles/iconfont.css'
import 'swiper/dist/css/swiper.css'
import './assets/styles/reset.css'
import './assets/styles/font.css'
import store from './store/index.js'
import iView from 'iview'
import 'iview/dist/styles/iview.css';

Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)
Vue.use(iView)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
