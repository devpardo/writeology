<template>
  <div
    class="featured-article"
    v-bind:style="{ backgroundImage: 'url(' + article.image_url + ')' }"
  >
    <div>lorem</div>
  </div>
</template>

<script>
export default {
  name: "FeaturedArticle",
  props: {
    article: {
      required: true,
      type: Object,
    },
  },
};
</script>

<style lang="scss" scoped>
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

  @media (min-width: 768px) {
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
