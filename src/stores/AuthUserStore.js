import { defineStore } from "pinia";
export const useAuthUserStore = defineStore("AuthUserStore", {
  state: () => {
    return {
      username: "Kyaw Zin Thet",
    };
  },
  actions: {
    visitTargetLink() {
      window.open("https://www.google.com", "_blank");
    },
  },
});
