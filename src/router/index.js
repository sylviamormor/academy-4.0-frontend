import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import UserDashboardLayout from "../layouts/UserDashboardLayout.vue";
import ApplicationView from "../views/ApplicationView.vue";
import AssessmentView from "../views/AssessmentView.vue";
import UserDashboardView from "../views/users/UserDashboardView.vue";
import QuestionView from "../views/users/QuestionView.vue";
import SignUpView from "../views/SignUpView.vue";
import LogInView from "../views/LogInView.vue";
import ResultView from "../views/ResultView.vue";
// import ResultView from "../views/ResultView.vue"
// admin
import AdminDashboardLayout from "../layouts/AdminDashboardLayout.vue";
import AdminLoginView from "../views/admin/AdminLoginView.vue";
import AdminDashboardView from "../views/admin/AdminDashboardView.vue";
import CreateAppView from "../views/admin/CreateAppView.vue";
import ApplicationEntriesView from "../views/admin/ApplicationEntriesView.vue";
import ComposeAssessmentView from "../views/admin/ComposeAssessmentView.vue";
import AssessmentHistoryView from "../views/admin/AssessmentHistoryView.vue";
import AssessmentResultView from "../views/admin/AssessmentResultView.vue";
import SettingsView from "../views//admin/SettingsView.vue";

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
        {
          path: "/assessment",
          name: "assessment",
          component: AssessmentView,
        },
        {
          path: "/result",
          name: "result",
          component: ResultView,
        },
      ],
    },
    
    /*
     * ADMIN ROUTES
     */
    
    {
      path: "/adminlogin",
      name: "adminlogin",
      component: AdminLoginView,
    },
    {
      path: "/admin",
      component: AdminDashboardLayout,
      children: [
        // {
        //   path: "login",
        //   meta: {
        //     noAuth: true,
        //   },
        // },

        {
          path: "/adminDashboard",
          name: "admindashboard",
          component: AdminDashboardView,
        },
        {
          path: "/createapp",
          name: "createapp",
          component: CreateAppView,
        },
        {
          path: "/applicationentries",
          name: "applicationentries",
          component: ApplicationEntriesView,
        },
        {
          path: "/compose-assessment",
          name: "composeassessment",
          component: ComposeAssessmentView,
        },
        {
          path: "/assessment-history",
          name: "assessmentHistory",
          component: AssessmentHistoryView,
        },
        {
          path: "/assessment-result",
          name: "assessmentResult",
          component: AssessmentResultView,
        },
        {
          path: "/profile-settings",
          name: "settings",
          component: SettingsView,
        },
      ],
    },
  ],
});

export default router;
