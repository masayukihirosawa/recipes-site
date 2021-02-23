<template>
  <div>
    <router-view>
      <template #recipe>
        <h3>つくり方</h3>
        <hr />
      </template>
      <template #ingredient>
        <h3>材料</h3>
        <hr />
      </template>
    </router-view>
  </div>
</template>

<style>
.photo {
  width: 500px;
}
</style>
