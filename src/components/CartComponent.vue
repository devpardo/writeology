<template>
  <ul class="list-inline m-0">
    <li class="list-inline-item">
      <strong>Cart ({{ count }})</strong>
    </li>
    <li class="list-inline-item">
      <b-button size="sm" variant="link" class="text-dark">
        <b-icon-person></b-icon-person>
      </b-button>
    </li>
    <li class="list-inline-item">
      <b-button size="sm" variant="link" class="text-dark">
        <b-icon-search></b-icon-search>
      </b-button>
    </li>
  </ul>
</template>

<script>
export default {
  name: "CartComponent",
  data: () => ({
    count: 1,
  }),
};
</script>
