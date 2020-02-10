<template>
    <!--标题-->
    <div>
        <div class="musicContainer">
            <Title title="音乐榜单"></Title>
            <van-tabs v-model="active">
                <van-tab title="热歌榜">
                    <MusicRankList :type="2"></MusicRankList>
                </van-tab>
                <van-tab title="新歌榜">
                    <MusicRankList :type="1"></MusicRankList>
                </van-tab>
                <van-tab title="King榜">
                    <MusicRankList :type="25"></MusicRankList>
                </van-tab>
            </van-tabs>
        </div>
    </div>
</template>
<script>
import Title from '../components/Title.vue'
import MusicRankList from '../components/MusicRankList.vue'
    export default {
        data(){
            return{
                active:0
            }
        },
        components:{
            Title,
            MusicRankList
        }
    }
</script>
<style lang="less" scoped>
    .musicContainer {
        height: 470px;
        padding: 10px;
    }
    // 可以通过/deep/ 或者 ::v-deep虽然scoped限制了作用域，还可以覆盖子组件的样式
    /deep/ .van-tab__text {
        font-size: 14px;
    }
</style>