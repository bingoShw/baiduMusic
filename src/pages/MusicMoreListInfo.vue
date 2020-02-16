<template>
    <div>
        <div>
            <img :src="musicPic.pic_s444" alt="">
        </div>
        <div>
            <router-link tag="div" class="information" v-for="item in musicList" :to="{name:'MusicPlay',params:{songId:item.song_id}}" :key="item.song_id">
                <div class="title">{{item.title}}</div>
                <div class="author">{{item.author}}</div>
            </router-link>
        </div>
    </div>
</template>
<script>
    import {MusicMoreList} from '../api/Music-api'
    export default {
        created() {
            MusicMoreList(this.$route.params.type,8).then(res=>{
                this.musicPic = res.billboard;
                this.musicList = res.song_list
            })
        },
        data() {
            return {
                musicPic:{},
                musicList:[]
            }
        }
    }
</script>
<style lang="less" scoped>
    .information {
        margin: 10px 20px;
        padding-bottom: 10px;
        border-bottom: 1px solid #f0f1f1;
        color: #4d4d4d;
        .title{
            font-size: 18px;
        }
        .author{
            color: #999999;
            font-size: 14px;
        }
    }
</style>