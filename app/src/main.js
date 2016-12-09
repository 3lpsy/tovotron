import Vue from 'vue'
import Electron from 'vue-electron'
import sync from './sync/index';
import loader from "./utils/loader";
//
let store = loader.provider("store");
let router = loader.provider("router");
//
//
sync(store, router)
Vue.config.debug = true
let rootComponent = require("./App.vue");

Vue.use(Electron)

new Vue({
    router,
    store,
    ...rootComponent // Object spread copying everything from App.vue
}).$mount('#app');
