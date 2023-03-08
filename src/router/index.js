import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  duplicateNavigationPolicy: "reload",
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/login",
      name: "connexion",
      component: () => import("../views/ConnexionView.vue"),
    },
    {
      path: "/produit/:product",
      name: "produit",
      component: () => import("../views/FicheProduitView.vue"),
    },
    {
      path: "/produits",
      name: "produits",
      component: () => import("../views/ProductsView.vue"),
    },
    {
      path: "/achat/:product",
      name: "ProductView",
      component: () => import("../views/ProductView.vue"),
    },
    {
      path: "/panier",
      name: "CartView",
      component: () => import("../views/CartView.vue"),
    },
    {
      path: "/cart/order",
      name: "cart-order",
      component: () => import("../views/OrderView.vue"),
    },
    {
      path: "/cart/order/thank-you",
      name: "cart-order-thank-you",
      component: () => import("../views/ConfirmationView.vue"),
    },
    {
      path: "/mentions-legales",
      name: "mentions-legales",
      component: () => import("../views/LegalNoticeView.vue"),
    },
    {
      path: "/CGV",
      name: "CGV",
      component: () => import("../views/CGVView.vue"),
    },
    {
      path: "/CGU",
      name: "CGU",
      component: () => import("../views/CGUView.vue"),
    },
    {
      path: "/politique-de-confidentialite",
      name: "politique-de-confidentialite",
      component: () => import("../views/PrivacyPolicyView.vue"),
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: () => import('../views/PageNotFound.vue')
    }
  ],
});

export default router