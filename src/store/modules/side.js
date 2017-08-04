const state = {
    isShow: false
}
const mutations = {
    toggleSide (state){
        state.isShow = !state.isShow
    }
}
const actions = {
    toggle_Side ({commit}) {
        commit('toggleSide')
    }
}
const getters ={
    getIsShow: state =>state.isShow
}
export default {
    state,
    mutations,
    actions,
    getters
}