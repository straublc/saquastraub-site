import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import InstalacoesPage from '../pages/InstalacoesPage.vue'
import EventosPage from '../pages/EventosPage.vue'
import EventoDetailPage from '../pages/EventoDetailPage.vue'

const routes = [
  {
    path: '/',
    component: HomePage,
    meta: { title: 'SaquaStraub — Casa de Praia em Saquarema RJ' }
  },
  {
    path: '/instalacoes',
    component: InstalacoesPage,
    meta: { title: 'Instalações — SaquaStraub' }
  },
  {
    path: '/eventos',
    component: EventosPage,
    meta: { title: 'Eventos em Saquarema — SaquaStraub' }
  },
  {
    path: '/eventos/:slug',
    component: EventoDetailPage,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash) return { el: to.hash, behavior: 'smooth' }
    return { top: 0, behavior: 'smooth' }
  }
})

router.afterEach((to) => {
  if (to.meta?.title) {
    document.title = to.meta.title
  }
})

export default router
