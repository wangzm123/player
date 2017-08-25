<template>
  <div class="side-list">
    <router-link tag="div" :to="link">
    <div class="sidelist-container">
      <i class="list-icon" :class="iconClass"></i>
      <span class="side-text">{{sideText}}</span>
      <div class="right-text" v-html="disc"></div>
    </div>
    </router-link>
  </div>
</template>
<script>
  export default{
    name:'sideLIst',
    props:{
      iconClass:{
       type: String,
        default: ''
      },
      sideText:{
        type: String,
        default: ''
      },
      disc:{
        type: String,
        default: ''
      },
      link:{
        type: String,
        default: 'music'
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" >
.side-list
  .sidelist-container
    display:flex
    padding:10px 0px
    font-size:16px
    .list-icon
      font-size:22px
      padding:0 10px
    .side-text
      flex:1 1 auto
    .right-text
       padding-right:10px
      .message-num
          background:#f00
          color:#fff
          display:inline-block
          width:20px
          height:20px
          border-radius:50%
          text-align:center
          line-height: 20px
   div
     &.router-link-active
      color:#fff
      background:#ccc
</style>
