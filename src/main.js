import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/router.js";
import store from "./store.js";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

createApp(App).use(router).use(store).mount("#app");
