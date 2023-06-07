<template>
  <b-container>
    <b-row class="no-gutters">
      <b-col cols="12" md="8" class="text-left">
        <h3><strong>Latest Articles</strong></h3>
        <div v-for="(item, index) in filteredArticles" :key="index">
          <LatestArticleItem :article="item" />
        </div>
      </b-col>
      <b-col cols="12" md="4" class="px-3">
        <SearchComponent />

        <PopularArticles />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import LatestArticleItem from "@/components/LatestArticleItem";
import SearchComponent from "@/components/SearchComponent";
import PopularArticles from "@/components//PopularArticles";

export default {
  name: "MainSection",
  components: {
    SearchComponent,
    LatestArticleItem,
    PopularArticles,
  },
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
  methods: {},
};
</script>
