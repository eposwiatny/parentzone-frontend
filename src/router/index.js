import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'cars',
    component: () => import('@/views/cars/list/Cars.vue')
  },
  {
    path: '/view/:id',
    name: 'view-car',
    component: () => import('@/views/cars/view/ViewCar.vue')
  },
  {
    path: '/add',
    name: 'add-car',
    component: () => import('@/views/cars/add/AddCar.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
