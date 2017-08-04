<template>
    <div class="community">
      <!-- <div class="commu-header">
            <router-link tag="span" to="/recommend/personal" >个性推荐</router-link>
            <router-link tag="span" to="/recommend/musiclist" >歌单 </router-link>
            <router-link tag="span" to="/recommend/zbqent" >主播电台</router-link>
            <router-link tag="span" to="/recommend/rank" >排行榜</router-link>
       </div>-->
       <div class="commu-header">
        <i class="icon-menu" @click="toggleShow"></i>
        <span class="foodheader">豆果美食</span>
       </div>
       <div>
        <router-view></router-view>
       </div>
       <side-bar v-show="isShowSide" 
			 	:classify="classify" 
				:details="details" 
				@changeDetail="changeDetail"
				@getList = "getList"></side-bar>
    </div>
</template>
<script>
    import sideBar from './foodSide'
		import { mapGetters } from 'vuex'
    export default{
        name:'individuality',
        components: { sideBar },
        data () {
          return ({	
          })
        },
				computed: {
					...mapGetters({
						classify: 'getClassify',
						details: 'getDetail',
                        isShowSide: 'isShowSide'
					})
				},
				methods: {
					toggleShow () {
                        this.$store.dispatch('toggle_Show')
					},
					changeDetail (index){
						this.$store.dispatch('get_Detail',index)
					} ,
					getList (classId) {
						this.$store.dispatch('get_List',classId)
					}
				},
				mounted () {
					this.$store.dispatch('get_Class')
				}
    }
</script>
<style lang="stylus" rel="stylesheet/stylus">
@import '../../commen/global.styl'
    .community
        padding-top:35px
        .commu-header
            display: flex
            align-items: center
            justify-content: space-around
            height:35px
            background:#789545
            color:#fff
            position: fixed;
            width: 100%;
            top:50px
            span
                display:inline-block
                width:25%
                text-align:center
                font-size:14px
                &.router-link-active
                    color:$primarycolor
            i
                font-size: 24px;
                padding-left: 10px;
            .foodheader
                flex:1 1 auto
</style>