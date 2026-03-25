import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: { title: 'Home' }
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/AboutView.vue'),
      meta: { title: 'About' }
    },
    {
      path: '/blog',
      name: 'blog',
      component: () => import('@/views/TravelBlogView.vue'),
      meta: { title: 'Travel Blog' }
    },
    {
      path: '/blog/:id',
      name: 'blog-post',
      component: () => import('@/views/BlogPostView.vue'),
      meta: { title: 'Blog Post' }
    },
    {
      path: '/flashcards',
      name: 'flashcards',
      component: () => import('@/views/FlashcardsView.vue'),
      meta: { title: 'German Flashcards' }
    }
  ],
  scrollBehavior(_, __, savedPosition) {
    if (savedPosition) return savedPosition
    return { top: 0 }
  }
})

router.afterEach((to) => {
  const base = 'Portfolio'
  document.title = to.meta.title ? `${to.meta.title} — ${base}` : base
})

export default router
