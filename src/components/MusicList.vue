<template>
    <div>
        <div class="musicContainer">
            <!-- 标题 -->
            <Title :title="title" :url="{name:'moreMusic',params:{title:title,type:type}}"></Title>
            <!-- 音乐列表 -->
            <van-row class="musicList" gutter="10">
                <van-col class="musicCol" v-for="item in list" span="8" :key="item.song_id">
                    <img class="musicCover" v-lazy="item.pic_small" alt="图片封面" />
                    <div class="musicName van-ellipsis">{{item.title}}</div>
                </van-col>
            </van-row>
        </div>
    </div>
</template>

<script>
    import Http from '../api/http'
    import Title from '../components/Title.vue'
    export default {
        created(){
            // 渲染数据
            const url = `/api/v1/restserver/ting?method=baidu.ting.billboard.billList&type=${this.type}&size=${this.size}&offset=0`;
            Http.get(url).then(res => {
                // 拿到数据
                this.list = res.song_list;
            });
        },
        data(){
            return{
                list: []
            }
        },
        components:{
            Title
        },
        props:{
            title:{
                type: String,
                default: "音乐列表"
            },
            type: {
                type: Number,
                default: 1
            },
            size: {
                type: Number,
                default: 6
            }
        }
    };
</script>

<style lang="less" scoped>
    .musicContainer {
        padding: 10px;
        .musicList {
            padding: 10px 0;
        }
        .musicCol {
            margin-bottom: 10px;
        }
        .musicCover {
            width: 100%;
        }
        .musicName {
            text-align: center;
        }
    }
</style>