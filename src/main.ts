import { createApp } from "vue";
import "./style.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import VueApexCharts from "vue3-apexcharts";
import App from "./App.vue";
import { createPinia } from "pinia";
import router from "./router";
import {useTitle} from "@vueuse/core";

useTitle('Posta Uganda | eServices Administration')
const app = createApp(App);
app.use(createPinia());
app.use(router);
app.use(VueApexCharts);
app.mount("#app");
