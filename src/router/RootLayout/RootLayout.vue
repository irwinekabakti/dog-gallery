<template>
  <div class="container overflow-x-hidden">
    <Navbar />
    <main>
      <RouterView />
    </main>
  </div>
</template>

<script setup>
  import { RouterView } from "vue-router";

  import Navbar from "../../components/Navbar.vue";
</script>

<style scoped></style>
