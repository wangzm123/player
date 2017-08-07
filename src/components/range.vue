<template>
    <div class="range">
        <i  v-if="type == 'vol'" class="icon-volume-medium"></i>
        <span v-if="type == 'duration'" class="start">{{formatTime(getcurrentTime)}}</span>
        <div class="range-detail" ref="progress" @click="changeduration($event)">
            <div ref="played" class="current-progress" :style="{width:progress}"></div>
            <div ref="focus" class="focus" :style="{left:progress}" @touchmove.stop="drag($event)" @touchend.stop="touchend($event)"></div>
        </div>
        <span  v-if="type == 'duration'" class="end" >{{formatTime(getDuration)}}</span>
    </div>
</template>
<script>
    import {mapGetters} from 'vuex'
    export default{
        name:'range',
        data () {
            return{
                currentVol:0.5,
                totalVol:1
            }
        },
        props:{
            type:{
                type:String,
                default: 'duration'
            },
            color:{
                type:String,
                default:'#C62F2F'
            }
        },
        computed: {
            ...mapGetters([
                'getcurrentTime',
                'getDuration',
                'getAudio'
            ]),
            progress () {
                let getDuration = this.type == 'vol' ? this.totalVol : this.$store.getters.getDuration
                let getcurrentTime = this.type == 'vol' ? this.currentVol :  this.$store.getters.getcurrentTime
                if(getDuration == 0){
                    return (0 + '%')
                }else{
                    return (Math.ceil((getcurrentTime / getDuration)*100) +"%")
                }
            }
        },
        methods:{
            formatTime(time){
                if(!time){
                    return '00:00'
                }
                let min = time / 60 > 9 ? Math.floor(time/60) : '0' + Math.floor(time / 60)
                let sec = time % 60 > 9 ? Math.floor(time % 60) : '0' + Math.floor(time % 60)
                return min + ':' + sec
            },
            changeduration (event) {
                let e = event || window.event
                let mouseX = e.pageX
                let start =  document.body.offsetWidth*0.05
                let amen =this.$refs.progress.offsetLeft
                let total = this.$refs.progress.offsetWidth
                let percent = (mouseX-amen-start)/total
                if(this.type == 'vol'){
                    this.getAudio.volume = this.totalVol*percent
                    this.currentVol = this.totalVol*percent
                }else{
                    this.$store.dispatch('play_Assign_Time',percent)
                }

            },
            drag (event) {
                let e = event || window.event
                let amen =this.$refs.progress.offsetLeft
                let move =  e.touches[0].pageX-amen
               let total = this.$refs.progress.offsetWidth
                let percent = Math.ceil((move/total)*1000)/1000
                percent = percent < 0 ? 0 : percent > 1 ? 1 : percent
                this.$refs.played.style.width=percent*100+"%"
                this.$refs.focus.style.left=percent*100+"%"
            },
            touchend (event) {
                let e = event || window.event
                let amen =this.$refs.progress.offsetLeft
                let move =  e.changedTouches[0].clientX-amen
                 let total = this.$refs.progress.offsetWidth
                let percent = Math.ceil((move/total)*1000)/1000
                percent = percent < 0 ? 0 : percent > 1 ? 1 : percent
                if(this.type == 'vol'){
                    this.getAudio.volume = this.totalVol*percent
                    this.currentVol = this.totalVol*percent
                }else{
                    this.$store.dispatch('play_Assign_Time',percent)
                }
            }
        },
        mounted () {
            this.$refs.played.style.background= this.color
            this.getAudio.volume  =  this.currentVol
        }
    }
</script>
<style lang="stylus" rel="stylesheet/css">
.range
    display:flex
    align-items:center
    justify-content: space-between
    color:#fff
    font-size:12px
    [class*=icon-]
        font-size:14px
        margin-right:10px
    .start
        padding-right:20px
    .end
        padding-left:20px
    .range-detail
        width:100%
        background:hsla(0,0%,96%,.3)
        height:2px
        position:relative
        .current-progress
            height:2px
        .focus
            width:14px
            height:14px
            border-radius:50%
            background:#fff
            transform:translate3d(-7px,-7px,0)
            position:absolute
            left:90%
</style>
