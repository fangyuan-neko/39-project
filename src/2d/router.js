import { createRouter, createWebHistory } from 'vue-router';
// import ThreeDimensionDock from "./pages/3dDock.vue";
import ProductionLine from "./pages/ProductionLine.vue";
import EquipmentsView from "./pages/Equipments.vue";
import FactoryHomeView from "./pages/Home.vue";

const routes = [
  {
    path: '/',
    component: FactoryHomeView,
  },
  {
    path: '/home',
    component: FactoryHomeView,
  },
  {
    path: '/productline',
    component: ProductionLine,
  },
  {
    path: '/equipments',
    component: EquipmentsView,
  }];
const router = createRouter({
  history: createWebHistory(),
  routes
});
export default router;