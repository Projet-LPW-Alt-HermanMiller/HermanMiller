import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "./scss/main.scss"; //Styles générales

const app = createApp(App);

app.use(router);

app.mount("#app");
