import dashboardLayout from "../layout/dashboardLayout.vue";
import register from "../components/register.vue";
const routes = [
  {
    path: "/register",
    name: "register",
    component: register,
    meta: { layout: dashboardLayout, public: true },
  },
];
export default routes;
