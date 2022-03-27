// createWebHashHistory, createWebHistory
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Layout from '@/view/index.vue'
// import About from '@/view/about/index.vue'
// import Project from '@/view/project/index.vue'
// import Life from '@/view/life/index.vue'

const routes: Array<RouteRecordRaw> = [
  // { path: '', redirect: (_) => { return { path: '/' } }, },
  { path: '/', name: 'home', component: Layout, },
  // { path: '/about', name: 'about', component: About, },
  // { path: '/project', name: 'project', component: Project, },
  // { path: '/life', name: 'life', component: Life, },
  {
    path: '/:currentPath(.*)*', // 路由未匹配到，进入这个
    redirect: (_) => { return { path: '/' } },
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