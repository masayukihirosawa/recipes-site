import Vue from "vue";
import Router from "vue-router";

const Home = () =>
  import(/* webpackChunkName: "Home" */ "./components/Home.vue");
const About = () =>
  import(/* webpackChunkName: "About" */ "./components/About.vue");
const Column = () =>
  import(/* webpackChunkName: "Column" */ "./components/Column.vue");
const Post1 = () =>
  import(/* webpackChunkName: "Post1" */ "./components/Posts/Post1.vue");
const Post2 = () =>
  import(/* webpackChunkName: "Post2" */ "./components/Posts/Post2.vue");
const Post3 = () =>
  import(/* webpackChunkName: "Post3" */ "./components/Posts/Post3.vue");
const Header = () =>
  import(/* webpackChunkName: "Header" */ "./components/Header.vue");
const Post = () =>
  import(/* webpackChunkName: "Post" */ "./components/Post.vue");

//↑遅延ローディング

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
    },
    {
      path: "/home/post",
      components: {
        default: Post,
        header: Header,
      },
      children: [
        { path: "1", component: Post1 },
        { path: "2", component: Post2 },
        { path: "3", component: Post3 },
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
    {
      path: "/*",
      redirect: "/home",
    },
  ],
  
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
  
});
