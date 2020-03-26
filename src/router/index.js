/*
* 路由器对象模块
*
* */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Msite from '../pages/Msite/Msite.vue'
import Order from '../pages/Order/Order.vue'
import Search from '../pages/Search/Search.vue'
import Profile from '../pages/Profile/Profile.vue'

/*声明使用插件*/
Vue.use(VueRouter)
//导出路由
export default new VueRouter({
  //所有路由
  routes:[
    {
      path: '',
      redirect:'/msite'
    },
    {
      path:'/msite',
      component:Msite
    },
    {
      path:'/order',
      component:Order
    },
    {
      path:'/search',
      component:Search
    },
    {
      path:'/profile',
      component:Profile
    },
  ]
})
