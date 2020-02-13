<template>
    <div>
        <div class="box">
            <!--            标题-->
            <div class="top">
                <router-link tag="div" to="/index">
                    <van-icon name="wap-home-o" size="40" color="red"/>
                </router-link>
                <ul>
                    <li class="songName">{{songInfo.title}}</li>
                    <li class="singerName">{{songInfo.author}}</li>
                </ul>
                <router-link tag="div" to="/index/search">
                    <van-icon name="search" size="40"/>
                </router-link>
            </div>
            <!--            专辑图片-->
            <div class="musicPic">
                <img :src="songInfo.pic_radio" alt="">
            </div>
            <!--            歌词部分-->
            <Lrc :songId="$route.params.songId"></Lrc>
            <!--            添加喜爱-->
            <div class="like">
                <van-icon v-show="ifLike" name="like-o" size="40" @click="getLike"/>
                <van-icon v-show="!ifLike"name="like" color="red" size="40" @click="changeLike"/>
                <van-icon name="down" size="40"/>
            </div>
            <!--            进度条-->
            <div class="play">
                <audio controls :src="bitrate.show_link"></audio>
            </div>
        </div>
    </div>
</template>

<script>
    import {getMusicPlay} from '../api/Music-api'
    import {mapState} from 'vuex'
    import {GETMUSICINFO} from '../store/mutation_type'
    import Lrc from '../components/Lrc.vue'
    export default {
        created(){
            getMusicPlay(this.$route.params.songId).then(res => {
                this.$store.commit(GETMUSICINFO, {
                    songInfo: res.songinfo,
                    bitrate: res.bitrate
                });
            });
        },
        computed: {
            ...mapState({
                songInfo: 'songInfo',
                bitrate:'bitrate',
            })
        },
        components:{
            Lrc
        },
        data(){
            return{
                ifLike:'true'
            }
        },
        methods:{
            getLike(){
                this.ifLike = false;
                this.$notify({ type: 'success', message: '收藏成功', background:'red' });
            },
            changeLike(){
                this.$dialog.confirm({
                    title:'取消收藏',
                    message:'是否确认取消收藏',
                    confirmButtonColor:'red'
                }).then(()=>{
                    this.ifLike = true
                }).catch(()=>{
                    this.ifLike = false
                });
            }
        }
    }
</script>

<style lang="less" scoped>
    .box {
        position: fixed;
        width: 100%;
        height: 100%;
        background-color: #e9e9e9;
        .top {
            width: 100%;
            height: 80px;
            display: flex;
            justify-content: space-between;
            align-items:center;
            ul {
                .songName {
                    font-size: 20px;
                    text-align: center;
                }
                .singerName {
                    color: #777777;
                    text-align: center;
                }
            }
        }
        .musicPic {
            width: 200px;
            height: 200px;
            margin: 30px 110px;
            img {
                width: 100%;
                height: 100%;
                box-shadow: 4px 4px 3px #c0c0c0;
            }
        }
        .like {
            width: 100%;
            height: 60px;
            display: flex;
            justify-content: space-between;
            align-items:center;
        }
        .play{
            width: 100%;
            padding: 0 55px;
        }
    }
</style>