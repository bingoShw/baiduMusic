<template>
    <div>
        <div class="title">
            <h3>
                {{title}}
                <span @click="moreMusic">更多</span>
            </h3>
        </div>
    </div>
</template>
<script>
    export default {
        data(){
            return{
                url:'/index/MoreMusic'
            }
        },
        methods:{
            moreMusic(){
                if (this.url != null) {
                    this.$router.push(this.url)
                }
            }
        },
        props:{
            title: {
                type: String,
                default: "音乐列表"
            },
            url:[String,Object]
        }
    }
</script>
<style lang="less" scoped>
    .title {
        h3 {
            margin: 10px;
            color: #777171;
        }
        span {
            float: right;
            font-size: 14px;
            line-height: 26px;
            font-weight: 400;
            color: #999;
        }
    }
</style>