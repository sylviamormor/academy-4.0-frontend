import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import UserDashboardLayout from "../layouts/UserDashboardLayout.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    /*
     * USER ROUTES
     */
    {
      path: "/",
      component: UserDashboardLayout,
      children: [
        {
          path: "dashboard",
        },
        {
          path: "assessment",
        },
      ],
    },
    /*
     * ADMIN ROUTES
     */
    {
      path: "/admin",
      component: UserDashboardLayout,
      children: [
        {
          path: "login",
          meta: {
            noAuth: true,
          },
        },
        {
          path: "dashboard",
        },
        {
          path: "create-application",
        },
      ],
    },
  ],
});

export default router;
