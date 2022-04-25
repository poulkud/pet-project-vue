import Main from "@/pages/Main.vue";
import PostPage from "@/pages/PostPage.vue";
import About from "@/pages/About.vue";
import AboutPost from "@/pages/AboutPost.vue";
import PostPageWithStore from "@/pages/PostPageWithStore.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: Main,
  },
  {
    path: "/posts",
    component: PostPage,
  },
  {
    path: "/posts/:id",
    component: AboutPost,
  },
  {
    path: "/store",
    component: PostPageWithStore,
  },
  {
    path: "/about",
    component: About,
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;
