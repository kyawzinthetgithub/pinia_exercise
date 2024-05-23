<script setup>
import TheHeader from "@/components/TheHeader.vue";
import ProductCard from "@/components/ProductCard.vue";
import { useProductStore } from "@/stores/ProductStore.js";
// import { storeToRefs } from "pinia";
// const { products } = storeToRefs(useProductStore());
const ProductStore = useProductStore();
ProductStore.pushProducts();
</script>

<template>
  <div class="container">
    <TheHeader />
    <ul class="sm:flex flex-wrap lg:flex-nowrap gap-5">
      <ProductCard
        v-for="product in ProductStore.products"
        :key="product.name"
        :product="product"
      />
    </ul>
  </div>
</template>
