import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import UserDashboardLayout from "../layouts/UserDashboardLayout.vue";
import ApplicationView from "../views/ApplicationView.vue"
import AssessmentView from "../views/AssessmentView.vue"
import UserDashboardView from "../views/users/UserDashboardView.vue"
import QuestionView from "../views/users/QuestionView.vue"
import SignUpView from "../views/SignUpView.vue";
import LogInView from  "../views/LogInView.vue"


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
    {
      path: "/application",
      name: "application",
      component: ApplicationView,
    },

    {
      path: "/assessment",
      name: "assessment",
      component: AssessmentView
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
