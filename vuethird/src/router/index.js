import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Cart from "../components/tabbar/cart"
import Market from "../components/tabbar/market"

export default new Router({
  routes: [
    {
      path: '/',
      component:Cart
    },
    {
      path:"/market",
      component:Market
    }
  ]
})
