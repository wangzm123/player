const state = {
    isShowDetail: false
}
const getters = {
    isShowDetail: state => state.isShowDetail
}
const mutations = {
    showMusicDetails(state){
        state.isShowDetail= !state.isShowDetail
    }
}
const actions = {
    show_Music_Detail ({commit}) {
        commit('showMusicDetails')
    }
}

export default{
    state,
    getters,
    mutations,
    actions
}