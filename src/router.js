import Vue from 'vue'
import VueRouter from 'vue-router'
import IndexLayout from './layout/IndexLayout.vue'
Vue.use(VueRouter);

import Home from './pages/Home.vue'
import MoreMusic from './pages/MoreMusic.vue'
import SingerList from './pages/SingerList.vue'
import SingerInformation from './pages/SingerInformation.vue'
import Search from './pages/Search.vue'
import MusicMoreList from './pages/MusicMoreList.vue'
import MusicPlay from './pages/MusicPlay.vue'
import Me from './pages/Me.vue'
import MusicMoreListInfo from './pages/MusicMoreListInfo.vue'

const router = new VueRouter({
    routes:[
        {
            path:'',
            redirect:'/index'
        },
        {
            path:'/index',
            component:IndexLayout,
            meta:{
                title:'天亮音乐'
            },
            children:[
                {
                    path:'',
                    component: Home
                },
                {
                    path:'/index/moreMusic/:title/:type',
                    component:MoreMusic,
                    name:'moreMusic'
                },
                {
                    path:'singerList',
                    component:SingerList,
                    meta:{
                        title:'歌手'
                    }
                },
                {
                    path:'/index/singerList/singerInformation/:tinguid',
                    component:SingerInformation,
                    name:'singerInformation'
                },
                {
                    path:'search',
                    component:Search,
                    meta:{
                        title:'搜索'
                    }
                },
                {
                    path:'musicMoreList',
                    component:MusicMoreList,
                    meta:{
                        title:'榜单'
                    }
                },
                {
                    path:'me',
                    component:Me,
                    meta:{
                        title:'我的'
                    }
                }
            ]
        },
        {
            path:'/musicPlay/:songId',
            component:MusicPlay,
            name:'musicPlay'
        },
        {
            path:'/index/musicMoreListInfo/:type',
            component:MusicMoreListInfo,
            name:'musicMoreListInfo'
        }
    ]
});
export default router