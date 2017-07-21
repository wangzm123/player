<template>
   <transition name="top" v-if="showlist">
   <div class="bottom-list">底部列表页面</div>
   </transition>
</template>
<script>
import { mapGetters } from 'vuex'
console.log(1245,this.$store);
    export default{
        name:'bottomlist',
        data () {
            return {
                
            }
        },
        computed:{
            
        }
    }
</script>
<style lang="stylus" rel="stylesheet/style">
    .top-enter
        bottom:-300px
    .to-enter-active
        bottom:0px
    .bottom-list 
        position:fixed
        height:300px
        border:1px solid #f00
        bottom:-300px
        z-index:10
        box-sizing: border-box;

</style>