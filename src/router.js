import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import Column from "./views/Column.vue";
import Post1 from "./views/Posts/Post1.vue";
import Post2 from "./views/Posts/Post2.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/home/:id",
      component: Home,
      props: true,
      children: [
        { path: "posts1", component: Post1 },
        { path: "posts2", component: Post2 },
      ],
    },
    { path: "/about", component: About },
    { path: "/column", component: Column },
  ],
});
