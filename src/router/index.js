import Article from '@/views/article/Article.vue';
import DetailArticle from '@/views/detail-article/DetailArticle.vue';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'article',
    component: Article,
  }, 
  {
    path: '/article/:id',
    name: 'articleDetails',
    component: DetailArticle, 
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
