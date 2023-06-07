<template>
  <div
    class="mb-3 border-bottom py-3 text-left d-flex flex-column item-card"
    @click="go(article.id)"
  >
    <h5 class="text-muted">
      {{ article.type }}
    </h5>

    <h3 class="">
      {{ article.post_title }}
    </h3>
  </div>
</template>

<script>
import mixin from "@/mixin";
export default {
  name: "FeaturedArticleItem",
  mixins: [mixin],
  props: {
    article: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss">
.item-card {
  cursor: pointer;
  transition: 0.8s;
  -webkit-transition: 0.8s;

  &:hover {
    padding-left: 1em;
    transition: 0.8s;
    -webkit-transition: 0.8s;
    opacity: 0.8;
  }

  h5 {
    text-transform: uppercase;
    font-size: 1em;
  }

  h3 {
    font-size: 1.5em;
    font-weight: bolder;
  }
}
</style>
