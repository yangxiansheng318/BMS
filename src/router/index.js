import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/login/Login.vue'
import Home from '@/pages/home/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    }
  ]
})
