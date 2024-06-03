import { createApp } from "vue";
import App from "./App.vue";
import { createPinia } from "pinia";

// Icons and Styles
import FontAwesomePlugin from "./plugins/FontAwesome";
import "./assets/main.pcss";

// App Wide Components
import AppButton from "./components/AppButton.vue";
import AppCountInput from "./components/AppCountInput.vue";
import AppModalOverlay from "./components/AppModalOverlay.vue";
import { PiniaHistoryPlugin } from "./plugins/PiniaHistoryPlugin";

// Init App
const pinia = createPinia();
pinia.use(PiniaHistoryPlugin);
const app = createApp(App);
app.use(pinia);
app.use(FontAwesomePlugin);
app.component("AppButton", AppButton);
app.component("AppCountInput", AppCountInput);
app.component("AppModalOverlay", AppModalOverlay);
app.mount("#app");
