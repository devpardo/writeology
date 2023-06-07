<template>
  <div class="mt-5 mb-3 latest-item">
    <b-row align-v="center">
      <b-col cols="12" md="5">
        <div
          class="article-image mx-auto mb-sm-0 mb-3"
          :style="{ backgroundImage: 'url(' + article.image_url + ')' }"
        ></div>
      </b-col>
      <b-col cols="12" md="7">
        <div class="article-content px-2">
          <h5 class="text-uppercase text-muted">{{ article.type }}</h5>
          <h4>
            <strong>
              {{ article.post_title }}
            </strong>
          </h4>
          <p>{{ article.post_body }}</p>

          <div class="d-flex mb-3">
            <div class="mr-5 d-flex align-items-center">
              <strong class="mr-1"
                ><b-avatar
                  :src="article.user.user_image"
                  class="mr-1"
                ></b-avatar
              ></strong>
              <strong>{{ article.user.user_name }}</strong>
            </div>
            <div class="d-flex align-items-center">
              <b-icon-clock font-scale="1.5" class="mr-2"></b-icon-clock>
              <strong>{{
                moment(article.post_created_date).format("LL")
              }}</strong>
            </div>
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

.latest-item {
  &:hover {
    cursor: pointer;
    transition: 0.8s;
    -webkit-transition: 0.8s;

    .article-content {
      padding-left: 1em;
      transition: 0.8s;
      -webkit-transition: 0.8s;
      opacity: 0.8;
    }

    .article-image {
      background-size: 120%;
      opacity: 0.8;
      transition: 0.8s;
      -webkit-transition: 0.8s;
    }
  }
  .article-content {
    transition: 0.8s;
  }
  .article-image {
    background-position: center;
    background-size: 100%;
    border-radius: 0.8em;
    height: 300px;
    width: 100%;
    transition: 0.8s;

    @media (min-width: $breakpoint-mobile) {
      width: 100%;
    }
  }
}
</style>
