<template>
    <div class="personal-recom">
        <div>
           
           <!--     <li v-for="(item,index) in classify" @click="getDetail(index)">{{item.name}}</li>
            </ul>
            <div>
               <ul>
                <li v-for="(item,index) in detail">{{item.name}}</li>-->
            </ul>
            </div>
        </div>
    </div>
</template>
<script>
    import { mapGetters } from 'vuex'
    export default{
        name:'personalRecom',	
				data() {
					return {
						index:0
					}
				},
        computed: {
            ...mapGetters({
            classify: 'getClassify',
						detail: 'getDetail'
         })
        },
        methods:{
           getdata () {
                this.$store.dispatch('get_Class')
           },
					 getDetail (index) {
						 this.$store.dispatch('get_Detail',index)
					 }
        },
        mounted () {
          //  this.$store.dispatch('get_Class')
        }
    }
</script>
