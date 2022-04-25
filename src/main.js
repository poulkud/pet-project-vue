import { createApp } from "vue";
import App from "./App.vue";
import components from "@/components/UI";
import directives from "@/directives";
import router from "@/router/router";
import store from "@/store/index.js";

const app = createApp(App);
components.forEach((component) => {
  app.component(component.name, component);
});
directives.forEach((direct) => {
  app.directive(direct.name, direct);
});
app.use(router).use(store).mount("#app");
