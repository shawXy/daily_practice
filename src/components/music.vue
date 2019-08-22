<template>
<div>
  <p>这是音乐展示内容</p>

  <router-link to="/music/rb" tag="span">R&B</router-link>
  <router-link to="/music/pop" tag="span">Popular</router-link>
  <router-link to="/music/rap" tag="span">Rap</router-link>

<div>
  <router-view></router-view>
</div>
</div>
</template>

<script>
export default {

}
</script>

<style lang='less' scoped>
span{
  padding: 0 10px;
  &.router-link-active{
    color: #87ceed;;
  }
}
</style>
