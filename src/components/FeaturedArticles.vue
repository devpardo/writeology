<template>
  <div class="px-0 px-sm-5 featured-articles">
    <div
      v-for="(item, index) in topArticles"
      :key="index"
      class="article-card d-flex flex-column"
    >
      <FeaturedArticleItem :article="item" />
    </div>
  </div>
</template>

<script>
import FeaturedArticleItem from "@/components/FeaturedArticleItem";

export default {
  name: "FeaturedArticles",
  components: {
    FeaturedArticleItem,
  },
  props: {
    articles: {
      required: true,
      type: Array,
      default: () => [],
    },
  },
  computed: {
    topArticles() {
      return this.articles.filter((item) => !item.is_featured).splice(0, 3);
    },
  },
};
</script>

<style scoped lang="scss">
.featured-articles {
  height: 350px;
  padding-left: 3em;
  @media (min-width: 768px) {
    height: 450px;
  }
}
.article-card {
  height: calc(100% / 3);
}
</style>
