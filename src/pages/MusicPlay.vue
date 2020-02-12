<template>
    <div>
        <div class="box">
<!--            标题-->
            <div class="top">
                <router-link tag="div" to="/index">
                    <van-icon name="wap-home-o" size="40" color="red"/>
                </router-link>
                <ul>
                    <li class="songName">歌名</li>
                    <li class="singerName">歌手</li>
                </ul>
                <van-icon name="search" size="40"/>
            </div>
<!--            专辑图片-->
            <div class="musicPic">
                <img src="https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3032737645,615936838&fm=26&gp=0.jpg" alt="">
            </div>
<!--            歌词部分-->
<!--            添加喜爱-->
            <div class="like">
                <van-icon name="like-o" size="40"/>
                <van-icon name="down" size="40"/>
            </div>
<!--            进度条-->
            <div class="play">
                <Audio></Audio>
            </div>
        </div>
    </div>
</template>

<script>
    import Audio from '../components/Audio.vue'
    export default {
        components:{
            Audio
        }
    }
</script>

<style lang="less" scoped>
.box {
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: #e9e9e9;
    .top {
        width: 100%;
        height: 80px;
        display: flex;
        justify-content: space-between;
        align-items:center;
        ul {
            .songName {
                font-size: 20px;
            }
            .singerName {
                color: #777777;
                text-align: center;
            }
        }
    }
    .musicPic {
        width: 200px;
        height: 200px;
        margin: 30px 110px;
        img {
            width: 100%;
            height: 100%;
            box-shadow: 4px 4px 3px #c0c0c0;
        }
    }
    .like {
        width: 100%;
        height: 60px;
        display: flex;
        justify-content: space-between;
        align-items:center;
    }
    .play{
        width: 100%;
        padding: 0 55px;
    }
}
</style>