<template >
    <div  class="sidebars">
     <transition   name="slideLeft">
        <div class="personal-recom" >
           <ul class="classify">
					 		<li v-for="(item,index) in classify" @click="changeDetail(index)">{{item.name}}</li>
            </ul>
            <ul class="detail">
							 <li v-for="(item,index) in details" @click="getList(item.classid)">{{item.name}}</li>
             </ul>
    		</div>
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
				props:['classify','details'],
        methods:{
            toggleSide () {
                this.$emit('hidemask')
            },
						changeDetail (index){
							 this.$emit('changeDetail',index)
						},
						getList (classId) {
							this.$emit('getList',classId)
						}
        },
				mounted () {
					
				}
    }
</script>
<style lang="stylus" rel="stylesheet/stylus">
	.sidebars
		position: fixed;
		top: 0px;
		background: #fff;
		.personal-recom
				display:flex
				align-items:center
				.detail
					display:flex
					width: calc(100% - 100px)
					flex-wrap: wrap-reverse
					justify-content: space-between
					li
						padding:5px 


</style>
