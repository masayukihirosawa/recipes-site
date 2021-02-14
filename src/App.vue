<template>
  <div>
    <router-view name="header"> </router-view>
    <router-view> </router-view>
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
