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
import Login from '../pages/Login/Login.vue'
const [routerPush, routerReplace] = [VueRouter.prototype.push, VueRouter.prototype.replace];
VueRouter.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error => error);
};
VueRouter.prototype.replace = function replace(location) {
  return routerReplace.call(this, location).catch(error => error);
};


/*声明使用插件*/
Vue.use(VueRouter)
//导出路由
export default new VueRouter({
  //所有路由
  routes:[
    {
      path: '',
      redirect:'/msite',
      
    },
    {
      path:'/msite',
      component:Msite,
      meta:{
        showFooter:true
      }
    },
    {
      path:'/order',
      component:Order,
      meta:{
        showFooter:true
      }
    },
    {
      path:'/search',
      component:Search,
      meta:{
        showFooter:true
      }
    },
    {
      path:'/profile',
      component:Profile,
      meta:{
        showFooter:true
      }
    },
    {
      path:'/login',
      component:Login,
      
    }
  ]
})
