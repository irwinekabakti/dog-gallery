import { createRouter, createWebHistory } from "vue-router";

import RootLayout from "./RootLayout/RootLayout.vue";
const Home = () => import("../views/HomeView.vue");
const Detail = () => "../views/DetailView.vue";

const routes = [
  {
    path: "/",
    component: RootLayout,
    children: [
      {
        path: "/",
        name: "home",
        component: Home,
      },
      {
        path: "/detail",
        name: "detail",
        component: Detail,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
