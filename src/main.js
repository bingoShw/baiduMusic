import Vue from 'vue';
import App from './App.vue'
import router from './router'


import {
    Col,
    Row,
    Swipe,
    SwipeItem,
    Tab,
    Tabs,
    Lazyload,
    List,
    Cell,
    CellGroup,
    PullRefresh,
    Search,
    Icon,
    Notify,
    Dialog,
    Tag
} from 'vant';

Vue.use(Col);
Vue.use(Row);
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Tab);
Vue.use(Tabs);
Vue.use(Lazyload);
Vue.use(List);
Vue.use(Cell);
Vue.use(CellGroup);
Vue.use(PullRefresh);
Vue.use(Search);
Vue.use(Icon);
Vue.use(Notify);
Vue.use(Dialog);
Vue.use(Tag);

import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios);

import  store from './store/index'
const vm = new Vue({
    el: '#app',
    render(createElement) {
        return createElement(App);
    },
    router,
    store
});
