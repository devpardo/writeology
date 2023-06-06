<template>
  <section>
    <JumbotronComponent :articles="articles" />
    <MainSection :articles="articles" />
  </section>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import JumbotronComponent from "@/components/JumbotronComponent";
import MainSection from "@/components/MainSection";

export default {
  name: "HomeView",
  components: {
    JumbotronComponent,
    MainSection,
  },

  data: () => ({
    featured: {},
  }),

  computed: {
    ...mapGetters(["getArticles"]),
    articles() {
      return this.getArticles;
    },
  },
  created() {
    this.fetchArticles();
    this.featured = this.articles.find((item) => item.is_featured);
  },
  methods: {
    ...mapActions(["fetchArticles"]),
  },
};
</script>
