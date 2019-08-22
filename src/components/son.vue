<template>
<div id="son">
  <!--<h3>我是子组件</h3>-->
  <p :style="{color:'white',background:yanse}">看我变色</p>
</div>
</template>

<script>
export default {
  props:['yanse']
}
</script>

<style lang='less' scoped>

</style>
