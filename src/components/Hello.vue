<template>
  <div class="hello">
   <div class="music-folder">
      <folder-list iconClass="icon-music" folderText="我的音乐" length = "118" @musicListDetail = "showDetails" ></folder-list>
      <folder-list iconClass="icon-zuijinplay" folderText="最近播放" length = "20" @musicListDetail = "showDetails"></folder-list>
      <folder-list iconClass="icon-diantai" folderText="我的电台" length = "20" @musicListDetail = "showDetails"></folder-list>
      <folder-list iconClass="icon-collect" folderText="我的收藏" length = "20" @musicListDetail = "showDetails"></folder-list>
   </div>
   <div>
      <p>
        <i class="icon-right"></i>
        <span>创建的歌单</span>
        <i class="icon-setting"></i>
      </p>
   </div>
   <!--music-folder 弹出层展示-->
   <folder-detail :isShow="folderShow" :folderText="folderText" @backList = "backList" :musicList= "musicList" ></folder-detail>
  </div>
</template>

<script>
import FolderList from './sideList/FolderList'
import FolderDetail from './sideList/FolderDetail'
import { mapGetters } from 'vuex'
export default {
  name: 'hello',
  components: { FolderList, FolderDetail },
  data () {
    return {
      folderShow: false,
      folderText: ''
    }
  },
  methods: {
    showDetails (folderText) {
      this.folderText = folderText
      this.folderShow = true
      switch (folderText) {
        case '我的音乐' :
          this.$store.dispatch('get_My_Music','all')
          break;
        case '最近播放':
          this.$store.dispatch('get_My_Music','recent')
          break;
        case '我的电台':
          this.$store.dispatch('get_My_Music','casting')
          break;
        case '我的收藏':
          this.$store.dispatch('get_My_Music','collection')
          break;
      }
    },
    backList () {
      this.folderShow = false
    }
  },
  computed: {
    ...mapGetters({
        musicList: 'getAllMusic'
    })
  },
  mounted () {

  }
}
</script>
<style scoped>

</style>
