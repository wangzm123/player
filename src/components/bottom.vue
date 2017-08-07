<template>
        <div class="bottom-content">
            <div class="music-info">
                <img class="music-pic"
                    :src="getCurrentMusic ? getCurrentMusic.img_url :''" alt=""
                    @click="musicDetail()">
			    <div class="music-detail">
				    <p class="music-name" >{{ getCurrentMusic ? getCurrentMusic.name : ''}}</p>
				    <p class="music-singer" >{{getCurrentMusic ? getCurrentMusic.singer : ''}}</p>
			    </div>
		    </div>
            <div class="palypuse" @click="pauseOrPlay"> <i  :class="isplaying? 'icon-pause' : 'icon-play'"></i></div>
            <div class="palylist" @click="showPalylist"><i class="icon-list-music"></i></div>
        </div>
</template>
<script>
import {mapGetters, mapState } from 'vuex'
    export default{
        name:'bottom',
        data () {
            return {
                state: {
                    loading: false,
                    currentIndex: 0
                }
            }
        },
        computed:{
            ...mapGetters({
                isplaying: 'getPlayingState',
                getCurrentMusic:'getCurrentMusic'
            })

        },
        methods: {
            pauseOrPlay () {
               this.$store.dispatch('pause_Play_Music')
            },
            showPalylist () {
               this.$store.dispatch('showlist')
            },
            musicDetail () {
                this.$store.dispatch('show_Music_Detail')
            }
        }
    }
</script>
<style lang="stylus" rel="stylesheet/stylus">
        @import '../commen/global.styl'
        .bottom-content
            display:flex
            align-items:center
            position:fixed
            width:100%
            bottom:0
            height:50px
            padding:0 5px
            background:#fff
            .music-info
                position:relative
                flex:1 1 auto
                height:100%
                display:flex
                align-items: center
                .music-detail
                    padding: 0px  5px
                    flex:1 1 auto
                    display:flex
                    flex-direction:column
                    justify-content:center
                    @media screen and (max-width: 414px)
                        p
                            max-width:250px
                    @media screen and (max-width: 375px)
                        p
                            max-width:260px
                    @media screen and (max-width: 320px)
                        p
                            max-width:260px
                    @media screen and (max-width: 414px)
                        p
                            max-width:580px
                    p
                        width:100%
                        margin:0
                    .music-name
                        font-size:14px
                        color:#333
                    .music-singer
                        color:#aaa
                        font-size:10px
            .music-pic
                width:36px
                height:36px
                flex:0 0 36px
            .palylist
               font-size:26px
               color:#999
               padding:0 5px
            .palypuse
                width:26px
                height:26px;
                border:2px solid #999;
                margin: 0 5px;
                display:flex;
                align-items:center;
                justify-content:center;
                border-radius:15px;
                .icon-play
                    font-size:12px;
                .icon-pause
                    color:$primarycolor
</style>
