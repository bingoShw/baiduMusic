<template>
    <div>
        <div class="singerPic">
            <img  class="singerBigPic" :src="singerInfo.avatar_middle" alt="">
            <div class="singerBox">
                <img class="singerSmallPic" :src="singerInfo.avatar_middle">
                <span>{{singerInfo.name}}</span>
            </div>
        </div>
        <van-cell v-for="item in songList" :key="item.song_id">
            {{item.title}}
        </van-cell>
    </div>
</template>

<script>
    // import Http from '../api/http'
    import {getSingerMusic} from '../api/Music-api'
    export default {
        created() {
            getSingerMusic(this.$route.params.tinguid,12).then(res => {
                this.singerInfo = res.artistinfo;
                this.songList = res.songlist;
            });
        },
        data(){
            return{
                singerInfo:{},
                songList:[]
            }
        }
    }
</script>

<style lang="less" scoped>
    .singerPic {
        width: 100%;
        height: 200px;
        border: 1px solid #e9e9e9;
        position: relative;
        .singerBox {
            width: 80px;
            height: 100px;
            position: absolute;
            top: 50px;
            left: 165px;
            text-align: center;
            font-size: 18px;
        }
        .singerBigPic {
            width: 100%;
            height: 100%;
            filter: blur(5px) grayscale(50%) opacity(40%);
        }
        .singerSmallPic {
            width: 100%;
            height: 80px;
            border-radius: 50%;
        }
    }
</style>