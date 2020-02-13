<template>
    <div>
        <div class="topBox">
            <div class="searchBox">
                <van-search
                        v-model="value"
                        show-action
                        placeholder="请输入搜索关键词"
                        background="#e9e9e9"
                        shape="round"
                        @search="onSearch"
                >
                    <div slot="action" @click="onSearch(value)">搜索</div>
                </van-search>
            </div>
            <div class="searchResult">
                <van-cell v-for="(item,index) in songList" :key="item.index">{{item.songname}}</van-cell>
            </div>
            <div class="searchHistory" v-show="historyShow">
                <van-tag
                        v-if="show.primary"
                        closeable
                        size="medium"
                        plain
                        @close="close('primary')"
                >
                    标签
                </van-tag>
            </div>
        </div>
    </div>
</template>

<script>
    import {Search} from "../api/Music-api";

    export default {
        created() {
            const HistoryMusic = localStorage.getItem("seachMusic") || "[]";
            this.historyList = JSON.parse(HistoryMusic);
        },
        data(){
            return{
                value:'',
                songList:[],
                historyList :[],
                historyShow:true,
                show: {
                    primary: true,
                    success: true
                }
            }
        },
        methods:{
            onSearch(value){
                Search(value).then(res => {
                    this.songList = res.song
                })
            },
            close(type) {
                this.show[type] = false;
            }
        }
    }
</script>

<style lang="less" scoped>
.topBox {
    width: 100%;
    height: 100%;
    position: fixed;
    background-color: #e9e9e9;
    .searchBox {
        border-bottom: 1px solid #c0c0c0;
    }
    .searchHistory {
        margin: 0 20px;
    }
}
</style>