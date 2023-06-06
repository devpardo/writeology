<template>
  <b-container>
    <b-row class="no-gutters">
      <b-col cols="12" md="8" class="text-left">
        <h3><strong>Latest Articles</strong></h3>
        <div v-for="(item, index) in filteredArticles" :key="index">
          <LatestArticleItem :article="item" />
        </div>
      </b-col>
      <b-col cols="12" md="4"> fadsfads </b-col>
    </b-row>
  </b-container>
</template>

<script>
import LatestArticleItem from "@/components/LatestArticleItem";

export default {
  name: "MainSection",
  props: {
    articles: {
      required: true,
    },
  },
  data: () => ({}),
  computed: {
    filteredArticles() {
      let test = this.articles.filter((item) => !item.is_featured);
      let sortMe = test.sort(
        (a, b) => new Date(b.post_created_date) - new Date(a.post_created_date)
      );
      return sortMe.splice(0, 5);
    },
  },
  components: { LatestArticleItem },
  methods: {},
};
</script>
