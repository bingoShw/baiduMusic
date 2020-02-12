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

const router = new VueRouter({
    routes:[
        {
            path:'',
            redirect:'/index'
        },
        {
            path:'/index',
            component:IndexLayout,
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
                    component:SingerList
                },
                {
                    path:'/index/singerList/singerInformation/:tinguid',
                    component:SingerInformation,
                    name:'singerInformation'
                },
                {
                    path:'search',
                    component:Search
                },
                {
                    path:'musicMoreList',
                    component:MusicMoreList
                }
            ]
        },
        {
            path:'/musicPlay',
            component:MusicPlay
        }
    ]
});
export default router