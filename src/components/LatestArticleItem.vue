<template>
  <div class="mb-3">
    <b-row align-v="center">
      <b-col cols="12" md="5">
        <div
          class="article-image mx-auto mb-sm-0 mb-3"
          :style="{ backgroundImage: 'url(' + article.image_url + ')' }"
        ></div>
      </b-col>
      <b-col cols="12" md="7">
        <h5 class="text-uppercase text-muted">{{ article.type }}</h5>
        <h4>
          <strong>
            {{ article.post_title }}
          </strong>
        </h4>
        <p>{{ article.post_body }}</p>

        <div class="d-flex">
          <div class="mr-3">dasdasdasd</div>
          <div>
            {{ moment(article.post_created_date).format("LL") }}
          </div>
        </div>
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
