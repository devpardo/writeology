<template>
  <div class="my-5">
    <b-container>
      <b-row>
        <b-col cols="12" md="6" offset-md="3">
          <b-card class="subscribe-card shadow p-4">
            <h3 class="text-muted mb-3"><strong>One-time payment</strong></h3>
            <h1 class="card-title">$ 9.99 USD</h1>
            <h2>Get access to our premium articles & content</h2>
            <p class="text-muted my-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque omnis amet culpa perferendis reiciendis! Explicabo.
            </p>

            <b-button class="mt-4" variant="dark" size="lg" block
              ><strong class="h6">Subscribe today!</strong></b-button
            >
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "SubscribeView",
};
</script>

<style lang="scss">
.subscribe-card {
  margin-top: 3em;
  border-radius: 0.8em !important;

  .card-title {
    font-size: 3em;
    font-weight: 900;
  }
}
</style>
