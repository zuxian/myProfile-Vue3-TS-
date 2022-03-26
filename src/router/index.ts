// createWebHashHistory, createWebHistory
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '@/view/index.vue'

const routes: Array<RouteRecordRaw> = [
  { path: '', redirect: (_) => { return { path: '/home' } }, },
  { path: '/home', name: 'Home', component: Home, },
  {
    path: '/:currentPath(.*)*', // 路由未匹配到，进入这个
    redirect: (_) => { return { path: '/home' } },
  },
]
const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { el: '#app', top: 0, behavior: 'smooth', }
  },
})
export default router