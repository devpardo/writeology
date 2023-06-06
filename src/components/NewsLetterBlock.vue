<template>
  <section class="py-5 test">
    <b-container>
      <b-row>
        <b-col cols="12" md="6" offset-md="3"
          ><h3><strong>Subscribe to our newsletter</strong></h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
            excepturi dolorem ut necessitatibus amet voluptatum.
          </p></b-col
        >
      </b-row>

      <b-row class="py-5">
        <b-col cols="12" md="6" offset-md="3">
          <b-row class="no-gutters">
            <b-col cols="12" md="9" class="mb-2 mb-sm-0">
              <b-form class="d-flex">
                <b-form-input
                  id="inline-form-input-name"
                  class="subscribe-email mr-sm-1"
                  placeholder="Enter your email address"
                  size="lg"
                ></b-form-input>
              </b-form>
            </b-col>
            <b-col cols="12" md="3">
              <b-button variant="dark" class="subcribe-btn btn-block" size="lg"
                >Subscribe</b-button
              >
            </b-col>
          </b-row>
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

<style lang="scss" scoped>
.subscribe-email {
  border-radius: 0.5em;
  font-size: 1em;
  padding: 1.5em;
}
.subcribe-btn {
  position: relative;
  top: 0;
  transition: 0.5s;
  font-size: 1em;
  font-weight: bold;
  border-radius: 0.5em;
  padding: 0.75em;

  &:hover {
    transition: 0.5s;
    top: -5px;
    opacity: 0.8;
  }
}
</style>
