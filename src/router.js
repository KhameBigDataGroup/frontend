import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/home/Home.vue'
import ListOfBlocks from "./views/blocks/ListOfBlocks";
import BlockPage from "./views/block/BlockPage";

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/bitcoin/all-blocks',
      name: 'blocks',
      component: ListOfBlocks
    },
    {
      path: '/bitcoin/block/:hash',
      name: 'block',
      component: BlockPage
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
