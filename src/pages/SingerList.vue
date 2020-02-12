<template>
<!--    <div>-->
<!--        <router-link :to="{name:`singerInformation`,params:{tinguid:item.ting_uid}}" class="singerList">-->
<!--            <van-cell class="singer" v-for="item in list" :key="item.ting_uid">-->
<!--                <img :src="item.avatar_middle" alt="歌手图片">-->
<!--                <div class="singerName">{{item.author}}</div>-->
<!--            </van-cell>-->
<!--        </router-link>-->
<!--    </div>-->

<div>
    <van-cell v-for="item in list" :key="item.ting_uid">
        <router-link tag="div" :to="{name:`singerInformation`,params:{tinguid:item.ting_uid}}" class="singerList">
            <img :src="item.avatar_middle" alt />
            <div class="singerName">{{item.name}}</div>
        </router-link>
    </van-cell>
</div>
</template>

<script>
    import {getSingerList} from '../api/Music-api'
    const SingerIdList = [
        "2517",
        "7994",
        "1091",
        "45561",
        "2507",
        "245815",
        "1077",
        "1204",
        "1117",
        "82366"
    ];
    export default {
        created() {
            for (let singerId of SingerIdList) {
                getSingerList(singerId).then(res => {
                    this.list.push(res);
                });
            }
        },
        data(){
            return{
                list:[],
            }
        }
    }
</script>

<style lang="less" scoped>
.singerList {
    img {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        float: left;
    }
    .singerName {
        float: left;
        line-height: 60px;
        margin-left: 20px;
    }
}
</style>
