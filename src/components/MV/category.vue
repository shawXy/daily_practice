<template>
<div class="movie">
  <table>
    <thead>
      <tr>
        <th>id</th>
        <th>电影</th>
        <th>分类</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in res" :key="item.id">
        <td>{{item.id}}</td>
        <td>{{item.name}}</td>
        <td>{{item.category}}</td>
      </tr>
    </tbody>
  </table>
</div>
</template>

<script>
export default {
  created(){
    this.res = this.$route.query.array;
    // console.log(this.res)
  },
  data(){
    return {
      res:[]
    }
  }
}
</script>

<style lang='less' scoped>
  .movie{
    display: inline-block;
    text-align: center;
  }
  table{
    text-align: center;
  }
  td,th{
    padding: 0 20px;
  }
</style>
