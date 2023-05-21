<!--  -->
<template>
<div class=''>
   <div class="swiper-container" ref="cur">
          <div class="swiper-wrapper">
            <div
              class="swiper-slide"
              v-for="(carousel, index) in list"
              :key="carousel.id"
            >
              <img :src="carousel.imgUrl" />
            </div>
          </div>
          <!-- 如果需要分页器 -->
          <div class="swiper-pagination"></div>

          <!-- 如果需要导航按钮 -->
          <div class="swiper-button-prev"></div>
          <div class="swiper-button-next"></div>
        </div>
      </div>

</template>

<script>
import Swiper from 'swiper'

export default {
  name: 'Carousel',
  props:['list'],
components: {},
data() {
//这里存放数据
return {

};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
  watch: {
    list: {
    immediate:true,
      handler() {
this.$nextTick(()=>{
  var mySwiper = new Swiper(
    // document.querySelector(".swiper-container"),
this.$refs.cur,
    {
        // direction: 'vertical', // 垂直切换选项
        loop: true, // 循环模式选项

        // 如果需要分页器
        pagination: {
          el: ".swiper-pagination",
          clickable:true
        },

        // 如果需要前进后退按钮
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      }); })
      }
    }
  },

}
</script>
<style scoped>
/*@import url(); 引入公共css类*/

</style>
