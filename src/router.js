import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import Column from "./views/Column.vue";
import Post1 from "./views/Posts/Post1.vue";
import Post2 from "./views/Posts/Post2.vue";
import Post3 from "./views/Posts/Post3.vue";
import Index from "./views/Posts/Index.vue";
import Header from "./views/Header.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/home",
      components: {
        default: Home,
        header: Header,
      },
      props: true,
      children: [
        { path: "index", component: Index },
        { path: "post1", component: Post1 },
        { path: "post2", component: Post2 },
        { path: "post3", component: Post3 },
      ],
    },
    {
      path: "/about",
      components: {
        default: About,
        header: Header,
      },
    },
    {
      path: "/column",
      components: {
        default: Column,
        header: Header,
      },
    },
  ],
});
