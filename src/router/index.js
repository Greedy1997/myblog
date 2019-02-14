import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/home.vue'
import tag from '@/pages/tag/tag.vue'
// @符号指的就是src这个根目录

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/tag',
      name: 'tag',
      component: tag
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
