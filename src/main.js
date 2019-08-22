// webstorage以及路由守卫

// 导入vue
import Vue from 'vue/dist/vue'
// 导入路由
import router from './router'
// 导入App.vue
import App from './App.vue'
router.beforeEach(function(to, from, next) {
  console.log(from)
  console.log(to)
    // next():表示放行，没有特殊情况一定要执行next()
    // next('其他锚点信息')：执行其他路由
    // next(false)：停止
  var token = window.sessionStorage.getItem('token')
  if (!token && to.path != '/login') {
    return next('/login')
  }
  next()
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
