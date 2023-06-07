<template>
  <div class="my-5">
    <div
      v-if="article"
      class="popular-article d-flex align-items-end"
      :style="{
        backgroundImage: 'url(' + article.image_url + ')',
      }"
      @click="go(article.id)"
    >
      <div class="content text-white mb-4 px-3">
        <div class="mb-3 text-left">
          <h5 class="text-uppercase">{{ article.type }}</h5>
        </div>
        <div class="text-left">
          <h3>{{ article.post_title }}</h3>
        </div>
      </div>
    </div>

    <div class="text-left mt-5">
      <h3 class="mb-4">Popular Articles</h3>
      <div v-for="(item, index) in popularArticles" :key="index">
        <PopularArticleItem :article="item" />
      </div>
    </div>
  </div>
</template>

<script>
import mixin from "@/mixin";
import PopularArticleItem from "@/components/PopularArticleItem";
export default {
  name: "PopularArticles",
  mixins: [mixin],
  data: () => ({
    image: "https://picsum.photos/800/1000/?image=99",
  }),
  props: {
    articles: {
      type: Array,
    },
  },
  computed: {
    article() {
      let articles = [...this.articles];
      return articles.filter((item) => item.type == "resources")[0];
    },
    popularArticles() {
      let articles = [...this.articles];
      let sortedArticles = articles.sort((a, b) => b.likes - a.likes);
      return sortedArticles.splice(0, 3);
    },
  },
  components: { PopularArticleItem },
};
</script>

<style lang="scss" scoped>
.popular-article {
  min-height: 320px;
  border-radius: 0.8em;
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center;
  transition: 0.8s;
  -webkit-transition: 0.8s;
  cursor: pointer;
  position: relative;

  .content {
    z-index: 2;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: #000;
    opacity: 0.3;
    z-index: 1;
    border-radius: 0.8em;
  }

  &:hover {
    background-size: 120%;
    opacity: 0.8;
    transition: 0.8s;
    -webkit-transition: 0.8s;
  }
}
</style>
