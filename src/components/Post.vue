<template>
  <div>
    <Post1>
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
    </Post1>
  </div>
</template>

<script>
import Post1 from "./Posts/Post1.vue";

export default {
  components: {
    Post1,
  },
};
</script>

<style>
.photo {
  width: 500px;
}
</style>
