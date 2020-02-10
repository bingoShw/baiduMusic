<template>
    <div class="index-container">
        <!-- 头部导航 -->
        <ul>
            <li>
                <router-link to="/index">
                    <img src="../assets/logo-ea5.png" alt />
                </router-link>
            </li>
            <li>
                <router-link to>歌手</router-link>
            </li>
            <li>
                <router-link to>榜单</router-link>
            </li>
            <li>
                <router-link to>我的</router-link>
            </li>
            <li>
                <router-link to>搜索</router-link>
            </li>
        </ul>
        <!-- Home页面 -->
        <router-view></router-view>
    </div>
</template>
<script>
    export default {
        data(){
            return{}
        }
    };
</script>

<style lang="less" scoped>
    .index-container {
        ul {
            display: flex;
            text-align: center;
            height: 50px;
            line-height: 50px;
            background-color: #f9f9f9;
            li {
                flex: 1;
                a {
                    color: #999;
                    font-size: 16px;
                }
                img {
                    width: 28px;
                    height: 28px;
                    vertical-align: middle;
                }
            }
        }
    }
</style>