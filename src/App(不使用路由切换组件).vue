<template>
  <div id="app">
    <div id="nav">
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">Movie</router-link> |
      <router-link to="/about">Music</router-link> -->
      <a href="#/home">Home</a> |
      <a href="#/movie">Movie</a> |
      <a href="#/music">Music</a>
    </div>
    <div class="content">
      <component :is="show"></component>
    </div>
    <!-- <router-view/> -->
  </div>
</template>

<script>
import Home from './components/home'
import Movie from './components/movie'
import Music from './components/music'
export default {
  components:{
    'com-mv':Movie,
    'com-ms':Music,
    'com-hm':Home
  },
  data(){
    return {
      show:'com-hm'
    }
  },
  created(){
    window.onhashchange=()=>{
    let anchor = window.location.hash;
    // console.log(anchor)
    if(anchor=='#/movie'){
      this.show = 'com-mv'
    }else if(anchor=='#/music'){
      this.show = 'com-ms'
    }else{
      this.show = 'com-hm'
    }
    }

  }

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
  }
}
</style>
