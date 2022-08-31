import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Layout',
    component: () => import('@/views/layout/index.vue'),
    children: [
      {
        path: '/',
        name: 'Home',
        component: () => import('@/views/home/index.vue')
      }
    ]
  },
  { 
    path: '/:pathMatch(.*)*', 
    name: 'NotFound', 
    component: () => import('@/views/error/not_found.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router;