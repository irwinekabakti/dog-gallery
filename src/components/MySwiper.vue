<template>
  <swiper
    :modules="modules"
    :slides-per-view="1"
    :pagination="{ clickable: true }"
    class="pb-8">
    <swiper-slide class="grid place-items-center">
      <img :src="imgSlide1" class="w-2/3 lg:w-[70%] mt-12" />
    </swiper-slide>
    <swiper-slide class="grid place-items-center mt-8">
      <img :src="imgSlide2" class="w-2/3 lg:w-[70%] mt-12" />
    </swiper-slide>
    <swiper-slide class="grid place-items-center mt-3">
      <img :src="imgSlide3" class="w-2/3 lg:w-[70%] mt-12" />
    </swiper-slide>
    <swiper-slide class="grid place-items-center mt-2">
      <img :src="imgSlide4" class="w-2/3 lg:w-[70%] mt-12" />
    </swiper-slide>
    <swiper-slide class="grid place-items-center h-60 mt-3">
      <img :src="imgSlide5" class="w-2/3 lg:w-[70%] mt-12" />
    </swiper-slide>
  </swiper>
</template>

<script setup>
  import { Pagination } from "swiper";
  import { Swiper, SwiperSlide } from "swiper/vue";
  import "swiper/css";
  import "swiper/css/pagination";
  import imgSlide1 from "../assets/images/corgi.png";
  import imgSlide2 from "../assets/images/dog-3.png";
  import imgSlide3 from "../assets/images/dog-5.png";
  import imgSlide4 from "../assets/images/dog-9.png";
  import imgSlide5 from "../assets/images/dog-10.png";

  const modules = [Pagination];
</script>

<style>
  .swiper-pagination-bullet {
    @apply w-3 h-3 bg-[#d97759] opacity-100;
  }
  .swiper-pagination-bullet.swiper-pagination-bullet-active {
    @apply rounded-xl w-6  bg-secondary;
  }
</style>
