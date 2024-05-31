<script setup>
import TheHeader from "@/components/TheHeader.vue";
import ProductCard from "@/components/ProductCard.vue";
import { useProductStore } from "@/stores/ProductStore.js";
// import { storeToRefs } from "pinia";
// const { products } = storeToRefs(useProductStore());
const ProductStore = useProductStore();
import { UseCartStore } from "./stores/CartStore";
import { ref, reactive } from "vue";
const cartStore = UseCartStore();
const history = reactive([]);
const doingHistory = ref(false);
const future = reactive([]);

history.push(JSON.stringify(cartStore.$state));
const redo = () => {
  const lastState = future.pop();
  if (!lastState) return;
  doingHistory.value = true;
  history.push(lastState);
  cartStore.$state = JSON.parse(lastState);
  doingHistory.value = false;
};
function undo() {
  if (history.length === 1) return;
  doingHistory.value = true;
  future.push(history.pop());
  cartStore.$state = JSON.parse(history.at(-1));
  doingHistory.value = false;
}

cartStore.$subscribe((mutation, state) => {
  if (!doingHistory.value) {
    history.push(JSON.stringify(state));
    future.splice(0, future.length);
  }
});

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
      <AppButton @click="redo">Redo</AppButton>
      <AppButton @click="undo()">Undo</AppButton>
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
