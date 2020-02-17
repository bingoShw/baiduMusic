<template>
    <div>
        <van-icon name="arrow-left" class="back" size="30" color="#fff" @click="goBack"/>
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
    import {musicMoreList} from '../api/Music-api'
    export default {
        created() {
            musicMoreList(this.$route.params.type,8).then(res=>{
                this.musicPic = res.billboard;
                this.musicList = res.song_list
            })
        },
        data() {
            return {
                musicPic:{},
                musicList:[]
            }
        },
        methods:{
            goBack(){
                this.$router.back()
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
    .back {
        position: fixed;
        left: 10px;
        top: 20px;
    }
</style>