import Vue from "vue";
import Router from "vue-router";

const Home = () => import(/* webpackChunkName: "Home" */ "./views/Home.vue");
const About = () => import(/* webpackChunkName: "About" */ "./views/About.vue");
const Column = () =>
  import(/* webpackChunkName: "Column" */ "./views/Column.vue");
const Post1 = () =>
  import(/* webpackChunkName: "Post1" */ "./views/Posts/Post1.vue");
const Post2 = () =>
  import(/* webpackChunkName: "Post2" */ "./views/Posts/Post2.vue");
const Post3 = () =>
  import(/* webpackChunkName: "Post3" */ "./views/Posts/Post3.vue");
const Index = () =>
  import(/* webpackChunkName: "Index" */ "./views/Posts/Index.vue");
const Header = () =>
  import(/* webpackChunkName: "Header" */ "./views/Header.vue");
const Post = () => import(/* webpackChunkName: "Post" */ "./views/Post.vue");

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
        post: Post,
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
    {
      path: "/*",
      redirect: "/home/index",
    },
  ],
});
