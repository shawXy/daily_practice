<template>
<div id="father">
  <h2>我是父组件</h2>
  <com-son></com-son>

  <com-son yanse="red"></com-son>
  <com-son yanse="orange"></com-son>
  <com-son yanse="yellow"></com-son>
  <com-son yanse="green"></com-son>


  <!--父子组件传值-->
</div>
</template>

<script>
import Son from './son'
export default {
  components:{
    'com-son':Son
  }
}
</script>

<style lang='less' scoped>

</style>
