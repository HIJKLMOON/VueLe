import { createRouter, createWebHistory } from "vue-router";
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import NotFound from "@/shared/ui/NotFound.vue";

const routes = [
  {
    path: "/",
    component: DefaultLayout,
    children: [
      { path: "", redirect: { name: "book" } },
      {
        path: "book",
        name: "book",
        component: () => import("@/features/book/components/HelloWorld.vue"),
        meta: { title: "book" },
      },
      {
        path: "setting",
        name: "setting",
        component: () => import("@/features/setting/components/Setting.vue"),
        meta: { title: "setting" },
      },
    ],
  },
  {
    path: "/dashboard",
    name: "dashboard",
    compoent: () => import("@/features/dashboard/components/Dashboard.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    name: "not-found",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
});

router.afterEach((to) => {
  document.title = to.meta.title;
});

export default router;
