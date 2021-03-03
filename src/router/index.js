import Vue from 'vue';
import Router from 'vue-router';
import HomePage from '@/pages/HomePage';
import ResultsPage from '@/pages/ResultsPage';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Homepage',
      component: HomePage,
    },
    {
      path: '/results',
      name: 'Results',
      component: ResultsPage,
    },
  ],
});
