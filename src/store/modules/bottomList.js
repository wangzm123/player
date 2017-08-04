import * as types from '../mutation'
import musicLists from '../../api/music'
const state = {
     isShow: false,
     cycleType:0,
     all:[],
     isDetail:false
}

const mutations = {
    [types.SHOW_MUSIC_LIST] (state) {
    state.isShow = !state.isShow
  },
  changeCycleType (state) {
     state.cycleType++
     if( state.cycleType == 3){
        state.cycleType=0
     }
  },
  getAllMusic (state) {
    musicLists.getMusicList(list => state.all = list)
  },
  showMusicDetail (state) {
    state.isDetail= true
  }
}

const getters = {
    isShow: state => state.isShow,
    cycleType: state => state.cycleType,
    className: state => {
        return state.cycleType == 0 ? 'icon-music-danqu1' :state.cycleType == 1 ? 'icon-music-shunxu' : 'icon-music-random'
    },
    cycleText: state => {
        return  state.cycleType == 0 ? '单曲循环' :state.cycleType == 1 ? '顺序播放' : '随机播放'
    },
    allMusic: state => state.all
}

const actions = {
    changeCycleType ({commit}) {
        commit('changeCycleType')
    },
    getAllMusic ({commit}) {
        commit('getAllMusic')
    },
    show_Music_Detail({ commit}) {
        commit('showMusicDetail')
    }
}


export default{
    state,
    mutations,
    getters,
    actions
}