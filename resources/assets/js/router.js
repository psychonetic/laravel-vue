import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './components/Home.vue'

Vue.use(VueRouter);
//Place your routes here
const routes = [
    {
        path: '/home',
        name: 'home.index',
        component: Home
    },
    {
        path: '/',
        component: Home
    },
    //...

]
// Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
  routes,
  mode: 'history',
  default: 'home.index'
})

export default router