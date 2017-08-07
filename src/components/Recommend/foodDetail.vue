<template>
  <div class='food-detail'>
    <div>
      <img :src="detail.pic"/>
      <h3>{{detail.name}}</h3>
    </div>
    <div class="explain" v-html="detail.content"></div>
    <div>
      <i class="icon-set-time"></i>
      {{detail.preparetime}}
      <i class='icon-community'></i>
      {{detail.peoplenum}}
    </div>
    <div>
      <h3>食材清单</h3>
      <ul>
        <li v-for="item in detail.material">
          <span :class="item.type ? 'main' : ''">{{item.mname}}</span>
          <span>{{item.amount}}</span>
        </li>
      </ul>
    </div>
    <div>
      <h3>烹饪步骤</h3>
      <ul>
        <li v-for = "(item, index) in detail.process">
          <img :src="item.pic"/>
          <p>{{index+1}} {{item.pcontent}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default{
  name: 'foodDetail',
  computed:{
    ...mapGetters({
      detail: 'getFoodDetail'
    })
  },
  mounted () {
    console.log(this.detail)
  }
}
</script>
