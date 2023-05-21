import Vue from 'vue'
import App from './App.vue'
import TypeNav from '@/components/TypeNav'
import router from './router'//引入路由
import Carousel from '@/components/Carousel'

Vue.config.productionTip = false
Vue.component(TypeNav.name, TypeNav)
Vue.component(Carousel.name, Carousel);

import store from '@/store'
// import { reqCategoryList } from "@/api";
// reqCategoryList(); 
import '@/mock/mockServe';
import 'swiper/css/swiper.css'
// import { reqGetSearchInfo } from './api'
// console.log(reqGetSearchInfo({}))


new Vue({
  router,//注册路由
  store,
  render: h => h(App)
}).$mount('#app')
