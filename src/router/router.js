import { createRouter, createWebHistory } from "vue-router";

const routeOptions = [
  {
    path: "/",
    name: "MainPage",
  },
  {
    path: "/posts",
    name: "PostPage",
  },
  {
    path: "/posts/:id",
    name: "AboutPost",
  },
  {
    path: "/about",
    name: "AboutProject",
  },
];

const routes = routeOptions.map((route) => {
  return {
    ...route,
    component: () => import(`../pages/${route.name}.vue`),
  };
});

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;
