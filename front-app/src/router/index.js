import { createWebHistory, createRouter } from "vue-router";
import noAuth from "../layout/noAuth.vue";
// component or view
import register from "../views/register.vue";
import login from "../views/login.vue";
const routes = [
  {
    path: "/register",
    name: "Register",
    component: register,
    meta: { layout: noAuth, public: true },
  },
  {
    path: "/login",
    name: "Login",
    component: login,
    meta: { layout: noAuth, public: true },
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
