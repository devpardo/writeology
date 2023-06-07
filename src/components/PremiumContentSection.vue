<template>
  <div class="premium-content my-5 pb-5 bg-dark text-white">
    <b-container class="pb-5">
      <b-row>
        <b-col cols="12" md="8" offset-md="2">
          <div class="pt-5">
            <div class="pt-5">
              <h3>Subscribe to unlock premium content</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque
                eligendi ullam omnis rem? Accusantium, amet iste nam a facilis
                minus!
              </p>
            </div>
          </div>
        </b-col>
      </b-row>

      <b-row class="py-5">
        <b-col
          v-for="(article, index) in articles"
          :key="index"
          cols="12"
          md="4"
          :class="[index != 0 ? 'd-none d-sm-block' : '']"
        >
          <PremiumContentItem :article="article" />
        </b-col>
      </b-row>
    </b-container>

    <b-button
      size="lg"
      class="d-flex align-items-center text-capitalize subscribe-btn bg-white text-dark border-0 px-4 py-2"
      ><b-icon-lock class="icon mr-2" font-scale=".75"></b-icon-lock>
      <strong>Unlock Content</strong>
    </b-button>
  </div>
</template>

<script>
import PremiumContentItem from "@/components/PremiumContentItem";

export default {
  name: "PremiumContentSection",
  props: {
    articles: {
      type: Array,
    },
  },
  components: { PremiumContentItem },
};
</script>

<style lang="scss" scoped>
.premium-content {
  position: relative;
  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    background: rgb(0, 0, 0);
    background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 1) 30%,
      rgba(0, 0, 0, 0) 100%
    );
    height: 70%;
    width: 100%;
    z-index: 3;
  }

  .subscribe-btn {
    position: absolute;
    z-index: 3;
    top: 50%;
    left: 50%;
    transform: translateX(-50%);
    font-size: 0.75em;
    transition: 0.5s;

    &:hover {
      top: 49%;
      transition: 0.5s;
      opacity: 0.8;
    }
  }
}
</style>
