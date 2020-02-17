<template>
    <div>
        <router-link tag="div" class="listContent" :to="{name:'musicMoreListInfo',params:{type:item.billboard.billboard_type}}" v-for="item in musicList" :key="item.billboard.billboard_no">
            <div class="listPic">
                <img :src="item.billboard.pic_s192" alt="新歌榜">
            </div>
            <div class="listMusic">
                <ul v-for="(items,index) in item.song_list" :key="index">
                    <li>{{index + 1}}&nbsp;&nbsp;&nbsp;<span>{{items.title}}</span></li>
                </ul>
            </div>
        </router-link>
    </div>
</template>

<script>
  import {musicMoreList} from '../api/Music-api'
  export default {
      created(){
          //新歌榜
          musicMoreList(1,3).then(res => {
                  this.musicList.push({
                      billboard:res.billboard,
                      song_list:res.song_list
                  })
              }),
                  //热歌榜
              musicMoreList(2,3).then(res => {
                  this.musicList.push({
                      billboard:res.billboard,
                      song_list:res.song_list
                  })
              }),
                  //欧美金曲
              musicMoreList(11,3).then(res => {
                  this.musicList.push({
                      billboard:res.billboard,
                      song_list:res.song_list
                  })
              }),
                  //摇滚
              musicMoreList(21,3).then(res => {
                  this.musicList.push({
                      billboard:res.billboard,
                      song_list:res.song_list
                  })
              }),
                  //经典老歌
              musicMoreList(22,3).then(res => {
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