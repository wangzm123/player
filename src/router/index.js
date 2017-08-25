import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Recommend from'@/components/Recommend/individuality'
import Community from'@/components/Community/Community'
import PersonalRecm from '@/components/Recommend/personalRecom'
import FoodList from '@/components/Recommend/foodList'
import Zbqent from '@/components/Recommend/zbqent'
import Rank from '@/components/Recommend/rank'
import FoodDetail from '@/components/Recommend/foodDetail'
Vue.use(Router)

const routes = [
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
          },{
            path:'foodDetail',
            component: FoodDetail,
            name:FoodDetail
          }]
    },{
       path:'/community',
       name:'Community',
       component:Community
    }
]

const router = new Router({
  routes: routes,
  hstory: true
})

router.beforeEach((to, from, next) => {
  if (to.matched.length ===0) {
    from.name ? next({ name:from.name }) : next('/');
  } else {
    next();
  }
})

export default router

