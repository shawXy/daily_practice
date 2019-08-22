import Vue from 'vue' //现在使用render成员了，就要更换为vue，其代表 vue/dist/vue.runtime.common.js
import App from './App.vue'
// import router from './router'
// 1、引入路由模块
import VueRouter from 'vue-router'

// 2、注册router
Vue.use(VueRouter)
  // Vue.config.productionTip = false

// 3、导入各个业务模块
import Home from './components/home'
import Movie from './components/movie'

import Category from './components/MV/category.vue'

import Music from './components/music'

import RB from './components/MUS/R&B.vue'
import Pop from './components/MUS/popular.vue'
import Rap from './components/MUS/rap.vue'


// 4、创建路由对象
var router = new VueRouter({
  routes: [
    // 重定向
    { path: '/', redirect: '/home' },
    { path: '/home', component: Home },
    {
      path: '/movie',
      component: Movie,
      children: [
        { path: '/movie/mvcate', component: Category }
      ]
    },
    {
      path: '/music',
      component: Music,
      // redirect: RB,
      redirect: '/music/rb',
      children: [
        { path: '/music/rb', component: RB },
        { path: '/music/pop', component: Pop },
        { path: '/music/rap', component: Rap }
      ]
    }
  ]
})


new Vue({
  // 挂在路由，使得各个应用都有路由功能
  router,
  components: {

  },

  render: h => h(App)
}).$mount('#app')
