<template>
  <div class="line" ref="line"></div>
</template>
<script>
  export default{
    name:'line',
    props: {
      height:{
        type:String,
        default:"2"
      },
      color:{
        type: String,
        default:'#ccc'
      }
    },
    mounted () {
      this.$refs.line.style.height = `${this.height}px`
      this.$refs.line.style.background = this.color
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  .line
    width:100%

</style>
