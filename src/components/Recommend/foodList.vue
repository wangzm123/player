<template>
    <div>
      <ul ref="container" class="foodlist" @touchmove.stop="touchmove($event)">
			<li v-for="(item,index) in list ">
				<img :src="item.pic"/>
				<div>
					<p class="food-name">{{item.name}}</p>
					<p class="food-matiral"><span v-for="(item1,index1) in item.material">{{item1.mname + (index1 == item.material.length-1 ? '' : '、')}}</span></p>
					<p class="food-tag">{{item.tag}}</p>
				</div>
			</li>
       </ul>
			 <div v-show="!list.length">
			 		暂无列表数据
			 </div>
    </div>
</template>
<script>
 import { mapGetters } from 'vuex'
    export default{
        name:'foodList',
        computed: {
         ...mapGetters({
            classify: 'getClassify',
						detail: 'getDetail',
						list: 'getList'
         })
				 },
         methods: {
           touchmove(event) {
            let e = event || window.event
             console.log(e)
             console.log(this.$refs.container.scrollTop)
           }
         }

    }
</script>
<style lang="stylus" rel="stylesheet/<css></css>">
.foodlist
	li
		display:flex
		justify-content: space-between;
		padding:15px 10px
		border-bottom:1px solid #ccc
		img
			width:100px
			height:100px
		div
			width:calc(100% - 110px)
			p
				text-overflow: ellipsis;
				overflow: hidden
				white-space: nowrap;
				width: 100%
				margin:5px 0px
			.food-name
				font-size:18px
			.food-matiral, .food-tag
				color:#615f5f
				font-size:14px
</style>
