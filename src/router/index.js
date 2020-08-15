import Vue from 'vue'
import VueRouter from 'vue-router'
import { orders, roadster, person_outline, notifications, settings, help, person_add, contact, chart } from './icons';
import i18n from '../i18n';
Vue.use(VueRouter)
const routes = [
  {
    path: '',
    redirect: `/${i18n.locale}`
  },
  {
    path: '/:lang',
    component: () => import('@/layouts/index'),
    children: [
      {
        path: '',
        name: "Orders",
        meta: { icon: orders },
        component: () => import('@/views/home/index')
      },
      {
        path: 'moderator',
        name: "Moderator",
        meta: { icon: person_outline },
        component: () => import('@/views/moderator/index')
      },
      {
        path: 'transport',
        name: "Transport",
        meta: { icon: roadster },
        component: () => import('@/views/transport/index')
      },
      {
        path: 'contacts',
        name: "Contacts",
        meta: { icon: contact },
        component: () => import('@/views/contacts/index')
      },
      {
        path: 'newclient',
        name: "Newclient",
        meta: { icon: person_add },
        component: () => import('@/views/newclient/index')
      },
      {
        path: 'notifications',
        name: "Notifications",
        meta: { icon: notifications },
        component: () => import('@/views/notification/index')
      },
      {
        path: 'statistics',
        name: "Statistics",
        meta: { icon: chart },
        component: () => import('@/views/statistics/index')
      },
      {
        path: 'settings',
        name: "Settings",
        meta: { icon: settings },
        component: () => import('@/views/settings/index')
      },
      {
        path: 'help',
        name: "Help",
        meta: { icon: help },
        component: () => import('@/views/help/index')
      }
    ]
  },
  {
    path: '/login',
    name: "Login",
    component: () => import('@/layouts/login')
  }
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
