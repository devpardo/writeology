<template>
  <ul class="list-inline m-0">
    <li class="list-inline-item">
      <strong>Cart ({{ count }})</strong>
    </li>
    <li class="list-inline-item">
      <b-button size="sm" variant="link" class="text-dark p-0">
        <b-icon-person></b-icon-person>
      </b-button>
    </li>
    <li class="list-inline-item">
      <b-button size="sm" variant="link" class="text-dark p-0">
        <b-icon-search></b-icon-search>
      </b-button>
    </li>
    <li class="list-inline-item ml-2 d-sm-none">
      <b-button
        variant="link"
        size="lg"
        class="p-0 text-dark"
        @click="menuOpen"
      >
        <b-icon-x v-if="menuIsOpen" font-scale="1.75"></b-icon-x>
        <b-icon-list v-else font-scale="1.75"></b-icon-list>
      </b-button>
    </li>
  </ul>
</template>

<script>
export default {
  name: "CartComponent",
  props: {
    menuIsOpen: {
      type: Boolean,
    },
  },
  data: () => ({
    count: 1,
    menu: false,
  }),
  methods: {
    menuOpen() {
      this.menu = !this.menuIsOpen;
      this.$emit("open-menu", this.menu);
    },
  },
};
</script>
