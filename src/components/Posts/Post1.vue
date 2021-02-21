<template>
  <div>
    <slot name="title" :contents="contents"></slot>
    <slot name="recipe"></slot>
    <!-- ↓レシピを書いてね。 -->
    <p>1)水菜を3cm幅に切ります。</p>
    <p>2)ドレッシングをかけます。</p>
    <p></p>
    <p></p>
    <!-- ↑レシピを書いてね。 -->
    <slot name="ingredient"></slot>
    <!-- ↓材料を書いてね。 -->
    <p>水菜…1袋</p>
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
