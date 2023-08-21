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
    },
    {
      path: '/rooms',
      name: 'RoomIndex',
      component: () => import('../views/rooms/RoomIndex.vue')
    },
    {
      path: '/rooms/create',
      name: 'RoomCreate',
      component: () => import('../views/rooms/RoomCreate.vue')
    },
    {
      path: '/rooms/:id/edit',
      name: 'RoomEdit',
      component: () => import('../views/rooms/RoomEdit.vue'),
      props: true
    }
  ]
})

export default router
