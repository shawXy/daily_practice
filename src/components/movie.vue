<template>
<div class="mv">
  <!-- 路由传参 ：数组对象传参-->
  <p><router-link :to="{path:'/movie/mvcate',query:{array:detail}}">显示电影分类</router-link></p>
  <!-- 补充：单个参数传值
  main.js path:/movie/mvcate/:id
  category.vue  $route.params.id
  <p><router-link :to="`/movie/mvcate/${detail[0].id}`">这是电影展示内容</router-link></p> -->
  <div class="cate">
    <router-view></router-view>
  </div>
  <!-- 返回上级$route.back() -->
  <button @click="$router.push('/home')">返回首页</button>
</div>
</template>

<script>
export default {
created(){
    this.getData();

  },
  methods:{
    getData(){
     this.detail =  [
       {id:1,name:'魔童降世',category:'动画电影'},
        {id:2,name:'三杆大烟枪',category:'欧美电影'},
        {id:3,name:'釜山行',category:'日韩电影'},
        {id:4,name:'我不是药神',category:'国产电影'}
        ]
        // console.log(this.detail)
    }
  },
  data(){
    return{
      detail:[]
    }
  }
}
</script>

<style lang='less' scoped>

</style>
