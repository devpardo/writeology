<template>
  <div class="mb-3">
    <b-row>
      <b-col cols="12" md="5">
        <div
          class="article-image mx-auto"
          :style="{ backgroundImage: 'url(' + article.image_url + ')' }"
        ></div>
      </b-col>
      <b-col cols="12" md="7">
        {{ moment(article.post_created_date).format("LL") }}
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: "LatestArticleItem",
  props: {
    article: {
      required: true,
      type: Object,
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/_custom.scss";
.article-image {
  background-position: center;
  border-radius: 0.8em;
  height: 300px;
  width: 100%;

  @media (min-width: $breakpoint-mobile) {
    width: 100%;
  }
}
</style>
