<template>
  <swiper
    :modules="modules"
    :slides-per-view="1"
    :pagination="{ clickable: true }"
    class="pb-8">
    <swiper-slide class="grid place-items-center">
      <img src="../assets/icon/corgi.png" class="w-2/3 lg:w-[70%] mt-12" />
    </swiper-slide>
    <swiper-slide class="grid place-items-center mt-8">
      <img src="../assets/icon/dog-3.png" class="w-2/3 lg:w-[70%] mt-12" />
    </swiper-slide>
    <swiper-slide class="grid place-items-center mt-3">
      <img src="../assets/icon/dog-5.png" class="w-2/3 lg:w-[70%] mt-12" />
    </swiper-slide>
    <swiper-slide class="grid place-items-center mt-2">
      <img src="../assets/icon/dog-9.png" class="w-2/3 lg:w-[70%] mt-12" />
    </swiper-slide>
    <swiper-slide class="grid place-items-center h-60 mt-3">
      <img src="../assets/icon/dog-10.png" class="w-2/3 lg:w-[70%] mt-12" />
    </swiper-slide>
  </swiper>
</template>

<script setup>
  import { Pagination } from "swiper";
  import { Swiper, SwiperSlide } from "swiper/vue";
  import "swiper/css";
  import "swiper/css/pagination";

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
