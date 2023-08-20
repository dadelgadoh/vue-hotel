import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/hotels',
      name: 'HotelIndex',
      component: () => import('../views/hotels/HotelIndex.vue')
    },
    {
      path: '/hotels/create',
      name: 'HotelCreate',
      component: () => import('../views/hotels/HotelCreate.vue')
    },
    {
      path: '/hotels/:id/edit',
      name: 'HotelEdit',
      component: () => import('../views/hotels/HotelEdit.vue'),
      props: true
    }
  ]
})

export default router
