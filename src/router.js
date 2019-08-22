import Vue from 'vue/dist/vue'
import Router from 'vue-router'
import Home from './components/home.vue'
import Login from './components/login.vue'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/home', component: Home },
    { path: '/login', component: Login },
  ]
})
