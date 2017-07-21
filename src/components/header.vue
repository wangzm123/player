<template>
    <div class="header">
        <i class="icon-menu menu "></i>
        <div class="tabmenu">
            <router-link tag="i" to="/mymusic" >
                <i class="icon-music "></i>
            </router-link>
            <router-link tag="i" to="/recommend">
                <i class="icon-wangyiyun "></i>
            </router-link>
            <router-link tag="i" to="/community">
                <i class="icon-community"></i>
            </router-link>
        </div>
        <i class=" search icon-search"></i>
    </div>
</template>
<script>
    export default{
        name:'header',
        data () {
            return {

            }
        }
    }
</script>
<style lang="stylus" rel="stylesheet/stylus"> 
@import '../commen/global.styl'
.header 
    position:fixed
    border:1px solid #f00
    height:50px
    width:100%
    top:0
    align-items: center
    justify-content: space-between
    background:$primarycolor
    display:flex
    .icon-music, .icon-wangyiyun, .icon-community
        font-size:26px
        color:#ccafaf
    .icon-menu, .icon-search
        color:#fff
        font-size:26px
        padding:0 10px
    .tabmenu
        margin:0px auto;
        i
            margin:0 2px;
            &.router-link-active
                i
                 color:$activecolor
             &.active
                 color:#4AE0A8
</style>