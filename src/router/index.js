import Vue from "vue";
import VueRouter from "vue-router";
import dash from "../views/Dashboard.vue";
import Team from "../views/Team.vue";
import projects from "../views/Projects.vue";
import quiz from "../views/Quiz.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Dashboard",
    component: dash,
  },
  {
    path: "/team",
    name: "Team",
    component: Team,
  },
  {
    path: "/projects",
    name: "Projects",
    component: projects,
  },
  {
    path: "/quiz",
    name: "Quiz",
    component: quiz,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
