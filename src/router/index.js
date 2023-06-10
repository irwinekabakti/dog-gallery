import { createRouter, createWebHistory } from "vue-router";
import RootLayout from "./RootLayout/RootLayout.vue";

const HomeView = () => import("../views/HomeView.vue");
const SearchView = () => import("../views/SearchView.vue");
const DetailView = () => import("../views/DetailView.vue");

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
        path: "/detail/:breed",
        name: "about",
        component: DetailView,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
