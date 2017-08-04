import * as Service from '../../api/service'
import router from '../../router'
const state = {
  classify: [],
  detail: [],
  list:[],
  isShowSide: false
}
const getters = {
  getClassify: state => state.classify,
  getDetail: state => state.detail,
  isShowSide : state => state.isShowSide,
  getList: state => state.list
}
const mutations = {
  getClass() {
    Service.getClass().then(response => {
      state.classify = response.data.data.result
      state.detail = response.data.data.result[0].list
    })
  },
  getdetail(state, index) {
    state.detail = state.classify[index].list
  },
  getList (state, classId){
      Service.getList( classId ).then(response => {
        state.list = response.data.data.result.list ? response.data.data.result.list : []
        state.isShowSide = false
        router.push({
         path:'/recommend/musiclist'
        })
      })
  },
  toggleShowSide (state) {
    state.isShowSide = !state.isShowSide
  }
}
const actions = {
  get_Class({ commit }) {
    commit('getClass')
  },
  get_Detail({ commit }, index) {
    commit('getdetail', index)
  },
  get_List ({ commit }, classId){
      commit('getList',{
          'classid':classId
      })
  },
  toggle_Show ({ commit }){
    commit('toggleShowSide')
  }
}
export　 default {
  state,
  getters,
  mutations,
  actions
}
