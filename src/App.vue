<template>
  <div id="app">
    <NavBar />
    <router-view />
    <NewsLetterBlock />
    <FooterBlock />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar";
import FooterBlock from "@/components/FooterBlock";
import NewsLetterBlock from "@/components/NewsLetterBlock";

export default {
  components: {
    NavBar,
    FooterBlock,
    NewsLetterBlock,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000;
}
</style>
