<template>
<div>
<table>
  <tr>
    <td>序号</td>
    <td>姓名</td>
    <td>年龄</td>
  </tr>
  <tr v-for="item in students" :key="item.id">
    <td>{{item.id}}</td>
    <td @click="tip">{{item.name}}</td>
    <td>{{item.age}}</td>
  </tr>

</table>
</div>
</template>

<script>
export default {
  data(){
    return {
      students:[{id:1,name:'水娃',age:10},
      {id:2,name:'火娃',age:10},
      ]
    }
  },
  methods:{
    tip(){
      alert(1111)
      console.log(this.students)
    }
  },
  created(){
    console.log('the table is creating...')
  }
}
</script>

<style lang='less' scoped>
  table{
    border-collapse: collapse;
    border:1px solid pink;
  }
</style>
