<template>
  <section>
    <JumbotronComponent :articles="articles" />
    <MainSection :articles="articles" />
    <PremiumContentSection :articles="premiumContent" />
  </section>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import JumbotronComponent from "@/components/JumbotronComponent";
import MainSection from "@/components/MainSection";
import PremiumContentSection from "@/components/PremiumContentSection";

export default {
  name: "HomeView",
  components: {
    JumbotronComponent,
    MainSection,
    PremiumContentSection,
  },

  data: () => ({
    featured: {},
  }),

  computed: {
    ...mapGetters(["getArticles"]),
    articles() {
      return this.getArticles;
    },
    premiumContent() {
      let articles = [...this.getArticles];
      return articles.filter((item) => item.premium_content).splice(0, 3);
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
