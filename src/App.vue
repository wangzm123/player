<template>
  <div id="app">
  <audio id="myaudio" ref="audio" @timeupdate="musicTimeUpdate" @error="error"></audio>
   <!--顶部-->
   <transition name="fade-loading">
    <div v-if="isLoading" class="loading">
     <img src="./assets/images/loadings.gif">
     <div class="loadingmask"></div>
    </div>
    </transition>
  <header-top></header-top>
   <!--侧边栏-->
   <side></side>
  <router-view></router-view>
  <!--底部播放列表-->
   <bottom-list></bottom-list>
   <!--底部-->
  <bottom></bottom>
  <!--音乐播放详情-->
  <music-detail></music-detail>
  </div>
</template>

<script>
import HeaderTop from './components/header'
import Bottom from './components/bottom'
import Side from './components/side'
import BottomList from './components/bottomList'
import MusicDetail from'./components/musicDetail'
import store from './store'
import Individuality from './components/Recommend/personalRecom'
import Individualities from './components/Recommend/individuality'
import FoodSide from './components/Recommend/foodSide'
import FoodList from './components/Recommend/foodList'
import FoodDetail from './components/Recommend/foodDetail'
import { mapState } from 'vuex'
export default {
  name: 'app',
  components: {HeaderTop, Bottom, Side, BottomList, MusicDetail, Individualities, FoodSide, FoodList, FoodDetail},
  data () {
    return {

    }
  },
  computed: {
    ...mapState({
      isLoading: 'isLoading'
    })
  },
  mounted () {
    store.dispatch('get_AllMusic')
    this.$refs.audio.setAttribute('src', store.getters.getCurrentMusic.url)
    store.dispatch('set_AudioElement', this.$refs.audio)
  },
  methods:{
    musicTimeUpdate () {
      store.dispatch('current_Time',this.$refs.audio)
      store.dispatch('buffer_Range',this.$refs.audio.buffered)
    },
    error () {
     store.dispatch('pause_Play_Music')
     store.dispatch({
        type:'play_Prev',
        payload:{
           playType:this.$store._modules.root.state.bottomList.cycleType,
           isNext:true
        }
     })
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import "/static/font-icon/style.css"

body,html
  margin:0
  padding:0
  box-sizing:border-box
  background:#f0f0f0f0
  user-select:none
  -webkit-tap-highlight-color: transparent
  box-sizing:border-box;
  padding-top:0
body
  padding-top:50px
  padding-bottom: 50px
ul
  list-style: none;
  margin: 0;
  padding: 0;
#app
  font-family: 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  color: #2c3e50
.loading
  position:fixed;
  width:100%
  height:100%
  border:1px solid #f00
  z-index:100
  top:0
  box-sizing: border-box
  img
    width:200px
    z-index:120
    position:absolute
    top: 35%
    left: 50%
    opacity:0.8
    margin-left: -100px
  .loadingmask
    background:#000
    opacity:0.2
    width:100%
    height:100%
    top:0
    position:absolute
    z-index:110
.fade-loading-enter-active,
  transition: all 1s ease
.fade-loading-leave-active
  transition: all 0.2s ease
.fade-loading-enter, .fade-loading-leave-to
  opacity:0
.fade-loading-enter-to, .fade-loading-leave
  opacity:0.2
</style>
