import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/components/Home.vue'
import ContactUs from '@/components/ContactUs.vue'
import Login from '@/components/Login.vue'
import Menu from '@/components/Menu.vue'
import MenuItem from '@/components/MenuItem.vue'
import Orders from '@/components/Orders.vue'
import Reservation from '@/components/Reservation.vue'
import SignUp from '@/components/SignUp.vue'
import UserProfile from '@/components/UserProfile.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: 'home',
      path: '/',
      component: Home
    },

    {
      name: 'contactus',
      path: '/contactus',
      component: ContactUs
    },

    {
      name: 'login',
      path: '/login',
      component: Login
    },

    {
      name: 'menu',
      path: '/menu',
      component: Menu
    },

    {
      name: 'menuitem',
      path: '/menuitem',
      component: MenuItem
    },

    {
      name: 'orders',
      path: '/orders',
      component: Orders
    },

    {
      name: 'reservation',
      path: '/reservation',
      component: Reservation
    },

    {
      name: 'signup',
      path: '/signup',
      component: SignUp
    },

    {
      name: 'userprofile',
      path: '/userprofile',
      component: UserProfile
    },

  ],
})

export default router
