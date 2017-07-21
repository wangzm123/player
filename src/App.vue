<template>
  <div id="app">
  <header-top></header-top>
   <side></side>
  <router-view></router-view>
   <bottom-list></bottom-list>
  <bottom></bottom>
 
    <!--顶部-->
    <!--侧边栏-->
    <!--底部播放列表-->
    <!--底部-->
  </div>
</template>

<script>
import HeaderTop from './components/header'
import Bottom from './components/bottom'
import Side from './components/side'
import BottomList from './components/bottomList'
export default {
  name: 'app',
  components: {HeaderTop, Bottom, Side, BottomList}
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import "./commen/font-icon/style.css"

body,html
  margin:0
  padding:0
  box-sizing:border-box
  background:#f0f0f0f0
  user-select:none
  -webkit-tap-highlight-color: transparent
  padding-top:50px;
  box-sizing:border-box;
#app
  font-family: 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  color: #2c3e50
</style>
