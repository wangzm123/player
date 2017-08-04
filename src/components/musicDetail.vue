<template>
    <transition name="slidup">
    <div v-show="isShow" class="detail-container"  >
        <div class="backfilter" :style="{background:'url('+(currentMusic.img_url ? currentMusic.img_url : '')+')'}"></div>
        <div class="music-container">
            <div class="music-title">
                <i class="icon-back back" @click="musicDetail"></i>
                <div class="music-info">
                    <p class="name">{{currentMusic.name}}</p>
                    <p class="singer">{{currentMusic.singer}}</p>
                </div>
                <i class="icon-share share"></i>
            </div>
            <transition name="fade" mode="out-in">
            <div class="content-pic" v-show="isCD" @click="toggleCd" >
                <div class="animat-pic">
                    <div class="line">
                        <div class="triger"
                            :class="getPlayingState ? 'pause': ''">
                        </div>
                    </div>
                    <div class="cycle-pic " 
                        :class="getPlayingState ? '': 'cycle-pause'">
                        <div class="cd-bg"></div>
                        <img :src="currentMusic.img_url ? currentMusic.img_url : ''"/>
                    </div>
                </div>
                <div class="song-operate">
                     <i class="icon icon-like"></i>
                     <i class="icon-download"></i>
                     <i class="icon-msg"></i>
                     <i class="icon-list-circle-small"></i>
                </div>
            </div>
            </transition>
            <transition name="fade" mode="out-in">
                <div class="lyric" v-show="!isCD" @click.self="toggleCd">
                    <div class="vol">
                        <range type="vol" color="#fff"></range>
                    </div>
                </div>
            </transition>
            <div class="musicplay">
                <div class="progress">
                    <range type="duration"></range>
                </div>
                <div class="music-control">
                    <i :class="className"  @click="changeCycleType"></i>
                    <i class="icon-prevdetail" @click="playPrev"></i>
                    <i class=" play-pause"
                        :class="getPlayingState ? 'icon-pause-detail' : 'icon-playdetail'"
                        @click="playOrPause"></i>
                    <i class="icon-nextdetail" @click="playNext"></i>
                    <i class="icon-list-music"
                        @click="showList"></i>
                </div>
            </div>
        </div>
    </div>
    </transition>
    </div>
</template>
<script>
    import {mapGetters} from 'vuex'
    import Range from'./Range'
    export default{
        name:'musicDetail',
        data () {
            return {
                isCD:true
            }
        },
        components:{Range},
        computed: {
            ...mapGetters({
                 isShow:'isShowDetail',
                 currentMusic: 'getCurrentMusic',
                 className: 'className',
                 getPlayingState: 'getPlayingState'
            })
        },
        methods:{
           musicDetail() {
                this.$store.dispatch('show_Music_Detail')
            },
            playOrPause () {
                this.$store.dispatch('pause_Play_Music')
            },
            changeCycleType () {
                this.$store.dispatch('changeCycleType')
            },
            showList () {
                this.$store.dispatch('showlist')
            },
            playPrev () {
                this.$store.dispatch({
                    type:'play_Prev',
                    payload:{
                        playType:this.$store._modules.root.state.bottomList.cycleType,
                        isNext:false
                    }
                    })
            },
            playNext () {
                 this.$store.dispatch({
                    type:'play_Prev',
                    payload:{
                        playType:this.$store._modules.root.state.bottomList.cycleType,
                        isNext:true
                    }
                    })
            },
            toggleCd () {
                this.isCD = !this.isCD
            }
        }
    }
</script>
<style lang="stylus" rel="stylesheet/css">
       	@keyframes goRound{
		0%{
			transform: rotate(0)
		}
		50%{
			transform: rotate(180deg)
		}
		100%{
			transform: rotate(360deg)
		}
	}
        .detail-container
            position:fixed
            top:0px
            width:100%
            height:100%
            background:#fff
            box-sizing:border-box
            background:#aaa
            z-index:20
            .backfilter
                position:fixed
                width:100%
                height:100%
                top:0px
                filter: url(../commen/blur.svg#blur)
                filter:blur(30px)
                z-inde:11
            .music-container
                z-index:15
                position:fixed
                top:0px
                width:100%
                height:100%
                .music-title
                    display:flex
                    align-items:center
                    .music-info
                        flex:1 1 auto
                        display:flex
                        flex-direction:column 
                        color:#fff
                        p
                            margin:0px
                        .name
                            font-size:14px
                        .singer
                            font-size:12px
                    .back
                        font-size:24px
                        color:#fff
                    .share
                        font-size:32px
                        color:#fff
                    [class*=icon-]
                        padding:10px
                .content-pic
                    position:absolute
                    top:52px
                    width:100%
                    overflow:hidden
                    height:calc(100% - 200px)
                    .animat-pic
                        .line
                            width:80%
                            height:1px 
                            background-image:-webkit-linear-gradient(to left, rgba(255,255,255,0),rgba(255,255,255,0.6),rgba(255,255,255,0))
                            background-image:linear-gradient(to left, rgba(255,255,255,0),rgba(255,255,255,0.6),rgba(255,255,255,0)) 
                            margin:0px auto
                        .triger
                            position:absolute
                            width:90px
                            height:140px
                            background-image:url('../assets/images/swith.png')
                            background-size:cover
                            left:50%
                            transform:rotate(-20deg)
                            transform-origin: 14px 16px;
                            top:-14px
                            z-index:15
                            transition: all .2s linear
                        .triger.pause
                            transform:rotate(5deg)
                        .cycle-pic
                            position:absolute
                            top:70px
                            width:44vh
                            height:44vh
                            left: 50%
                            margin-left: -22vh
                            animate:goRound 16s linear  infinite 0.1s
                            -webkit-animation:goRound 16s linear  infinite 0.1s
                            animation-play-state: running
                            -webkit-animation-play-state:running
                            img
                                width:66%
                                height:66%
                                top:17%
                                left:17%
                                position:absolute
                                z-index:10
                            .cd-bg
                                background:url('../assets/images/cd-mine.png') center center no-repeat
                                background-size:cover
                                width:100%
                                height:100%
                                position:absolute;  
                                z-index:11
                        .cycle-pic.cycle-pause
                            animation-play-state: paused
                            -webkit-animation-play-state:paused
                    .song-operate
                        position: absolute;
                        bottom: 0;
                        width: 70vw;
                        left:50%
                        color:rgba(225,225,225,0.8)
                        font-size:24px
                        display:flex
                        justify-content: space-around
                        transform: translate3d(-50%,0,0)
                        i
                            &:active
                                color:rgba(225,225,225,0.4)
                .lyric
                    height:calc(100% - 200px)
                    .vol
                        width:90%
                        transform: translateX(5%)
                        padding-top:20px
                .musicplay
                    position:absolute
                    bottom:0
                    width:100%
                    height:120px
                    .music-control
                        display:flex
                        justify-content: space-around;
                        align-items: center;
                        height:12vh
                        font-size:20px
                        color:#fff
                        width:100%
                        position:absolute
                        bottom:0px
                        i
                            &:active
                                color:rgba(225,225,225,0.4)
                        .play-pause
                            font-size:35px
                    .progress
                        position: absolute
                        width: 90%;
                        transform: translateX(5%)
                        height:5vh
        .slidup-enter-active, .slidup-leave-active
            transition: all 0.3s linear
        .slidup-enter
            transform: translateY(100%)
            opacity: 0
        .slidup-leave-to 
            transform: translateX(100%)
            opacity: 0
        .fade-enter-active, .fade-leave-active
            transition:all 0.3s linear
        .fade-enter, .fade-leave-to
            opacity:0


</style>        