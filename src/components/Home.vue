<template>
  <section
    id="home"
    class="grid place-items-center mt-20 md:mt-10 overflow-hidden">
    <div
      class="grid grid-flow-row-dense grid-cols-1 lg:grid-cols-2 items-end gap-10 lg:gap-16 w-full px-0 lg:px-10">
      <div
        class="text-5xl md:text-6xl font-bold text-black w-full pb-20 order-2 lg:order-1">
        <h2 class="text-4xl md:text-5xl">PICK YOUR FAV DOG !!</h2>
        <p class="pt-5 text-lg font-normal">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente quis
          ea aspernatur quo, quos, id quam dolorum fugiat deleniti animi
          perferendis nihil!
        </p>
      </div>
      <div class="w-full h-full order-1 lg:order-2">
        <MySwiper />
      </div>
    </div>
  </section>
</template>

<script setup>
  import MySwiper from "./MySwiper.vue";
</script>

<style scoped></style>
