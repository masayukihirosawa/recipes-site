<template>
  <div class="box">
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

.box{
  width: 900px;
  margin: 0 auto;
}

.space {
  height: 500px;
}
</style>
