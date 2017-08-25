<template >
    <div  class="sidebar">
        <transition   name="slideLeft">
            <div v-show="getIsShow" class="left-container">
            <div class="left-hidden">
             <div class="skin">
              <img src="../assets/images/skin.jpg" />
             </div>
             <side-list iconClass="icon-message" sideText="我的消息" link="messages" disc="<span class='message-num'>1</span>"></side-list>
             <side-list iconClass="icon-vip" sideText="会员中心" link="vipcenter"></side-list>
             <side-list iconClass="icon-market" sideText="商城" link="shoopingmall"></side-list>
             <side-list iconClass="icon-fm" sideText="在线听歌免流量" link="onlineFree"></side-list>
             <line-split height="4" color= "#efefef"></line-split>
             <side-list iconClass="icon-friend" sideText="我的好友" link="friends"></side-list>
             <side-list iconClass="icon-place" sideText="附近的人" link="nearby"></side-list>
             <line-split height="4" color= "#efefef"></line-split>
             <side-list iconClass="icon-theme" sideText="个性换肤" disc="官方红" link="theme"></side-list>
             <side-list iconClass="icon-music" sideText="听歌识曲" link="listen"></side-list>
             <side-list iconClass="icon-set-time" sideText="定时停止播放" link="setStop"></side-list>
             <side-list iconClass="icon-lock" sideText="音乐闹钟" link="musicClock"></side-list>
             <side-list iconClass="icon-car" sideText="驾驶模式" link="driveMode"></side-list>
             <side-list iconClass="icon-cloud" sideText="音乐云盘" link="musicCloud"></side-list>
            </div>
            <div class="bottom-seeting">
              <div><i class="icon-night"></i>夜间模式</div>
              <div><i class="icon-setting"></i>设置</div>
              <div><i class="icon-exit"></i>退出</div>
            </div>
            </div>
        </transition>
        <transition name="mask">
            <div  v-show="getIsShow" class="maskside" @click="toggleSide"></div>
        </transition>
    </div>
</template>
<script>
    import　{mapGetters} from 'vuex'
    import SideList from './sideList/sideList'
    import LineSplit from './sideList/line'
    export default{
        name:'side',
        components:{SideList,LineSplit},
        data () {
            return {

            }
        },
        computed: {
            ...mapGetters([
                'getIsShow',
                'getClassify'
            ])
        },
        methods:{
            toggleSide () {
                this.$store.dispatch('toggle_Side')
            }
        }
    }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
        .left-container
            width:80%
            height:100%
            position:absolute
            z-index:40
            background:#fff
            top:0
            overflow: hidden
        .maskside
            width:100%
            height:100%
            top:0
            position:absolute
            z-index:35
            background:#000
            opacity:0.2
         .slideLeft-enter, .slideLeft-leave-to
             left:-80%
          .slideLeft-enter-to,.slideLeft-leave
              left:0
         .slideLeft-enter-active,.slideLeft-leave-active,.mask-enter-activem,.mask-leave-active
             transition: all 0.5s
         .mask-enter, .mask-leave-to
             opacity:0
         .mask-enter-to,.mask-leve
            opacity:0.2
          .sidebar
            .left-hidden
              overflow:scroll
              height:100%
              width:100%
            .skin
              width:100%
              height:25%
              overflow:hidden
              img
                width:100%
                transform:translateY(-10%)
            .bottom-seeting
              position:absolute
              bottom:0px
              display:flex
              justify-content: space-around
              width: 100%
              padding-bottom:10px
              font-size:22px
              [class*='icon']
                font-szie:24px
                padding-right:15px

</style>
