<template>
<div class="content">
    <transition name="list">
        <div v-show="isShow">
            <div class="bottom-list">
                <div class="musictitle">
                    <div class="cycletype" >
                        <div class="cyclecontainer" @click.stop="changecycle">
                            <i :class="className"></i>
                             <span>{{cycleText}}</span>
                             <span>({{allMusic.length}})</span>
                        </div>
                    </div>
                    <div class="add">
                        <i class="icon-add"></i>
                        <span @click="collection">收藏</span>
                    </div>
                    <div class="delete">
                        <i class="icon-delete"></i>
                        <span>清空</span>
                    </div>
                </div>
                <div class="music-list">
                    <ul>
                        <li v-for="(item,index) in allMusic" @click="play(index)">
                            <div class="border-1px"></div>
                            <i v-if="getCurrentIndex === index " class="icon-volume-medium current-music"></i>
                            {{item.name}}-{{item.singer}}
                            <div class="border-1px"></div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
     </transition>
    <transition name="masktop">
        <div class="maskbottom" v-if="isShow" @click="hideplaylist"></div>
    </transition>
</div>
</template>
<script>
import {mapState, mapGetters} from 'vuex'
    export default{
        name:'bottomList',
        data () {
            return {
             //   showlist: this.$store.state.showlist,
            }
        },
        methods: {
            hideplaylist () {
                this.$store.dispatch('showlist')
            },
            changecycle () {
                this.$store.dispatch('changeCycleType')
            },
            play (index) {
                this.$store.dispatch('play_Music_Index',index)
                this.$store.dispatch('showlist')
            },
            collection () {

            }
        },
        computed:{
            ...mapGetters({
               isShow: 'isShow',
               cycleType:'cycleType',
               className:'className',
               cycleText:'cycleText',
               allMusic:'getAllMusic',
               getCurrentIndex:'getCurrentIndex',
               showlist: 'getAllMusic'
           })
        },
        mounted() {
          //  this.$store.dispatch('getAllMusic')
        }
    }
</script>
<style lang="stylus" rel="stylesheet/style" scoped>
        @import '../commen/border/index.styl'
        @import '../commen/global.styl'
        .list-enter,.list-leave-to
            transform:translateY(300px)
        .list-enter-active, .list-leave-active
            transition:transform  0.5s
        .masktop-enter, .masktop-leave-to
            transform: translateY(300px)
            opacity: 0
        .masktop-enter-to, .masktop-leave
            opacity: 0.2
        .masktop-enter-active, .masktop-leave-active
            transition: all 0.5s
        .content
            position:fixed
            bottom:0px
            width:100%
            z-index:30
            color:#666
            .bottom-list
                position:fixed
                height:300px
                box-sizing: border-box
                background:#fff
                width:100%
                bottom:0px
                z-index:10
                .musictitle
                    display:flex
                    align-items:center
                    height:50px
                    font-size:14px
                    border-bottom:1px solid $border_1px
                    .cycletype
                        flex:1
                        height:100%
                        .cyclecontainer
                            height:100%
                            display: flex
                            align-items: center
                            padding:0 10px
                            &:active
                                background:$list_active
                    .add, .delete
                        padding:0 10px
                        display:flex
                        align-items:center
                        height:100%
                        &:actiev
                            background:$list_active
                        [class^=icon]
                            margin:0px 5px
                    [class^=icon]
                        font-size:18px
                    .cycletype
                        display:flex
                        align-items:center
                .music-list
                    ul
                        height:250px
                        overflow:scroll
                    li
                        line-height:42px
                        padding:0 15px
                        font-size:14px
                        .border-1px
                            color:#f00
                            border-1px($border_1px)
                        .current-music
                            color:$primarycolor
            .maskbottom
                position:fixed
                width:100%
                height:100%
                background:#000
                z-index:3
                bottom:300px
                opacity:0.2
</style>
