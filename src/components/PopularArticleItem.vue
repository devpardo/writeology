<template>
  <div class="mb-5 popular-item">
    <b-row align-v="center">
      <b-col cols="5">
        <div
          v-bind:style="{ backgroundImage: 'url(' + article.image_url + ')' }"
          class="popular-item-image bg-info"
        ></div>
      </b-col>
      <b-col cols="7">
        <div class="popular-item-content">
          <h5>
            <strong>{{ article.post_title }}</strong>
          </h5>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: "PopularArticleItem",
  props: {
    article: {
      type: Object,
    },
  },
};
</script>

<style lang="scss" scoped>
.popular-item {
  cursor: pointer;
  .popular-item-image {
    height: 120px;
    border-radius: 0.8em;
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100%;
    transition: 0.8s;
  }

  .popular-item-content {
    opacity: 1;
    transition: 0.8s;
  }

  &:hover {
    .popular-item-image {
      background-size: 110%;
      transition: 0.8s;
    }

    .popular-item-content {
      transition: 0.8s;
      opacity: 0.8;
    }
  }
}
</style>
