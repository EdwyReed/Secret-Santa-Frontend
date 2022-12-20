import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("@/views/HomeView.vue"),
  },
  {
    path: "/sign-in",
    name: "sign-in",
    component: () => import("@/views/SignInView.vue"),
  },
  {
    path: "/choose-role",
    name: "choose-role",
    component: () => import("@/views/ChooseRoleView.vue"),
  },
  {
    path: "/pass-survey",
    name: "pass-survey",
    component: () => import("@/views/SurveyView.vue"),
  },
  {
    path: "/survey-success",
    name: "survey-success",
    component: () => import("@/views/SuccessSurveyView.vue"),
  },
  {
    path: "/send-gift",
    name: "send-gift",
    component: () => import("@/views/SendGiftView.vue"),
  },
  {
    path: "/my-sendings",
    name: "my-sendings",
    component: () => import("@/views/SendingsView.vue"),
  },
  {
    path: "/confirm-sending",
    name: "confirm-sending",
    component: () => import("@/views/ConfirmSendingView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
