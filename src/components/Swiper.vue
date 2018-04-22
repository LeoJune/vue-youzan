<template>
   <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swp-page swiper-slide" v-for="list in lists">
                <a class="js-no-follow" v-bind:href="list.clickUrl">
                    <img class="goods-main-photo fadeIn" :src="list.image">
                </a>
            </div>
        </div>
        <div class="swiper-pagination"></div>
    </div>
    
</template>

<script>
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.css'
//swiper对dom节点进行操作，那么dom节点什么时候生成的，搞清楚mounted阶段(或者在html中使用v-if="bannerLists",有bannerLists的时候再渲染)
export default {
  name: 'swiper',
//   props: [lists],
  props: {
      lists: {
          type: Array,
          required: true
      },
  },
  created(){ //验证dom节点生成的阶段
    //   console.log(document.querySelectorAll('.swiper-slide'))
  },
  mounted(){
    //   console.log(document.querySelectorAll('.swiper-slide'))
    new Swiper('.swiper-container', {
        loop: true,
        pagination: {
           el: '.swiper-pagination'
        }
    })
  }
}
</script>

<style>
    .swiper-slider img{
        width: 100%;
        height: 100%;
    }
</style>


