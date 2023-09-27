import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import UserDashboardLayout from "../layouts/UserDashboardLayout.vue";
import SignUpView from "../views/SignUpView.vue";
import LogInView from  "../views/LogInView.vue"
import UserDashboardView from "../views/UserDashboardView.vue"
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
      path: "/SignUp",
      name: "SignUp",
      component: SignUpView,
    },
    

    {
      path: "/LogIn",
      name: "LogIn",
      component: LogInView,
    },
  

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
