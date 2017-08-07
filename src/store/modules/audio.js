import musicList from '../../api/music'
const state= {
    currentIndex: 0,
    audioelement:{
    },
    allMusic:[],
    playing:false,
    currentTime:0,
    bufferRange:'',
    duration:0
}
const mutations = {
    playMusicIndex(state, index){
        state.currentIndex = index
        state.audioelement.setAttribute('src',state.allMusic[state.currentIndex].url)
        state.playing= true
        state.currentTime= 0
        state.audioelement.load()
        state.audioelement.play()
    },
    setAudioElement (state, ele) {
        state.audioelement= ele
    },
    getAllMusic (state) {
        musicList.getMusicList( list => state.allMusic = list)
    },
    pauseMusic (state) {
         state.playing= false
        state.audioelement.pause()
    },
    playMusic (state) {
        state.playing= true
        state.audioelement.play()
    },
    playPrevOrNext(state,param){
      if(param.payload.playType == 0 || param.payload.playType == 1){
        //顺序播放//单曲循环
        if(param.payload.isNext){
            state.currentIndex++
            if(state.currentIndex == state.allMusic.length){
                state.currentIndex = 0
            }
        }else{
             state.currentIndex--
             if(state.currentIndex <0 ){
                state.currentIndex = state.allMusic.length-1
            }
        }
      }else{
          //随机播放
      state.currentIndex= Math.floor(Math.random()*state.allMusic.length)
    }
    console.log(11111,state.audioelement.error)
    // if(state.audioelement.error){
    //     state.audioelement.setAttribute('src',state.audioelement.src)
    // }else{

    // }
        state.audioelement.setAttribute('src',state.allMusic[state.currentIndex].url)
        state.playing= true
        state.currentTime= 0
        state.audioelement.load()
        state.audioelement.play()

    },
    currentTime (state,ele) {
        state.currentTime = Math.ceil(ele.currentTime)
        state.duration = Math.ceil(ele.duration)
    },
    bufferRange (state,bufferRange) {
        state.bufferRange = bufferRange.length
    },
    playAssignTime (state, percent) {
        state.currentTime = state.duration*percent
        state.audioelement.currentTime = state.duration*percent
    }
}
const actions= {
    play_Music_Index ({commit},index) {
        commit('playMusicIndex',index)
    },
    pause_Play_Music ({ commit }) {
        if(state.playing){
             commit('pauseMusic')
        }else{
            commit('playMusic')
        }
    },
    pause_Music ({commit}) {
        commit('pauseMusic')
    },
    set_AudioElement ({ commit },ele) {
        commit('setAudioElement',ele)
    },
    get_AllMusic ({commit}) {
        commit('getAllMusic')
    },
    play_Prev ({commit},param) {
         commit('playPrevOrNext',param)
    },
    current_Time ({commit},ele) {
        commit('currentTime',ele)
    },
    buffer_Range ({commit}, buffetRange) {
        commit('bufferRange',buffetRange)
    },
    play_Assign_Time ({commit},percent) {
        commit('playAssignTime',percent)
    }
}
const getters= {
    getAllMusic: state => state.allMusic,
    getCurrentMusic: state => state.allMusic[state.currentIndex],
    getPlayingState: state => {
        return state.playing
    },
    getCurrentIndex: state => state.currentIndex,
    getcurrentTime: state => state.currentTime,
    getDuration: state => state.duration,
    getAudio: state => state.audioelement
}
export default {
    state,
    actions,
    mutations,
    getters
}
