import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    Post1: {
      title: "水菜のサラダ",
      date: "2021/2/19",
    },
  },
});
