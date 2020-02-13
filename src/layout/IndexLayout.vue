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
                <router-link to="/index/singerList">歌手</router-link>
            </li>
            <li>
                <router-link to="/index/musicMoreList">榜单</router-link>
            </li>
            <li>
                <router-link to>我的</router-link>
            </li>
            <li>
                <router-link to="/index/search">搜索</router-link>
            </li>
        </ul>
        <!-- Home页面 -->
        <transition>
            <router-view></router-view>
        </transition>
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
    .v-enter,
    .v-leave-to {
        opacity: 0;
    }

    .v-enter-to,
    .v-leave {
        opacity: 1;
    }

    .v-enter-active,
    .v-leave-active {
        transition: all 0.5s ease;
    }
</style>