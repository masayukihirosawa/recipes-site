<template>
  <div>
    <slot name="title" :contents="contents"></slot>
    <img src="../../assets/Post/Post1-1.jpeg" alt="料理の写真" class="photo" />
    <slot name="recipe"></slot>
    <!-- ↓レシピを書いてね。 -->
    <p>1)ほうれん草を3cm幅に切ります。</p>
    <p>2)ドレッシングをかけます。</p>
    <p></p>
    <p></p>
    <!-- ↑レシピを書いてね。 -->
    <slot name="ingredient"></slot>
    <!-- ↓材料を書いてね。 -->
    <p>ほうれん草…1袋</p>
    <p>ドレッシング…適量</p>
    <p></p>
    <p></p>
    <!-- ↑材料を書いてね。 -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      // ↓レシピ名と投稿日を書いてね。
      contents: {
        title: "ほうれん草のサラダ",
        postedData: "2021/2/20",
      },
    };
  },
};
</script>