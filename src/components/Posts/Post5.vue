<template>
  <div>
    <h2>{{ contents.Post5.title }}</h2>
    <p>{{ contents.Post5.date }}</p>
    <img :src="contents.Post5.img" alt="料理の写真" class="photo" />
    <!-- ↓レシピを書いてね。 -->
    <slot name="recipe"></slot>
    <p>1)ほうれん草を茹でて、3cm幅に切ります。</p>
    <p>2)調味料で和えます。</p>
    <p></p>
    <p></p>
    <!--------------------------->
    <slot name="ingredient"></slot>
    <!-- ↓材料を書いてね。 -->
    <p>水菜…1袋</p>
    <p>調味料…適量</p>
    <p></p>
    <p></p>
    <!--------------------------->
  </div>
</template>

<script>
import { postOption } from "@/postOption";

export default {
  mixins: [postOption],
};
</script>