<template>
  <div class="wrapper d-flex py-5">
    <b-container>
      <b-row class="no-gutters mb-5" align-v="start">
        <b-col cols="12" md="7">
          <FeaturedArticle :article="featuredArticle" />
        </b-col>
        <b-col cols="12" md="5">
          <FeaturedArticles :articles="articles" />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import FeaturedArticles from "@/components/FeaturedArticles";
import FeaturedArticle from "@/components/FeaturedArticle";

export default {
  name: "JumbotronComponent",
  components: {
    FeaturedArticles,
    FeaturedArticle,
  },
  props: {
    articles: {
      type: Array,
      required: true,
    },
  },
  computed: {
    featuredArticle() {
      return this.articles.find((item) => item.is_featured);
    },
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  min-height: 450px;
}
</style>
