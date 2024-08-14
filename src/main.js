import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import store from "./store";
import "./assets/main.css";
import { i18n } from "./i18n/i18n";
import "animate.css";
import mdiVue from "mdi-vue/v3";
import * as mdijs from "@mdi/js";

createApp(App)
  .use(store)
  .use(i18n)
  .use(mdiVue, {
    icons: mdijs,
  })
  .mount("#app");
