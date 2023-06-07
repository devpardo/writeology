<template>
  <div class="my-5 contact-page">
    <b-container class="py-5">
      <b-row class="" align-v="start">
        <b-col cols="12" md="5">
          <div class="text-left mb-sm-0 mb-5 mt-sm-5 mt-0">
            <h1 class="contact-title"><strong>Get in touch</strong></h1>
            <p class="text-muted">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
              dolores omnis porro, optio expedita accusantium!
            </p>

            <h5 class="mt-4">Contact us via</h5>
            <h5 class="d-flex align-items-center mt-4 mb-3">
              <b-icon-envelope class="mr-2"></b-icon-envelope
              ><span class="text-muted">contact@writelogy.com</span>
            </h5>
            <h5 class="d-flex align-items-center">
              <b-icon-envelope class="mr-2"></b-icon-envelope
              ><span class="text-muted">press@writelogy.com</span>
            </h5>
          </div>
        </b-col>

        <b-col cols="12" md="7">
          <b-card class="text-left shadow p-2 sm-p-4 contact-card">
            <b-row>
              <b-col cols="12" md="6" class="mb-5 sm-mb-0">
                <label><strong>FULL NAME</strong></label>
                <b-form-input
                  size="lg"
                  placeholder="Ex. John Doe"
                ></b-form-input>
              </b-col>

              <b-col cols="12" md="6" class="mb-5 sm-mb-0">
                <label><strong>EMAIL ADDRESS</strong></label>
                <b-form-input
                  size="lg"
                  placeholder="example@email.com"
                ></b-form-input>
              </b-col>

              <b-col cols="12" md="6" class="mb-5 sm-mb-0">
                <label><strong>PHONE</strong></label>
                <b-form-input
                  size="lg"
                  placeholder="(123) 456 789"
                ></b-form-input>
              </b-col>

              <b-col cols="12" md="6" class="mb-5 sm-mb-0">
                <label><strong>SUBJECT</strong></label>
                <b-form-input
                  size="lg"
                  placeholder="ex. Subscriptions"
                ></b-form-input>
              </b-col>

              <b-col cols="12" md="12" class="mb-5 sm-mb-0">
                <label><strong>LEAVE US A MESSAGE</strong></label>
                <b-form-textarea
                  id="textarea"
                  size="lg"
                  placeholder="Please type your message here..."
                  rows="3"
                  max-rows="6"
                ></b-form-textarea>
              </b-col>

              <b-col cols="12" md="5" class="mb-5 sm-mb-0">
                <b-button size="lg" block variant="dark">SEND MESSAGE</b-button>
              </b-col>
            </b-row>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "ContactView",
};
</script>

<style lang="scss" scoped>
.contact-page {
  min-height: 60vh;

  .contact-title {
    font-weight: bolder;
    font-size: 3.5em;
  }

  .contact-card {
    border-radius: 0.8em !important;
  }
}
</style>
