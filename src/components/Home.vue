<template>
  <div>
    <h2>レシピ一覧</h2>
    <ul>
      <div v-for="(content, key) in contents" :key="key">
        <template>
          <li>{{ content.title }}</li>
          <li>{{ content.date }}</li>
          <img :src="content.img" alt="料理の写真" class="photo" />
        </template>
      </div>
      <!-- <li @click="toPost1">{{ contents.Post1.title }}</li> -->
      <!-- <img :src="contents.Post1.img" alt="料理の写真" class="photo" /> -->
      <!-- <li @click="toPost2">ほうれん草のレシピ</li>
      <li @click="toPost3">菊菜のレシピ</li> -->
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
