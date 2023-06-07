<template>
  <div class="single-post-view">
    <div
      class="single-post-header text-white"
      v-bind:style="{ backgroundImage: 'url(' + article.image_url + ')' }"
    >
      <div class="d-flex align-items-center h-100">
        <b-container class="mt-5">
          <b-row class="mt-5">
            <b-col cols="12" md="8">
              <div class="text-left">
                <b-button
                  class="mb-4 text-uppercase bg-white py-2 border-0 text-dark"
                  size="lg"
                  ><strong>{{ article.type }}</strong></b-button
                >
                <div>
                  <h1>
                    <strong>{{ article.post_title }}</strong>
                  </h1>
                </div>
              </div>

              <div class="mt-5">
                <b-row align-v="center">
                  <b-col cols="12" md="5">
                    <div class="mr-5 mb-3 d-flex align-items-center">
                      <b-avatar
                        :src="article.user.user_image"
                        class="mr-3"
                      ></b-avatar>

                      <h5 class="m-0">
                        <strong>{{ article.user.user_name }}</strong>
                      </h5>
                    </div>
                  </b-col>
                  <b-col cols="12" md="5">
                    <div class="mr-5 mb-3 d-flex align-items-center">
                      <b-icon-clock
                        font-scale="1.7"
                        class="mr-3"
                      ></b-icon-clock>

                      <h5 class="m-0">
                        <strong>{{
                          moment(article.created_date).format("LL")
                        }}</strong>
                      </h5>
                    </div>
                  </b-col>
                </b-row>
              </div>
            </b-col>
          </b-row>
        </b-container>
      </div>
    </div>
    <b-container>
      <b-row class="my-5">
        <b-col cols="12" md="4" class="order-2 order-md-1">
          <SearchComponent />
          <PopularArticles :articles="articles" />
        </b-col>
        <b-col cols="12" md="8" class="order-1 order-md-2">
          <div class="text-left px-3" v-html="article.post_body_content"></div>

          <div class="d-flex mt-5 pt-5 border-top mb-5">
            <h5>Follow us on social media:</h5>
            <SocialsComponent size="1.3" class="ml-auto" />
          </div>
        </b-col>
      </b-row>
    </b-container>

    <PremiumContentSection :articles="premiumContent" />
  </div>
</template>

<script>
import PopularArticles from "@/components/PopularArticles";
import PremiumContentSection from "@/components/PremiumContentSection.vue";
import SearchComponent from "@/components/SearchComponent";
import SocialsComponent from "@/components/SocialsComponent";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "SingleView",
  components: {
    PopularArticles,
    SearchComponent,
    PremiumContentSection,
    SocialsComponent,
  },
  computed: {
    ...mapGetters(["getArticles"]),
    articles() {
      return this.getArticles;
    },
    article() {
      let articles = [...this.getArticles];
      return articles.find((item) => item.id == this.$route.params.id);
    },
    premiumContent() {
      let articles = [...this.getArticles];
      return articles.filter((item) => item.premium_content).splice(0, 3);
    },
  },
  methods: {
    ...mapActions(["fetchArticles"]),
  },
  mounted() {
    this.fetchArticles();
  },
};
</script>

<style lang="scss" scoped>
.single-post-view {
  .single-post-header {
    height: 70vh;
    background-position: center;
    background-size: cover;
  }
}
</style>
