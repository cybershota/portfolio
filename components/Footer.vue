<template>
  <div class="wrapper mx-auto px-10">
    <hr class="h-px mt-16 border-gray-300 max-w-screen-xl mx-auto" />
    <div class="md:py-10">
      <div class="flex flex-col items-center justify-between mt-6 md:mt-0 md:flex-row">
        <div class="logo">
          <nuxt-link to="/">
            <h1 class="text-xl font-semibold text-gray-700">
              <span class="text-primary font-bold">zang</span>wang.
            </h1>
          </nuxt-link>
        </div>

        <div class="my-5 md:my-0 order-last md:order-none text-center">
          <p class="text-sm font-semibold text-gray-600">
            Made with ❤ by
            <a href="https://twitter.com/devggaurav" class="text-primary hover:underline"
              >devggaurav.</a
            >
          </p>
        </div>

        <div>
          <Social />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Social from '../components/Social.vue';
export default {
  components: {
    Social,
  },
};
</script>

<style></style>
