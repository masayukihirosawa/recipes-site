<template>
  <div>
    <h2>レシピ一覧</h2>
    <ul>
      <li @click="toPost1">水菜のレシピ</li>
      <li @click="toPost2">ほうれん草のレシピ</li>
      <li @click="toPost3">菊菜のレシピ</li>
    </ul>
    <div class="space"></div>
  </div>
</template>

<script>
export default {
  methods: {
    toPost1() {
      this.$router.push("/home/post1");
    },
    toPost2() {
      this.$router.push("/home/post2");
    },
    toPost3() {
      this.$router.push("/home/post3");
    },
  },
};
</script>

<style scoped>
li {
  list-style: none;
  display: inline-block;
  width: 20%;
  padding: 55px 0;
  margin: 20px;
  background-color: #529ecc;
}

.space {
  height: 1000px;
}
</style>
