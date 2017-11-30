
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');
window._   = require('lodash');

import Vue from 'vue'
import router from './router'
import store from './vuex/store'
import Vuex from 'vuex'
import App from './components/App.vue'
import VeeValidate from 'vee-validate';

Vue.use(VeeValidate,
    {
        errorBagName: 'veeErrors',
        inject: false,
    }
)
Vue.config.debug = true;

class BootstrapController {
    constructor() {
        this.vueApp = new Vue({
            render: h => h(App),
            router,
            store,
        }).$mount('#app')
    }
}
new BootstrapController

