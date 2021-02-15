<template>
  <div>
    <router-view name="header"></router-view>
    <router-view></router-view>
    <div class="space"></div>
  </div>
</template>

<style>
* {
  text-align: center;
  background-color: floralwhite;
}

.space {
  height: 500px;
}
</style>
