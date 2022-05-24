import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import ProfileView from "../views/ProfileView.vue";
import PostView from "../views/PostView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/profile/:id",
    name: "profile",
    component: ProfileView,
  },
  {
    path: "/post/:id",
    name: "post",
    component: PostView,
  },
];

const router = new VueRouter({
  // mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    document.getElementById("app").scrollIntoView({ behavior: "smooth" });
  },
});

export default router;
