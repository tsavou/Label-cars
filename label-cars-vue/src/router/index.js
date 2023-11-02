import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/cars',
      name: 'cars',
      component: () => import('../views/CarsListView.vue')
    },
    {
      path: '/cars/:id',
      name: 'car',
      component: () => import('../views/CarView.vue')
    },
    {
      path: '/addcar',
      name: 'addcar',
      component: () => import('../views/AddCarView.vue')
    }
    
  ]
})

export default router
