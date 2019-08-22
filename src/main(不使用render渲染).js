import Vue from 'vue/dist/vue.min.js'
// import App from './App.vue'
// import router from './router'

// Vue.config.productionTip = false

/* // 默认导入
import obj from './test1.js'
console.log(obj)

// 按需导入
import { a, test } from './test1.js'
console.log(a, test)

// 默认导入和按需导入同时
import obj1, { a as b, test as test1 } from './test1'
console.log(obj1, b, test1)
//默认导入在前，按需导入在后

//没有导出的文件:css.js等
import ’文件‘
*/

import Test from './components/test.vue'
// import { from } from 'zen-observable';


import Table from './components/table.vue'
//父子嵌套组件
import Father from './components/father.vue'
new Vue({
  // router,
  components: {
    'com-test': Test,
    'com-table': Table,
    'com-father': Father
      // 单页组件
      // 'com-page': {
      //   template: `<ul>
      //   <li>1</li>
      //   <li>2</li>
      //   <li>3</li>
      //   </ul>`
      // }
  }
  // render: h => h(App)
}).$mount('#app')
