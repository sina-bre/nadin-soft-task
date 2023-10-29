import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: Home },
    { path: 'todo', component: () => import('@/views/Todo.vue') },
    { path: 'weather', component: () => import('@/views/Weather.vue') },
    { path: 'profile', component: () => import('@/views/Profile.vue') }
  ]
});

export default router;
