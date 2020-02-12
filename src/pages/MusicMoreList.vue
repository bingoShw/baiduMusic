<template>
    <div>
        <van-cell v-for="num in 6" :key="num">
            <img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4051190248,3414149735&fm=26&gp=0.jpg" class="listPic">
            <div class="listMusic">
                <ul>
                    <li>1&nbsp;&nbsp;&nbsp;<span>歌名</span></li>
                    <li>2&nbsp;&nbsp;&nbsp;<span>歌名</span></li>
                    <li>3&nbsp;&nbsp;&nbsp;<span>歌名</span></li>
                </ul>
            </div>
        </van-cell>
    </div>
</template>

<script>
  export default {
      data(){
          return{

          }
      }
  }
</script>

<style lang="less" scoped>
.listPic {
    width: 100px;
    float: left;
}
.listMusic {
    float: left;
    margin-left: 30px;
    ul {
        margin-top: 5px;
        li {
            line-height: 30px;
            font-weight: bold;
            color: red;
            font-size: 15px;
            font-style: italic;
            span {
                color: black;
                font-weight: normal;
                font-style: normal;
            }
        }
    }
}
</style>