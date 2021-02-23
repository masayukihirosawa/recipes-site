<template>
  <div class="box">
    <router-view name="header"></router-view>
    <!-- <transition name="fade" mode="out-in"> -->
      <router-view></router-view>
    <!-- </transition> -->
    <div class="space"></div>
  </div>
</template>

<style>
* {
  text-align: center;
  background-color: floralwhite;
}

.box {
  width: 900px;
  margin: 0 auto;
}

.space {
  height: 1000px;
}

/* .fade-enter,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.1s;
} */
</style>
