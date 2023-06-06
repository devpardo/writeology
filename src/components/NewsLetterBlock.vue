<template>
  <section class="py-5 test">
    <b-container>
      <b-row>
        <b-col cols="12" md="6" offset-md="3"
          ><h3>Subscribe to our newsletter</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
            excepturi dolorem ut necessitatibus amet voluptatum.
          </p></b-col
        >
      </b-row>

      <b-row class="py-5">
        <b-col cols="12" md="6" offset-md="3">
          <b-form class="d-flex">
            <b-form-input
              id="inline-form-input-name"
              class="mb-2 mr-sm-2 mb-sm-0"
              placeholder="Enter your email address"
              size="lg"
            ></b-form-input>

            <b-button variant="dark" size="lg">Subscribe</b-button>
          </b-form>
        </b-col>
      </b-row>

      <b-row>
        <b-col cols="12">
          <SocialsComponent :size="1.3" />
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
import SocialsComponent from "@/components/SocialsComponent";
export default {
  name: "NewsLetterBlock",
  components: {
    SocialsComponent,
  },
};
</script>

<style lang="scss"></style>
