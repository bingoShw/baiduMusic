import Vue from 'vue'
import VueRouter from 'vue-router'
import IndexLayout from './layout/IndexLayout.vue'
Vue.use(VueRouter);

import Home from './pages/Home.vue'
import MoreMusicLayout from './layout/MoreMusicLayout.vue'

const router = new VueRouter({
    routes:[
        {
            path:'',
            redirect:'/index'
        },
        {
            path:'/index',
            component:IndexLayout,
            name:'index',
            children:[
                {
                    path:'',
                    component: Home,
                    name:'home'
                },
                {
                    path:'/index/moreMusic/:title/:type',
                    component:MoreMusicLayout,
                    name:'moreMusic'
                }
            ]
        }
    ]
});
export default router