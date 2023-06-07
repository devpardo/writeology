<template>
  <div
    @click="go(article.id)"
    class="premium-content-item d-flex align-items-end"
    :style="{ backgroundImage: 'url(' + article.image_url + ')' }"
  >
    <div class="mb-5 p-3 text-left text-white item-content">
      <h6 class="text-uppercase">{{ article.type }}</h6>
      <h5 class="">
        <strong>{{ article.post_title }}</strong>
      </h5>
    </div>
  </div>
</template>

<script>
import mixin from "@/mixin";
export default {
  name: "PremiumContentItem",
  mixins: [mixin],
  props: {
    article: {
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.premium-content-item {
  background-color: #111;
  border-radius: 0.8em;
  min-height: 300px;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  cursor: pointer;

  .item-content {
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
}
</style>
