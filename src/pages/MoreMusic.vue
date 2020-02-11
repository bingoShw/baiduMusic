<template>
    <div>
        <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
            <h3>{{$route.params.title}}</h3>
            <van-list
                    v-model="loading"
                    :finished="finished"
                    finished-text="没有更多了"
                    @load="onLoad"
            >
                <van-row gutter="10" class="moreMusicRow">
                    <van-col span="12" class="moreMusicCol" v-for="item in list" :key="item.song_id">
                        <img v-lazy="item.pic_big" alt="专辑封面">
                        <div class="musicName van-ellipsis">{{item.title}}</div>
                        <div class="singer">{{item.author}}</div>
                    </van-col>
                </van-row>
            </van-list>
        </van-pull-refresh>
    </div>
</template>

<script>
    import Http from '../api/http'
    // import {getMusicMoreList} from '../api/Music-api'
    export default {
        created() {
            const url = `/api/v1/restserver/ting?method=baidu.ting.billboard.billList&type=${this.$route.params.type}&size=${this.size}&offset=${this.offset}`;
            Http.get(url).then(res => {
                this.list = res.song_list
            })
            // getMusicMoreList(this.$route.params.type, 12, 0).then(res => {
            //     this.list = res.song_list;
            // });
        },
        data(){
            return{
                list:[],
                loading: false,
                finished: false,
                offset:0,
                isLoading: false
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
        },
        methods:{
            onLoad(){
                this.offset += 12;
                const url = `/api/v1/restserver/ting?method=baidu.ting.billboard.billList&type=${this.$route.params.type}&size=${this.size}&offset=${this.offset}`;
                Http.get(url).then(res => {
                    if (res.song_list != null) {
                        this.list = this.list.concat(res.song_list);
                        this.loading = false;
                    } else {
                        this.finished = true;
                        this.loading = false;
                    }
                })
            },
            onRefresh() {
                this.offset = 0;
                const url = `/api/v1/restserver/ting?method=baidu.ting.billboard.billList&type=${this.$route.params.type}&size=${this.size}&offset=${this.offset}`;
                Http.get(url).then(res => {
                    this.list = res.song_list;
                    this.isLoading = false
                })
            }
        }
    }
</script>

<style lang="less" scoped>
h3 {
    margin: 20px 20px;
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