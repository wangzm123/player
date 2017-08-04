import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getter'
import actions from './action'
import bottomList from './modules/bottomList'
import bottom from './modules/bottom'
import audio from './modules/audio'
import musicDetail from './modules/musicDetail'
import side from'./modules/side'
import dish from './modules/dish'
Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        showlist:true,
        cycleType:0,
        isLoading:true
    },
    getters,
    actions,
    modules:{
        bottomList,
        bottom,
        audio,
        musicDetail,
        side,
        dish
    }
})
export default store

