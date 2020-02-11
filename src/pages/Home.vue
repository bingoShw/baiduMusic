<template>
    <div>
        <!-- 今日榜单 -->
        <MusicList :title="`今日榜单`" :type="1"></MusicList>
        <!-- 新歌速递 -->
        <MusicList :title="`新歌速递`" :type="2" :size="3"></MusicList>
        <!-- 轮播图 -->
        <van-swipe class="my-swipe" indicator-color="white">
            <van-swipe-item>
                <img src="../assets/img/b1.jpg" alt="" />
            </van-swipe-item>
            <van-swipe-item>
                <img src="../assets/img/b2.jpg" alt="" />
            </van-swipe-item>
            <van-swipe-item>
                <img src="../assets/img/b3.jpg" alt="" />
            </van-swipe-item>
        </van-swipe>
        <!-- 音乐榜单 -->
        <MusicRank></MusicRank>
        <!-- 热门歌单 -->
        <MusicList :title="`热门歌单`" :type=24></MusicList>
    </div>
</template>

<script>
    import MusicList from "../components/MusicList.vue";
    import MusicRank from "../components/MusicRank.vue";
    import Http from '../api/http'
    export default {
        created() {
            //今日榜单
            Http.get(
                    "/api/v1/restserver/ting?method=baidu.ting.billboard.billList&type=1&size=6&offset=0"
            ).then(res=>{
                // 拿到里面的数据
                this.todayMusicList = res.song_list;
            });
            //新歌速递
            Http.get(
                    "/api/v1/restserver/ting?method=baidu.ting.billboard.billList&type=2&size=3&offset=0"
                )
                .then(res => {
                    this.newMusicList = res.song_list;
                });
            //热门榜单
            Http.get(
                    "/api/v1/restserver/ting?method=baidu.ting.billboard.billList&type=24&size=6&offset=0"
                )
                .then(res => {
                    this.hotMusicList = res.song_list;
                });
        },
        data(){
            // api里的数据
            return{
                todayMusicList:[],
                newMusicList:[],
                hotMusicList:[]
            }
        },
        components:{
            MusicList,
            MusicRank
        }
    }
</script>

<style lang="less" scoped>
    .my-swipe .van-swipe-item {
        img {
            width: 100%;
            display: block;
        }
    }
</style>