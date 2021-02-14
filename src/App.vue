<template>
  <div>
    <router-view name="header"> </router-view>
    <transition name="fade" mode="out-in">
      <router-view> </router-view>
    </transition>
  </div>
</template>

<script>
export default {
  methods: {
    toHome() {
      this.$router.push("/home/index");
    },
  },
};
</script>

<style>
* {
  text-align: center;
}
</style>

<style scoped>
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.1s;
}
</style>
