<template>
  <section class="w-[80%] mx-auto md:w-full mb-20 mt-[67px] lg:max-w-7xl">
    <div
      class="flex flex-col m-auto mb-6 md:mb-16 md:grid md:grid-cols-2 gap-7 w-fit">
      <div class="w-full md:w-[400px] md:h-[300px] mt-12 md:mt-24">
        <img
          class="object-cover rounded-2xl w-full h-full border-2 border-[#631307] cursor-pointers"
          alt="Dog image"
          width="279"
          height="174"
          :src="imageSrc" />
      </div>
      <div class="flex flex-col justify-between mt-12 md:mt-24">
        <h2
          class="col-span-2 mt-8 mb-5 md:mb-0 md:mt-4 text-3xl md:text-[48px] font-bold capitalize font-unbounded">
          {{ name }}
        </h2>
        <div class="grid grid-cols-2 gap-[10px] w-full md:w-fit h-fit">
          <div
            class="w-full h-[78px] rounded-md p-3 md:w-[203px] md:h-[104px] md:rounded-lg bg-[#fceeee] md:p-4 flex flex-col justify-between"
            v-for="(tag, key) in cardTags"
            :key="key">
            <div class="flex items-center gap-2">
              <i>
                <TagIcon />
              </i>
              <span
                class="text-[#631307] font-medium md:text-lg text-[12`px]"
                >{{ tag.label }}</span
              >
            </div>
            <span
              class="font-medium text-[12px] md:text-xl text-[#393939] capitalize"
              >{{ tag.value }}</span
            >
          </div>
        </div>
      </div>
    </div>
    <hr />
    <div
      class="grid grid-cols-2 gap-8 mt-6 md:flex md:justify-between animate-slide-in">
      <div class="grid gap-3" v-for="(rating, key) in ratings" :key="key">
        <span class="font-medium text-base md:text-lg text-[#393939]">{{
          rating.label
        }}</span>
        <Stars :score="rating.value" />
      </div>
    </div>
  </section>
</template>

<script setup>
  import { onMounted, computed, ref } from "vue";
  import { useStore } from "vuex";
  import TagIcon from "../components/icons/TagIcon.vue";
  import Stars from "../components/Stars.vue";
  import { useRoute } from "vue-router";

  const store = useStore();
  const route = useRoute();

  const randomSizeIndex = ref(0);
  const randomRegionIndex = ref(0);
  const randomExpectancyIndex = ref(0);

  const randomSizes = ref([
    "Extra small",
    "Small",
    "Medium",
    "Large",
    "Extra large",
  ]);

  const randomExpectancies = ref([
    "5 - 10 years",
    "10 - 15 years",
    "15 - 25 years",
    "25+ years",
  ]);

  const randomRegions = ref([
    "West Africa",
    "South Africa",
    "Central Africa",
    "East Africa",
    "South Africa",
    "South Ameria",
    "South Asia",
    "North Asia",
    "Middle East",
    "North America",
    "South America",
    "West Europe",
    "East Europe",
    "North Europe",
  ]);

  randomSizeIndex.value = Math.floor(Math.random() * randomSizes.value.length);
  randomRegionIndex.value = Math.floor(
    Math.random() * randomRegions.value.length
  );
  randomExpectancyIndex.value = Math.floor(
    Math.random() * randomExpectancies.value.length
  );

  const cardTags = computed(() => {
    return [
      { label: "Sub breed", value: subBreed.value || "-" },
      {
        label: "Popular in",
        value: randomRegions.value[randomRegionIndex.value],
      },
      {
        label: "Life expectancy",
        value: randomExpectancies.value[randomExpectancyIndex.value],
      },
      {
        label: "Size as adult",
        value: randomSizes.value[randomSizeIndex.value],
      },
    ];
  });

  const ratings = computed(() => {
    return [
      { label: "Sociability", value: (Math.random() * 5).toFixed(1) },
      { label: "Playfulness", value: (Math.random() * 5).toFixed(1) },
      { label: "Chase-proneness", value: (Math.random() * 5).toFixed(1) },
      { label: "Aggressiveness ", value: (Math.random() * 5).toFixed(1) },
      { label: "Curiousity", value: (Math.random() * 5).toFixed(1) },
    ];
  });

  const imageSrc = computed(() => store.getters.selectedBreed[0]);
  const name = computed(
    () => store.getters.selectedBreed[0]?.split("/")[4]?.split("-")[0]
  );

  const subBreed = computed(
    () => store.getters.selectedBreed[0]?.split("/")[4]?.split("-")[1]
  );

  onMounted(async () => {
    await store.dispatch("fetchBreed", route.params.breed);
  });
</script>
