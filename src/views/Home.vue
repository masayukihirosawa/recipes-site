<template>
  <div>
    <h2>レシピ一覧</h2>
    <transition name="fade" appear>
      <ul>
        <li @click="toPost1">水菜のレシピ</li>
        <li @click="toPost2">ほうれん草のレシピ</li>
        <li @click="toPost3">菊菜のレシピ</li>
      </ul>
    </transition>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  props: ["id"],
  methods: {
    toPost1() {
      this.$router.push("home/post");
    },
    toPost2() {
      this.$router.push("home/post");
    },
    toPost3() {
      this.$router.push("home/post");
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

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}
</style>