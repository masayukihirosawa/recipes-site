<template>
  <div>
    <router-view>
      <template #title="slotProps">
        <h2>{{ slotProps.contents.Post1.title }}</h2>
        <p>{{ slotProps.contents.Post1.date }}</p>
        <img :src="slotProps.contents.Post1.img" alt="料理の写真" class="photo" />
      </template>
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
