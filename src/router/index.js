import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import search from '@/view/search/index.vue'
import login from '@/view/login/index.vue'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'search',
      component: search
    },
    {
      path: '/login',
      name: 'login',
      component: login
    }
  ]
})
export default router
