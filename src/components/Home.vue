<template>
  <div>
    <h2>レシピ一覧</h2>
    <ul @click="toPost1">
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
  },
};
</script>

<style scoped>
ul {
  padding-inline-start: 0px;
}

li {
  list-style: none;
  display: inline-block;
  margin: 20px;
  background-color: #529ecc;
}
.photo {
  width: 200px;
}
</style>
