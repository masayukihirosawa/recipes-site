<template>
  <div>
    <!-- <Post1> -->
    <!-- <component :is="'Post1'">
      <template #title="slotProps">
        <h2>{{ slotProps.contents.title }}</h2>
        <p>{{ slotProps.contents.postedData }}</p>
      </template>
      <template #recipe>
        <h3>つくり方</h3>
        <hr />
      </template>
      <template #ingredient>
        <h3>材料</h3>
        <hr />
      </template>
    </component> -->
    <!-- </Post1> -->
    <router-view>
      <template #title="slotProps">
        <h2>{{ slotProps.contents.title }}</h2>
        <p>{{ slotProps.contents.postedData }}</p>
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

// <script>
// import Post1 from "./Posts/Post1.vue";
// import Post2 from "./Posts/Post2.vue";
// import Post3 from "./Posts/Post3.vue";

// export default {
//   components: {
//     Post1,
//     Post2,
//     Post3,
//   },
// };
// </script>

<style>
.photo {
  width: 500px;
}
</style>
