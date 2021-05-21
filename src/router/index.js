import { createRouter, createWebHashHistory } from 'vue-router'
import Register from '../views/Register.vue'

const routes = [
  {
    path: '/',
    name: 'register',
    component: Register
  },
  {
    path: '/Login',
    name: 'Login',

    component: () => import( '../views/Login.vue')
  },
  {
    path: '/Account',
    name: 'Account',

    component: () => import( '../views/Account.vue')

  },
  {
    path: '/reset-password',
    name: 'reset-password',

    component: () => import( '../views/ResetPassword.vue')

  }
]


const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
