import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import UserDashboardLayout from "../layouts/UserDashboardLayout.vue";
import ApplicationView from "../views/ApplicationView.vue"
//import AssessmentView from "../views/AssessmentView.vue"
import UserDashboardView from "../views/users/UserDashboardView.vue"
import QuestionView from "../views/users/QuestionView.vue"
import SignUpView from "../views/SignUpView.vue";
import LogInView from "../views/LogInView.vue";
// admin
//import AdminDashboardLayout from "../layouts/AdminDashboardLayout.vue";
import AdminLoginView from "../views/admin/AdminLoginView.vue";
import AdminDashboardView from "../views/admin/AdminDashboardView.vue";
//import CreatAppView from "../views/CreatAppView.vue";
//import ApplicationEntriesView from "../views/ApplicationEntriesView.vue";
// import ComposeAssessmentView from "../views/ComposeAssessmentView.vue";
// import AssessmentHistoryView from "../views/AssessmentHistoryView.vue";
// import AssessmentResultView from "../views/AssessmentResultView.vue";
//import SettingsView from "../views/SettingsView.vue";


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
      path: "/SignUp",
      name: "SignUp",
      component: SignUpView,
    },
    {
      path: "/LogIn",
      name: "LogIn",
      component: LogInView,
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
          path: "/signup",
          name: "signup",
          component: AdminLoginView
        },
        {
          path: "/adminDashboard",
          name: "Admindashboard",
          component: AdminDashboardView
        },
        // {
        //   path: "/create-application",
        //   name: "createApp",
        //   component: CreateAppView
        // },
        // {
        //   path: "/application-entries",
        //   name: "applicationentries",
        //   component: ApplicationEntriesView
        // },
        // {
        //   path: "/compose-assessment",
        //   name: "composeassessment",
        //   component: ComposeAssessmentView
        // },
        // {
        //   path: "/assessment-history",
        //   name: "assessmentHistory",
        //   component: AssessmentHistoryView
        // },
        // {
        //   path: "/assessment-result",
        //   name: "assessmentResult",
        //   component: AssessmentResultView
        // },
        // {
        //   path: "/profile-settings",
        //   name: "settings",
        //   component: settingsView
        // },
      ],
    },
  ],
},
);

export default router;
