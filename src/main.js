// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui';
import '@/assets/css/reset.scss';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router'
import '@/assets/icon/iconfont.css';
import api from '@/request';
import store from './store';
import * as filters from './filters';
import VueCodeMirror from 'vue-codemirror'
import 'codemirror/lib/codemirror.css'
Vue.prototype.$api = api;
Vue.use(ElementUI);
Vue.use(VueCodeMirror)
Vue.config.productionTip = false

Object.keys(filters).forEach((key)=>{
  Vue.filter(key,filters[key]);
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
