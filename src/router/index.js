import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Recommend from'@/components/Recommend/individuality'
import Community from'@/components/Community/Community'
import PersonalRecm from '@/components/Recommend/personalRecom'
import FoodList from '@/components/Recommend/foodList'
import Zbqent from '@/components/Recommend/zbqent'
import Rank from '@/components/Recommend/rank'
Vue.use(Router)

export default new Router({
  routes: [
    {
      // 首页
      path: '/',
      redirect: '/mymusic'
    },{
      path: '/mymusic',
      name: 'Hello',
      component: Hello
    },{
      path:'/recommend',
      name:'Recommend',
      component:Recommend,
      children:[{
          path:'',
          redirect: 'personal'
          },{
            path:'personal',
             component:PersonalRecm
          },{
            path:'musiclist',
            name:FoodList,
            component:FoodList
          },{
            path:'zbqent',
            component:Zbqent
          },{
            path:'rank',
            component:Rank
          }]
    },{
       path:'/community',
       name:'Community',
       component:Community
    }
  ]
})
