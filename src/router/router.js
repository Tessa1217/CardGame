import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "GameHome",
    component: () => import("@/components/layout/GameHome.vue"),
  },
  {
    path: "/games",
    name: "GameList",
    component: () => import("@/components/game/GameList.vue"),
  },
  {
    path: "/level/:gameName",
    name: "GameLevel",
    component: () => import("@/components/game/GameLevel.vue"),
  },
  {
    path: "/color/:level",
    name: "Color",
    component: () => import("@/components/color/ColorGame.vue"),
  },
  {
    path: "/order/:level",
    name: "Order",
    component: () => import("@/components/order/OrderGame.vue"),
  },
  {
    path: "/number/:level",
    name: "Number",
    component: () => import("@/components/number/NumberGame.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
export default router;
