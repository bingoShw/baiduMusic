<template>
    <div>
        <div class="singerPic">
            <img  class="singerBigPic" src="https://tse1-mm.cn.bing.net/th/id/OIP.--6OM57e00uNILQ7ktbyuwHaEo?w=299&h=186&c=7&o=5&dpr=1.5&pid=1.7" alt="">
            <div class="singerBox">
                <img class="singerSmallPic" src="https://tse1-mm.cn.bing.net/th/id/OIP.--6OM57e00uNILQ7ktbyuwHaEo?w=299&h=186&c=7&o=5&dpr=1.5&pid=1.7">
                <span>王嘉尔</span>
            </div>
        </div>
        <van-cell v-for="item in list" :key="item.song_id" value="内容" />
    </div>
</template>

<script>
    import Http from '../api/http'
    export default {
        created() {
            const url = '/api/v1/restserver/ting?method=baidu.ting.artist.getInfo&tinguid=239544459';
            Http.get(url).then(res => {
                this.list = res.song_list
            })
        },
        data(){
            return{
                list:[]
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
            filter: blur(5px) grayscale(50%);
        }
        .singerSmallPic {
            width: 100%;
            height: 80px;
            border-radius: 50%;
        }
    }
</style>