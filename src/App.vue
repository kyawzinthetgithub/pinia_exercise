<script setup>
import TheHeader from "@/components/TheHeader.vue";
import ProductCard from "@/components/ProductCard.vue";
import { useProductStore } from "@/stores/ProductStore.js";
// import { storeToRefs } from "pinia";
// const { products } = storeToRefs(useProductStore());
const ProductStore = useProductStore();
import { UseCartStore } from "./stores/CartStore";
const cartStore = UseCartStore();


cartStore.$onAction(({ name, store, args, after, onError }) => {
  if (name === "addItems") {
    after(() => {
      console.log(args[0]);
    });
    onError((error) => {
      console.log("Hello error: ", error.message);
    });
  }
});

ProductStore.pushProducts();
</script>

<template>
  <div class="container">
    <TheHeader />
    <div class="mg-5 flex justify-end gap-x-5">
      <AppButton @click="cartStore.redo()">Redo</AppButton>
      <AppButton @click="cartStore.undo()">Undo</AppButton>
    </div>
    <ul class="sm:flex flex-wrap lg:flex-nowrap gap-5">
      <ProductCard
        v-for="product in ProductStore.products"
        :key="product.name"
        :product="product"
        @addToCart="cartStore.addItems($event, product)"
      />
    </ul>
  </div>
</template>
