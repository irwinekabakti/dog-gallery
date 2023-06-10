import { createRouter, createWebHistory } from "vue-router";
import RootLayout from "./RootLayout/RootLayout.vue";

const HomeView = () => import("../views/HomeView.vue");
const SearchView = () => import("../views/SearchView.vue");
const AboutView = () => import("../views/AboutView.vue");

const routes = [
  {
    path: "/",
    component: RootLayout,
    children: [
      {
        path: "/",
        name: "home",
        component: HomeView,
      },
      {
        path: "/searchDog",
        name: "searchDog",
        component: SearchView,
      },
      {
        path: "/about/:breed",
        name: "about",
        component: AboutView,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
