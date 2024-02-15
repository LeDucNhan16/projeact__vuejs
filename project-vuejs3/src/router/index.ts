import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/top-best-selling-cars",
      name: "top-best-selling-cars",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/TopBestSellingCars.vue"),
    },
    {
      path: "/tax-incentives",
      name: "tax-incentives",

      component: () => import("../views/TaxIncentives.vue"),
    },
    {
      path: "/service-car",
      name: "service-car",

      component: () => import("../views/ServiceCarView.vue"),
    },
  ],
});

export default router;
