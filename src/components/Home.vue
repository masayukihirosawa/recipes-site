<template>
  <div>
    <h2>レシピ一覧</h2>
    <ul @click="toPost1" >
      <li>{{ contents.Post1.title }}</li>
      <li>{{ contents.Post1.date }}</li>
      <img :src="contents.Post1.img" alt="料理の写真" class="photo" />
    </ul>
    <ul @click="toPost2">
      <li>{{ contents.Post2.title }}</li>
      <li>{{ contents.Post2.date }}</li>
      <img :src="contents.Post2.img" alt="料理の写真" class="photo" />
    </ul>
    <ul @click="toPost3">
      <li>{{ contents.Post3.title }}</li>
      <li>{{ contents.Post3.date }}</li>
      <img :src="contents.Post3.img" alt="料理の写真" class="photo" />
    </ul>
    <ul @click="toPost4" >
      <li>{{ contents.Post4.title }}</li>
      <li>{{ contents.Post4.date }}</li>
      <img :src="contents.Post4.img" alt="料理の写真" class="photo" />
    </ul>
    <ul @click="toPost5">
      <li>{{ contents.Post5.title }}</li>
      <li>{{ contents.Post5.date }}</li>
      <img :src="contents.Post5.img" alt="料理の写真" class="photo" />
    </ul>
    <ul @click="toPost6">
      <li>{{ contents.Post6.title }}</li>
      <li>{{ contents.Post6.date }}</li>
      <img :src="contents.Post6.img" alt="料理の写真" class="photo" />
    </ul>
  </div>
</template>

<script>
import { postOption } from "@/postOption";

export default {
  mixins: [postOption],
  methods: {
    toPost1() {
      this.$router.push("home/post/1");
    },
    toPost2() {
      this.$router.push("home/post/2");
    },
    toPost3() {
      this.$router.push("home/post/3");
    },
    toPost4() {
      this.$router.push("home/post/4");
    },
    toPost5() {
      this.$router.push("home/post/5");
    },
    toPost6() {
      this.$router.push("home/post/6");
    },
  },
};
</script>

<style scoped>
ul {
  padding-inline-start: 0px;
  cursor: pointer;
  display: inline-block;
  margin: 20px;
}

li {
  list-style: none;
}
.photo {
  width: 250px;
}
</style>
