<template>
  <div id="app">
    <div id="nav">
     <router-link to="/home">Home</router-link> |
      <router-link to="/movie">Movie</router-link> |
      <router-link to="/music">Music</router-link>
    </div>
    <div class="content">
      <!-- <component :is="show"></component> -->
      <router-view></router-view>
    </div>
    <!-- <router-view/> -->
  </div>
</template>

<script>

export default {

}
</script>



<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
    &.router-link-active{
      color: #42b983;
    }
  }
}
</style>
