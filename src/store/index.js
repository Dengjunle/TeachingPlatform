import Vue from 'vue';
import Vuex from 'vuex';
import user from './module/user';
import study from './module/study';

Vue.use(Vuex);

export default new Vuex.Store({
    modules:{
        user,
        study
    }
})