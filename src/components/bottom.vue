<template>
        <div class="bottom-content">
           <!-- <ul>
                <li>
                    <img src="../assets/logo.png"/>
                    <div>
                        <p>标题</p>
                        <p>介绍</p>
                    </div>
                </li>
            </ul>-->
            <div class="music-info">
                <img class="music-pic" src="../assets/logo.png" alt="">
			    <div class="music-detail">
				    <p class="music-name" >凉凉</p>
				    <p class="music-singer" >杨宗纬</p>
			    </div>
		    </div>
            <div class="palypuse" @click="pause"> <i  :class="state.isplaying? 'icon-pause' : 'icon-play'"></i></div>
            <div class="palylist"><i class="icon-list-music"></i></div>
        </div>
</template>
<script>
    export default{
        name:'bottom',
        data () {
            return {
                state: {
                    isplaying: false,
                    loading: false,
                    currentIndex: 0
                },
                audioList: [{
                    name:'夜空中最亮的星',
                    singer: '张杰'
                }, {
                    name:'演员',
                    singer: '薛之谦'
                },{
                    name:'凉凉',
                    singer: '杨宗纬'
                }]
            }
        },
        methods: {
            pause () {
                this.state.isplaying = !this.state.isplaying
            }
        }
    }
</script>
<style lang="stylus" rel="stylesheet/stylus">
        @import '../commen/global.styl'
        .bottom-content
            display:flex
            align-items:center
            position:fixed
            width:100%
            bottom:0
            height:50px
            padding:0 5px
            background:#fff
            .music-info
                position:relative
                flex:1 1 auto
                height:100%	
                display:flex
                .music-detail
                    padding: 0px  5px
                    flex:1 1 auto
                    display:flex
                    flex-direction:column
                    justify-content:center
                    @media screen and (max-width: 414px)
                        p
                            max-width:250px
                    @media screen and (max-width: 375px)
                        p
                            max-width:260px
                    @media screen and (max-width: 320px)
                        p
                            max-width:260px
                    @media screen and (max-width: 414px)
                        p
                            max-width:580px
                    p
                        width:100%
                        margin:0
                    .music-name
                        font-size:14px
                        color:#333
                    .music-singer
                        color:#aaa
                        font-size:10px
            .music-pic
                width:50px
                height:50px
                flex:0 0 36px
            .palylist
               font-size:26px
               color:#999
               padding:0 5px
            .palypuse
                width:26px
                height:26px;
                border:2px solid #999;
                margin: 0 5px;
                display:flex;
                align-items:center;
                justify-content:center;
                border-radius:15px;
                .icon-play
                    font-size:12px;
                .icon-pause
                    color:$primarycolor

                
                    
</style>