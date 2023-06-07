<template>
  <div>
    <nav class="header-wrapper border-bottom py-3 p-sm-5">
      <b-row align-v="center" class="no-gutters">
        <b-col cols="12" md="4" class="d-none d-sm-block">
          <SocialsComponent :size="1.2" />
        </b-col>
        <b-col cols="6" md="4">
          <LogoComponent />
        </b-col>
        <b-col cols="6" md="4">
          <CartComponent @open-menu="test" :menu-is-open="menuOpen" />
        </b-col>
      </b-row>

      <b-row class="d-none d-sm-block mt-sm-5 no-gutters">
        <b-col>
          <ul class="list-inline menu-links">
            <li class="list-inline-item">
              <router-link to="/">Home</router-link>
            </li>
            <li class="list-inline-item cursor-pointer" id="popover-2">
              Pages
            </li>
            <li class="list-inline-item">Categories</li>
            <li class="list-inline-item">
              <router-link to="/contact">Contact</router-link>
            </li>
            <li class="list-inline-item">
              <router-link to="/subscribe">Subscribe</router-link>
            </li>
          </ul>
        </b-col>
      </b-row>

      <b-popover target="popover-2" triggers="hover focus" placement="bottom">
        <div class="p-2">
          <b-row>
            <b-col>
              <h6>PAGES</h6>
              <ul class="list-inline">
                <li class="list-inline-item text-muted pb-2">Lorem, ipsum.</li>
                <li class="list-inline-item text-muted pb-2">Lorem, ipsum.</li>
                <li class="list-inline-item text-muted pb-2">Lorem, ipsum.</li>
                <li class="list-inline-item text-muted pb-2">Lorem, ipsum.</li>
                <li class="list-inline-item text-muted pb-2">Lorem, ipsum.</li>
              </ul>
            </b-col>
            <b-col>
              <h6>UTILITY PAGES</h6>
              <ul class="list-inline">
                <li class="list-inline-item text-muted pb-2">Lorem, ipsum.</li>
                <li class="list-inline-item text-muted pb-2">Lorem, ipsum.</li>
                <li class="list-inline-item text-muted pb-2">Lorem, ipsum.</li>
                <li class="list-inline-item text-muted pb-2">Lorem, ipsum.</li>
                <li class="list-inline-item text-muted pb-2">Lorem, ipsum.</li>
              </ul>
            </b-col>
          </b-row>
        </div>
      </b-popover>
    </nav>

    <div class="mobile-menu d-sm-none slideInDown animated" v-if="menuOpen">
      <ul class="list-group text-left">
        <li class="list-group-item">
          <router-link class="text-dark" to="/">Home</router-link>
        </li>
        <li class="list-group-item">
          <router-link class="text-dark" to="/">Pages</router-link>
        </li>
        <li class="list-group-item">
          <router-link class="text-dark" to="/">Categories</router-link>
        </li>
        <li class="list-group-item">
          <router-link class="text-dark" to="/contact">Contact</router-link>
        </li>
        <li class="list-group-item">
          <router-link class="text-dark" to="/subscribe">Subscribe</router-link>
        </li>
      </ul>
    </div>
  </div>
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
  data: () => ({
    count: 1,
    menuOpen: false,
  }),
  methods: {
    test(param) {
      this.menuOpen = param;
    },
    myEventHandler() {
      this.menuOpen = false;
    },
  },
  created() {
    window.addEventListener("resize", this.myEventHandler);
  },
  destroyed() {
    window.removeEventListener("resize", this.myEventHandler);
  },
  watch: {
    $route() {
      this.menuOpen = false;
    },
  },
};
</script>

<style lang="scss">
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

  .cursor-pointer {
    cursor: pointer;
  }
}

.popover {
  min-width: 400px;
  max-width: 30vw !important;
  height: 250px;
}

@keyframes slideInDown {
  0% {
    transform: translate3d(0, -100%, 0);
    visibility: visible;
  }

  to {
    transform: translateZ(0);
  }
}

.slideInDown {
  animation-name: slideInDown;
}

.animated {
  animation-duration: 0.5s;
  animation-fill-mode: both;
}
</style>
