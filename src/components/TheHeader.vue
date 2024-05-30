<script>
// imports
import CartWidget from "./CartWidget.vue";
// import { mapWritableState } from "pinia";
import { mapState, mapActions } from "pinia";
import { useAuthUserStore } from "@/stores/AuthUserStore";
export default {
  components: { CartWidget },
  computed: {
    // ...mapWritableState(useAuthUserStore, {
    // user: (store) => `Hello ${store.username}`,
    //   user: "username",
    // }),
    ...mapState(useAuthUserStore, {
      user: "username",
    }),
  },
  methods: {
    ...mapActions(useAuthUserStore, {
      google: "visitTargetLink",
    }),
  },
};
</script>

<template>
  <header
    class="flex justify-between p-6 mb-10 items-center"
    style="background-image: url('/images/double-bubble-outline.png')"
  >
    <h1 class="text-4xl text-gray-700 font-bold">The Pineapple Stand</h1>
    <div class="">
      <span class="mr-5 font-bold text-gray-500 text-2xl" @click="google">{{
        user
      }}</span>
      <CartWidget class="inline-block" />
    </div>
  </header>
</template>
