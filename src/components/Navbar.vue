<template>
  <nav class="navbar navbar-expand-lg bg-primary fixed-top">
    <div class="container">
      <!-- <img src="" id="brandLogo" href="#" /> -->
      <router-link :to="{ name: 'home' }" id="brandLogo"> Home </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasNavbar"
        aria-controls="offcanvasNavbar">
        <a class="navbar-toggler-icon"></a>
      </button>
      <div
        class="offcanvas offcanvas-end"
        tabIndex="-1"
        style="width: 50%"
        id="offcanvasNavbar"
        aria-labelledby="offcanvasNavbarLabel">
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Dog Apps</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
          <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
            <li class="nav-item my-2">
              <router-link class="my-3 mx-2" :to="{ name: 'detail' }">
                Detail
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
  import { RouterLink } from "vue-router";
</script>

<style scoped>
  a {
    text-decoration: none;
    color: black;
  }
  .navbar-toggler {
    border: none;
  }
</style>
