import { createWebHistory, createRouter } from "vue-router";

const routes =  [
  {
    path: "/",
    alias: "/dashboard",
    name: "dashboard",
    component: () => import("./components/Dashboard")
  },
  {
    path: "/orders",
    alias: "/orders",
    name: "orders",
    component: () => import("./components/Order")
  },
  {
    path: "/ordertrack/:id",
    alias: "/ordertrack",
    name: "ordertrack",
    component: () => import("./components/OrderTrack")
  },
  {
    path: "/login",
    name: "login",
    component: () => import("./components/Login")
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
router.beforeEach((to, from, next) => {
  let uid=sessionStorage.getItem('uid');
  if (to.name !== 'login' && !uid) next({ name: 'login' })
  else if(to.name == 'login' && uid) next({ name: 'dashboard' })
  else next()
})
export default router;