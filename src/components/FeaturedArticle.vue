<template>
  <div
    v-if="article"
    class="featured-article text-white d-flex align-items-end"
    v-bind:style="{ backgroundImage: 'url(' + article.image_url + ')' }"
  >
    <div class="w-100 text-left">
      <b-button
        class="mb-4 text-uppercase bg-white py-2 border-0 text-dark"
        size="sm"
        ><strong>{{ article.type }}</strong></b-button
      >
      <div>
        <h2>
          <strong>{{ article.post_title }}</strong>
        </h2>
      </div>

      <div class="d-flex mb-3">
        <div class="mr-5 d-flex align-items-center">
          <strong class="mr-1"
            ><b-avatar :src="article.user.user_image" class="mr-1"></b-avatar
          ></strong>
          <strong>{{ article.user.user_name }}</strong>
        </div>
        <div class="d-flex align-items-center">
          <b-icon-clock font-scale="1.5" class="mr-2"></b-icon-clock>
          <strong>{{ moment(article.created_date).format("LL") }}</strong>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FeaturedArticle",
  props: {
    article: {
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/custom.scss";

.featured-article {
  height: 350px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100%;
  padding: 1em;
  transition: 0.5s;
  -webkit-transition: 0.5s;
  cursor: pointer;
  width: 100%;
  margin: 0 auto;
  border-radius: 0.8em;

  @media (min-width: $breakpoint-mobile) {
    height: 450px;
  }

  &:hover {
    background-size: 120%;
    transition: 0.8s;
    -webkit-transition: 0.8s;
    width: 95%;
    height: 440px;
  }
}
</style>
