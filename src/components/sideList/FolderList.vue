<template>
  <div class="folder-list" @click="showFolder(folderText)">
    <i :class="iconClass"></i>
    <div>
      <span>{{folderText}}</span>
      <span class="music-num">({{length}})</span>
    </div>
  </div>
</template>
<script>
  export default{
    name: 'folder-list',
    props:{
      iconClass: {
        type: String,
        default: ''
      },
      folderText: {
        type: String ,
        default: ''
      },
      length: {
        type: String,
        default: ''
      }
    },
    methods: {
      showFolder (folderText) {
        this.$emit('musicListDetail',folderText)
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped >
@import '../../commen/global.styl'
  .folder-list
    display: flex
    font-size:18px
    padding:10px 0
    [class*=icon]
      font-size:26px
      padding:0 10px
      color: $primarycolor
    .music-num
      color:#989898
</style>
