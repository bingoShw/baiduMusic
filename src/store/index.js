import Vue from 'vue'
import Vuex from 'vuex'
import {GETMUSICINFO} from '../store/mutation_type'
import {CURRENTTIME} from '../store/mutation_type'
import {PROGRESS} from '../store/mutation_type'
import actions from './actions'

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        songInfo:{},
        bitrate:{},
        currentTime:0,
        progress:0
    },
    mutations: {
        [GETMUSICINFO](state,payload){
            state.songInfo = payload.songInfo;
            state.bitrate = payload.bitrate
        },
        [CURRENTTIME](state,payload){
            state.currentTime = payload.currentTime
        },
        [PROGRESS](state,payload){
            state.progress = payload.changeTime
        }
    },
    actions
});
export default store