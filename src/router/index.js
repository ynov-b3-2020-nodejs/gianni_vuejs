import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Catalog from '../views/Catalog.vue';
import About from '../views/About.vue';
import Tracking from '../views/Tracking.vue';
import Cart from '../views/Cart.vue';
import Checkout from '../views/Checkout.vue';
import Collections from '../views/Collections.vue';
import Product from '../views/Product.vue';
import Collection from '../views/Collection.vue';
import Login from '../views/Login.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/about',
    name: 'about',
    component: About,
  },
  {
    path: '/tracking',
    name: 'tracking',
    component: Tracking,
  },
  {
    path: '/catalog',
    name: 'catalogue',
    component: Catalog,
  },
  {
    path: '/cart',
    name: 'cart',
    component: Cart,
  },
  {
    path: '/checkout',
    name: 'checkout',
    component: Checkout,
  },
  {
    path: '/collections',
    name: 'collections',
    component: Collections,
  },
  {
    path: '/collection',
    name: 'collection',
    component: Collection,
  },
  {
    path: '/product',
    name: 'product',
    component: Product,
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
