<template>
  <div id="app">
  <audio id="myaudio" ref="audio" @timeupdate="musicTimeUpdate" @error="error"></audio>
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
