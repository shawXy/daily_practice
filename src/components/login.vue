<template>
<div class="login">
  <h3>请登录</h3>
  <label for="username">用户名：</label>
  <input type="text" name="username" id="username" v-model="username">
  <br>
  <label for="password">密码：</label>
  <input type="password" name="psd" id="password" v-model="password">
  <br>
  <button @click="login">登录</button>
</div>
</template>

<script>
export default {
data(){
  return {
    username:'',
    password:''
  }
},
methods:{
  login(){
    if(this.username&&this.password){
      window.sessionStorage.setItem('token','hello')
      this.$router.push('/home')
    }
  }
}
}
</script>

<style lang='less' scoped>

</style>
