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
    Lazyload
} from 'vant';

Vue.use(Col);
Vue.use(Row);
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Tab);
Vue.use(Tabs);
Vue.use(Lazyload);

import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios);
const vm = new Vue({
    el: '#app',
    render(createElement) {
        return createElement(App);
    },
    router
});