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
                        @clear="clear"
                >
                    <div slot="action" @click="onSearch(value)">搜索</div>
                </van-search>
            </div>
            <!--            搜索结果-->
            <div class="searchResult">
                <van-cell v-for="(item,index) in songList" :key="index">{{item.songname}}</van-cell>
            </div>
            <!--            搜索记录-->
            <div class="searchHistory" v-show="historyShow">
                <van-tag
                        v-for="(item,index) in searchHistoryList"
                        :key="index"
                        closeable
                        size="large"
                        plain
                        @close="close(index)"
                        @click="toSearch(item)"
                >
                    {{item}}
                </van-tag>
            </div>
        </div>
    </div>
</template>

<script>
    import {Search} from "../api/Music-api";

    export default {
        created() {
            //localStorage获取数据 searchHistory为key值
            const searchHistoryStr = localStorage.getItem('searchHistory') || '[]';
            // debugger
            //JSON.parse() 方法将数据转换为 JavaScript 对象
            this.searchHistoryList = JSON.parse(searchHistoryStr);
        },
        data(){
            return{
                value:'',
                songList:[],
                searchHistoryList:[],
                historyShow:true,
            }
        },
        methods:{
            toSearch(item) {
                this.value = item;
                this.onSearch();
            },
            clear() {
                this.historyShow = true;
                this.songList = [];
            },
            onSearch(value){
                if (this.value == ""){
                    return
                }else{
                    Search(value).then(res => {
                        if (res.song != null || res.song.length != 0) {
                            this.historyShow = false;
                        }
                        this.songList = res.song;
                    });
                }
                //判断重复
                const searchHistoryStr = localStorage.getItem("searchHistory") || "[]";
                const searchHistoryList = JSON.parse(searchHistoryStr);
                if (!searchHistoryList.includes(this.value)) {
                    searchHistoryList.push(this.value);
                }else {
                    this.searchHistoryList = searchHistoryList;
                }
                //JSON.stringify() 方法将 JavaScript 对象转换为字符串
                localStorage.setItem("searchHistory", JSON.stringify(searchHistoryList));
            },
            close(index) {
                this.searchHistoryList.splice(index, 1);
                localStorage.setItem("searchHistory", JSON.stringify(this.searchHistoryList));
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