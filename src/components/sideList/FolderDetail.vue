<template>
  <div class="folder-detail"  v-show="isShow">
    <div class="folder-top">
      <i class="icon-back" @click="backlist"></i>
      <div class="folderText">{{folderText}}</div>
      <i class="icon-search"></i>
    </div>
    <div class="music-content">
      <ul>
        <li class="music-list" v-for="(item, index) in musicList" @click="playMusic(index)">
          <p>{{item.name}}</p>
          <p class="singermes">{{item.singer}}-{{item.type}}</p>
          </li>
      </ul>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'folderDetail',
    data () {
      return {
        showFolderDetail: false
      }
    },
    props: {
      isShow: {
        type: Boolean,
        default: false
      },
      folderText: {
        type: String,
        default: ''
      },
      musicList: {
        type: Array,
        default: []
      }
    },
    mounted () {
      this.showFolderDetail = this.folderShow
    },
    methods : {
      backlist () {
        this.$emit('backList')
      },
      playMusic (index) {
        console.log(index)
       this.$store.dispatch('play_Music_Index',index)
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
@import '../../commen/global.styl'
 .folder-detail
  position:fixed
  top:0px
  background:#fff
  width:100%
  height:100%
  z-index:19
  box-sizing:border-box
  .folder-top
    display:flex
    color:#fff
    background:$primarycolor
    height:50px
    font-size:16px
    align-items: center
    .icon-back, .icon-search
      font-size:24px
      padding: 0 10px
    .folderText
      flex:1 1 auto
  .music-content
    font-size:14px
    height:100%
    overflow:auto
    .music-list
      padding:3px 15px
      overflow:auto
      p
        margin:0px
        &:last-child
          border-bottom:1px solid #f3f0f0
          padding-bottom:6px
      .singermes
        font-size:12px
        color:#ccc


</style>
