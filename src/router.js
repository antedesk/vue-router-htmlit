import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home.vue'
import Data from './components/Data.vue'
import About from './components/About.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/data/:name',
      name: 'data',
      component: Data
    },
    {
      path: '/about',
      name: 'about',
      component: About
    }
  ]
})