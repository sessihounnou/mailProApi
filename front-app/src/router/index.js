import { createWebHistory, createRouter } from "vue-router";
import noAuth from "../layout/noAuth.vue";
// component or view
import register from "../views/register.vue";
import login from "../views/login.vue";
import info from "../views/info.vue";
import plan from "../views/plan.vue"
const routes = [
  {
    path: "/register",
    name: "Register",
    component: register,
    meta: { layout: noAuth, public: true },
  },
  {
    path: "/offers",
    name: "offers",
    component: plan,
    meta: { layout: noAuth, public: true },
  },
  {
    path: "/login",
    name: "Login",
    component: login,
    meta: { layout: noAuth, public: true },
  },
  {
    path: "/info",
    name: "Info",
    component: info,
    meta: { layout: noAuth, public: true },
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
