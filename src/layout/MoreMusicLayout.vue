<template>
    <div>
        <h3>{{$route.params.title}}</h3>
        <van-row gutter="10" class="moreMusicRow">
            <van-col span="12" class="moreMusicCol" v-for="item in list" :key="item.song_id">
                <img v-lazy="item.pic_big" alt="专辑封面">
                <div class="musicName van-ellipsis">{{item.title}}</div><br>
                <div class="singer">{{item.author}}</div>
            </van-col>
        </van-row>
    </div>
</template>

<script>
    import Http from '../api/http'
    export default {
        created() {
            const url = `api/v1/restserver/ting?method=baidu.ting.billboard.billList&type=${this.$route.params.type}&size=${this.size}&offset=0`;
            Http.get(url).then(res => {
                this.list = res.song_list
            })
        },
        data(){
            return{
                list:[]
            }
        },
        props:{
            type: {
                type: Number,
                default: 1
            },
            size: {
                type: Number,
                default: 12
            }
        }
    }
</script>

<style lang="less" scoped>
h3 {
    margin: 10px 20px;
    color: #777171
}
.moreMusicRow {
    padding: 0 20px;
    .moreMusicCol {
        img {
            width: 100%;
        }
        .musicName {
            font-size: 16px;
        }
        .singer {
            color: #777171;
            font-size: 13px;
        }
    }
}
</style>