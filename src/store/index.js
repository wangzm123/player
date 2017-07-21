import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getter'
import actions from './action'
import mutations from './mutation' 
import musicList from './modules/musicList'
Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        showlist:false
    },
    getters,
    actions,
    mutations,
    modules:{
        musicList
    }
})
export default store

