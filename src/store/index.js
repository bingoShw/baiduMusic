import Vue from 'vue'
import Vuex from 'vuex'
import {GETMUSICINFO} from '../store/mutation_type'

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        songInfo:{},
        bitrate:{},
    },
    mutations: {
        [GETMUSICINFO](state,payload){
            state.songInfo = payload.songInfo;
            state.bitrate = payload.bitrate
        },
    }
});
export default store