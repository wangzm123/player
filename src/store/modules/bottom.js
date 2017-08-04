const bottom = {
     state: {
        isShow: false
    },
    mutaitions: {
        showlist (state) {
            state.isShow = !state.isShow
        }
    },
    actions: {
        showlist ({commit}) {
            commit('showlist')
        }
    }
}