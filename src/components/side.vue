<template >
    <div  class="sidebar">
        <transition   name="slideLeft">
            <div v-show="getIsShow" class="left-container">侧边栏</div>
        </transition>
        <transition name="mask">
            <div  v-show="getIsShow" class="maskside" @click="toggleSide"></div>
        </transition>
    </div>
</template>
<script>
    import　{mapGetters} from 'vuex'
    export default{
        name:'side',
        data () {
            return {
                
            }
        },
        computed: {
            ...mapGetters([
                'getIsShow'
            ])
        },
        methods:{
            toggleSide () {
                this.$store.dispatch('toggle_Side')
            }
        }
    }
</script>
<style lang="stylus" rel="stylesheet/stylus">
        .left-container
            width:80%
            height:100%
            position:absolute
            z-index:40
            background:#fff
            top:0
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
</style>
