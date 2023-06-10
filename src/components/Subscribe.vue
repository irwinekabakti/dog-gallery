<template>
  <div
    class="relative my-18 md:my-32 bg-gradient-to-b from-primary-200/30 to-primary-100/10 pb-10 md:pb-32 rounded-lg -mx-5">
    <div class="p-10">
      <div class="flex items-center justify-between">
        <div>
          <h2
            class="text-4xl sm:text-5xl md:text-6xl font-bold text-black mb-4 mt-5 md:mt-0">
            Pick Now
          </h2>
          <p class="text-base md:text-lg text-black md:w-full">
            Let's Pick your dog to play and accompany throughout your day!
          </p>
        </div>
        <div class="w-36 block md:hidden">
          <img src="../assets/icon/dog-walking.png" alt="" />
        </div>
      </div>
      <button
        @click="toSearchDog()"
        class="px-4 py-2 mt-3 text-sm rounded-full text-black font-medium uppercase bg-secondary">
        Let's go !
      </button>
    </div>
    <div class="absolute right-10 bottom-10 w-1/3 hidden md:block">
      <img src="../assets/icon/dog-walking.png" alt="" />
    </div>
  </div>
</template>

<script setup>
  import { useRouter } from "vue-router";

  const router = useRouter();

  const toSearchDog = () => {
    router.push({ name: "searchDog" });
  };
</script>

<style scoped></style>
