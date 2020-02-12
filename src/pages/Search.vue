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
                >
                    <div slot="action" @click="onSearch(val)">搜索</div>
                </van-search>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            value:''
        }
    },
    methods:{
        onSearch(val){

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
}
</style>