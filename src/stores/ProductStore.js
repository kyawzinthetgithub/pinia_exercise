import { defineStore } from "pinia";

export const useProductStore = defineStore("ProductStore", {
  state: () => {
    return {
      products: [],
    };
  },
  actions: {
    async pushProducts() {
      this.products = (await import("@/data/products.json")).default;
      //   this.products = (await axios.get("/data/products/list")).default;
    },
  },
  //getters
});
