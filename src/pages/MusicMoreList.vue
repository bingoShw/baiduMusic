<template>
    <div>
        <router-link tag="div" :to="{name:'musicMoreListInfo',params:{type:item.billboard.billboard_type}}" class="listContent" v-for="item in musicList" :key="item.billboard.billboard_no">
            <div class="listPic">
                <img :src="item.billboard.pic_s192" alt="新歌榜">
            </div>
            <div class="listMusic">
                <ul v-for="(items,index) in item.song_list" :key="index">
                    <li>{{index+1}}&nbsp;&nbsp;&nbsp;<span>{{items.title}}</span></li>
                </ul>
            </div>
        </router-link>
    </div>
<!--    <div>-->
<!--        <router-link tag="div" class="group" to="/index/musicMoreListInfo">-->
<!--            <div class="groupPic">-->
<!--                <img src="https://tse2-mm.cn.bing.net/th/id/OIP.xFOavv6Eph6HNZz8d131_gHaEo?w=200&h=125&c=7&o=5&dpr=1.5&pid=1.7">-->
<!--            </div>-->
<!--            <div class="groupMusic">-->
<!--                <ul>-->
<!--                    <li v-for="num in 3" :key="num">{{num}}</li>-->
<!--                </ul>-->
<!--            </div>-->
<!--        </router-link>-->
<!--    </div>-->
</template>

<script>
  import {MusicMoreList} from '../api/Music-api'
  export default {
      created(){
          //新歌榜
              MusicMoreList(1,3).then(res => {
                  this.musicList.push({
                      billboard:res.billboard,
                      song_list:res.song_list
                  })
              }),
                  //热歌榜
              MusicMoreList(2,3).then(res => {
                  this.musicList.push({
                      billboard:res.billboard,
                      song_list:res.song_list
                  })
              }),
                  //欧美金曲
              MusicMoreList(11,3).then(res => {
                  this.musicList.push({
                      billboard:res.billboard,
                      song_list:res.song_list
                  })
              }),
                  //摇滚
              MusicMoreList(21,3).then(res => {
                  this.musicList.push({
                      billboard:res.billboard,
                      song_list:res.song_list
                  })
              }),
                  //经典老歌
              MusicMoreList(22,3).then(res => {
                  this.musicList.push({
                      billboard:res.billboard,
                      song_list:res.song_list
                  })
              })
      },
      data(){
          return{
              musicList:[]
          }
      }
  }
</script>

<style lang="less" scoped>
    .listContent {
        display: flex;
        margin:  20px 10px;
        padding-bottom: 10px;
        border-bottom: 1px solid #f0f1f1;
        .listPic  {
            width: 100px;
            margin-right: 15px;
            img {
                width: 100%;
            }
        }
    }
    .listMusic {
        float: left;
        margin-left: 30px;
        ul {
            margin-top: 5px;
            li {
                width: 100%;
                height: 30px;
                line-height: 30px;
               font-weight: bold;
               color: red;
                font-size: 15px;
                overflow: hidden;
                span {
                    color: black;
                    font-weight: normal;
                    font-style: normal;
                }
            }
        }
    }
    /*.group {*/
    /*    display: flex;*/
    /*    .groupPic {*/
    /*        img {*/
    /*            width: 150px;*/
    /*            height: 150px;*/
    /*        }*/
    /*    }*/
    /*}*/
</style>