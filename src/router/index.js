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
import UserPage from '@/components/UserPage.vue'

import AuthService from '@/services/authService'
import RestaurantPage from '@/components/RestaurantPage.vue'
import CategoryPage from '@/components/CategoryPage.vue'
import WelcomePage from '@/components/WelcomePage.vue'


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

    {
      name: 'userpage',
      path: '/userpage',
      component: UserPage
    },

    {
      name: 'restaurantpage',
      path: '/restaurantpage',
      component: RestaurantPage
    },

    {
      name: 'categorypage',
      path: '/categorypage',
      component: CategoryPage
    },

    {
      name: 'welcomepage',
      path: '/welcomepage',
      component: WelcomePage
    },


  ],
})

router.beforeEach((to, from, next)=>{
  const publicPages = ['/','/login', '/contactus', '/signup'];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = AuthService.isLoggedIn();

  if(!loggedIn && authRequired){
    return next('/login')
  }
  next()
})

export default router
