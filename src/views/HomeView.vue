<template>
  <section>
    <JumbotronComponent />

    <b-row>
      <b-col>afdsfadsfadsf</b-col>
      <b-col>afdsfadsfadsf</b-col>
    </b-row>
  </section>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import JumbotronComponent from "@/components/JumbotronComponent";
export default {
  name: "HomeView",
  components: {
    JumbotronComponent,
  },

  data: () => ({
    featured: {},
  }),

  computed: {
    ...mapGetters(["getArticles"]),
    articles() {
      return this.getArticles;
    },
    featuredArticle() {
      return this.articles.find((item) => item.is_featured);
    },
  },
  mounted() {
    this.fetchArticles();

    this.featured = this.articles.find((item) => item.is_featured);
  },
  methods: {
    ...mapActions(["fetchArticles"]),
  },
};
</script>
