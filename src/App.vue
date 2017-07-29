<template>
  <div id="app">
    <ul>
      <li><router-link to='/homes'>主页</router-link></li>
      <li><router-link to='/news'>新闻</router-link></li>
      <li><router-link to='/vadio'>视频</router-link></li>
      <li><router-link to='/login'>登陆</router-link></li>
    </ul>
    <transition enter-active-class='animated zoomInLeft'>
    <router-view></router-view></transition>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: '你好呀帅哥！'
    }
  }
}
</script>

<style scoped>
*{margin:0px;padding:0px;text-decoration:none;}
li,ul{list-style:none;}
li{float:left;margin:20px;}
ul:after{content:'';display:block;clear:both;}
.router-link-active{color:red;font-size:20px;}
</style>
