<template>
  <div>
    <b-icon-facebook
      :font-scale="size"
      class="mr-3 text-dark"
    ></b-icon-facebook>
    <b-icon-twitter :font-scale="size" class="mr-3 text-dark"></b-icon-twitter>
    <b-icon-instagram
      :font-scale="size"
      class="mr-3 text-dark"
    ></b-icon-instagram>
    <b-icon-linkedin
      :font-scale="size"
      class="mr-3 text-dark"
    ></b-icon-linkedin>
  </div>
</template>

<script>
export default {
  name: "SocialsComponent",
  props: {
    size: {
      default: 1,
    },
  },
};
</script>
