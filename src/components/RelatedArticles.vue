<template>
  <div class="related-articles mb-5 border-bottom">
    <b-container>
      <div class="d-sm-flex align-items-center w-100 mb-5">
        <h3 class="m-0">Related Articles</h3>
        <b-button
          @click="goHome"
          size="lg"
          variant="dark"
          class="ml-sm-auto mt-sm-0 mt-3"
          >Browse all articles</b-button
        >
      </div>

      <b-row>
        <b-col
          cols="12"
          md="4"
          v-for="(article, index) in relatedArticles"
          :key="index"
        >
          <PremiumContentItem :article="article" />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import PremiumContentItem from "./PremiumContentItem.vue";

export default {
  name: "RelatedArticles",
  props: {
    articles: {
      type: Array,
    },
  },
  computed: {
    relatedArticles() {
      let articles = [...this.articles];
      let related = articles.filter(
        (item) => item.id !== this.$route.params.id
      );
      return related.splice(0, 3);
    },
  },
  methods: {
    goHome() {
      this.$router.push({ path: "/" });
    },
  },
  components: { PremiumContentItem },
};
</script>

<style>
.related-articles {
  padding: 10em 0;
}
</style>
