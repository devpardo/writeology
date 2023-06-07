<template>
  <div class="px-3">
    <LogoComponent />

    <div class="mt-4 text-muted text-left">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque nobis
      beatae tempore.
    </div>

    <div class="mt-4 pb-5 mb-5 border-bottom">
      <b-input-group>
        <b-form-input
          id="input-1"
          type="email"
          placeholder="Search Articles"
          required
          size="lg"
          class="border-right-0"
        ></b-form-input>

        <b-input-group-append>
          <b-input-group-text class="bg-transparent border-left-0">
            <b-icon icon="search" />
          </b-input-group-text>
        </b-input-group-append>
      </b-input-group>
    </div>

    <div class="keywords mt-3 text-left">
      <ul class="list-inline">
        <li class="list-inline-item">
          <b-button size="sm" class="mr-2">tips</b-button>
          <b-button size="sm" class="mr-2">resources</b-button>
          <b-button size="sm" class="mr-2">guides</b-button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import LogoComponent from "@/components/LogoComponent";
export default {
  name: "SearchComponent",
  components: {
    LogoComponent,
  },
};
</script>

<style lang="scss" scoped>
.keywords {
  button {
    background-color: #f0f0f0;
    border: 0;
    color: #131313;
    font-weight: bold;
    padding: 0.5em 1em;
    text-transform: uppercase;
    transition: 0.5s;

    &:hover {
      background-color: #131313;
      color: #fff;
      transition: 0.5s;
    }
  }
}
</style>
