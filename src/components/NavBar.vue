<template>
  <nav class="header-wrapper border-bottom py-3 p-sm-5">
    <b-row align-v="center" class="no-gutters">
      <b-col class="d-none d-sm-block">
        <SocialsComponent :size="1.2" />
      </b-col>
      <b-col>
        <LogoComponent />
      </b-col>
      <b-col>
        <CartComponent />
      </b-col>
    </b-row>

    <b-row class="d-none d-sm-block mt-sm-5 no-gutters">
      <b-col>
        <ul class="list-inline menu-links">
          <li class="list-inline-item">
            <router-link to="/">Home</router-link>
          </li>
          <li class="list-inline-item">Pages</li>
          <li class="list-inline-item">Categories</li>
          <li class="list-inline-item">Contact</li>
          <li class="list-inline-item">Subscribe</li>
        </ul>
      </b-col>
    </b-row>
  </nav>
</template>

<script>
import SocialsComponent from "@/components/SocialsComponent";
import LogoComponent from "@/components/LogoComponent";
import CartComponent from "@/components/CartComponent";

export default {
  name: "NavBar",
  components: {
    SocialsComponent,
    LogoComponent,
    CartComponent,
  },
};
</script>

<style lang="scss">
.header-wrapper {
}

.menu-links {
  margin: 0;

  li {
    text-transform: uppercase;
    margin: 0 1em;

    a {
      text-decoration: none;
      color: #000;

      &.router-link-exact-active {
        font-weight: bolder;
      }
    }
  }
}
</style>
