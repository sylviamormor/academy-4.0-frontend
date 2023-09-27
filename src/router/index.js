import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import UserDashboardLayout from "../layouts/UserDashboardLayout.vue";
import UserDashboardView from "../views/users/UserDashboardView.vue"

import QuestionView from "../views/users/QuestionView.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/signin",
      name: "sign in",
      component: HomeView, //change path name
    },
    
    /*
     * USER ROUTES
     */
    {
      path: "/",
      component: UserDashboardLayout,
      children: [
        {
          path: "/dashboard",
          name: "dashboard",
          component: UserDashboardView,
        },
        {
          path: "/question",
          name: "question",
          component: QuestionView,
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
