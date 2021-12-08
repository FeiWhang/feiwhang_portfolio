import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/Home.vue"),
  },
  {
    path: "/about",
    name: "About",
    component: () => import("@/views/About.vue"),
  },
  {
    path: "/portfolio",
    name: "Portfolio",
    component: () => import("@/views/About.vue"),
  },
  {
    path: "/tools",
    name: "Tools",
    component: () => import("@/views/About.vue"),
  },
  {
    path: "/contact",
    name: "Contact",
    component: () => import("@/views/About.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
