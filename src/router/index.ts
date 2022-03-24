import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HelloWorld from '../components/HelloWorld.vue'
const routes: Array<RouteRecordRaw> = [
  { path: '', redirect: (_) => { return { path: '/home' } }, },
  { path: '/home', name: 'HelloWorld', component: HelloWorld, },
  {
    path: '/:currentPath(.*)*', // 路由未匹配到，进入这个
    redirect: (_) => { return { path: '/home' } },
  },
]
const router = createRouter({
  history: createWebHistory(''),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { el: '#app', top: 0, behavior: 'smooth', }
  },
})
export default router