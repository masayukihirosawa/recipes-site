<template>
  <div>
    <!-- <slot name="title" :contents="contents"></slot> -->
    <h2>{{ contents.Post3.title }}</h2>
    <p>{{ contents.Post3.date }}</p>
    <img :src="contents.Post3.img" alt="料理の写真" class="photo" />
    <slot name="recipe"></slot>
    <!-- ↓レシピを書いてね。 -->
    <p>1)菊菜を3cm幅に切ります。</p>
    <p>2)ドレッシングをかけます。</p>
    <p></p>
    <p></p>
    <!-- ↑レシピを書いてね。 -->
    <slot name="ingredient"></slot>
    <!-- ↓材料を書いてね。 -->
    <p>菊菜…1袋</p>
    <p>ドレッシング…適量</p>
    <p></p>
    <p></p>
    <!-- ↑材料を書いてね。 -->
  </div>
</template>

<script>
import { postOption } from "@/postOption";

export default {
  mixins: [postOption],
};
</script>
