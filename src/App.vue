<template>
  <div class="box">
    <router-view name="header"></router-view>
    <!-- <transition name="fade" mode="out-in"> -->
    <router-view></router-view>
    <!-- </transition> -->
    <div class="space"></div>
  </div>
</template>

<style scoped>
* {
  text-align: center;
  margin: 0 auto;
  box-sizing: border-box;
}

/* .box {
  margin: 0 auto;
} */

@media (min-width: 1000px) {
  .box {
    width: 80%;
  }
}

/* .space {
  height: 1000px;
} */
</style>
