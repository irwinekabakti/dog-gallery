<template>
  <div class="bg-[#fcf0ee] h-[255px] rounded-2xl w-full">
    <div class="relative">
      <img
        class="object-cover rounded-2xl h-48 w-full border-2 border-[#631307] cursor-pointers"
        alt="Dog image"
        width="279"
        height="174"
        v-lazy="props.url" />
      <div
        class="absolute top-0 grid w-full h-full transition duration-300 ease-in bg-resd-500 rounded-2xl backdrop-filter hover:backdrop-blur-sm place-items-center group/goto">
        <button
          class="absolute transition ease-in -translate-y-1 opacity-0 group-hover/goto:opacity-100 group-hover/goto:translate-y-0 w-fit font-semibold bg-[#631307] text-white text-xs p-2 rounded-lg top-1/2"
          @click="gotoDogDetails()">
          View more
        </button>
      </div>
    </div>
    <div class="flex items-center justify-between px-3 h-14">
      <div class="flex flex-col">
        <span class="text-[10px] text-gray-500 font-base">Sub breed</span>
        <span class="text-xs font-semibold capitalize">{{
          subBreed ? subBreed : "-"
        }}</span>
      </div>
      <span
        class="bg-[#f7d6d4] rounded-lg text-[#914440] text-xs px-[10px] py-1 font-bold capitalize"
        >{{ breed }}</span
      >
    </div>
  </div>
</template>

<script setup>
  import { computed } from "vue";
  import { useRoute, useRouter } from "vue-router";

  const router = useRouter();
  const route = useRoute();

  const props = defineProps({
    url: {
      type: String,
      required: true,
    },
  });

  const gotoDogDetails = () => {
    router.push(`/detail/${breed.value}`);
  };

  const breed = computed(() => props.url.split("/")[4]?.split("-")[0]);
  const subBreed = computed(() => props.url.split("/")[4]?.split("-")[1]);
</script>
