
// const routes = [
//   {
//     path: '/',
//     component: () => import('pages/App/DashBoard.vue'),
//     children: [
//       // { path: '', component: () => import('pages/IndexPage.vue') },
//       { path: 'page1', component: () => import('pages/IndexPage.vue')},
//       { path: 'page2', component: () => import('pages/Page2.vue')},
//       { path: 'page3', component: () => import('pages/Page3.vue')}
//     ]
//   },
  // Always leave this as last one,
  // but you can also remove it
import { createRouter, createWebHistory } from 'vue-router'
import routerInstance from './router.js'
import Page3 from 'pages/Page3.vue'
import MainDesk from "pages/App/MainDesk.vue";
import DashBoard from "pages/App/DashBoard.vue";

const indexroutes = [
  // { path: '/page1', component: DashBoard },
  { path: '/page2', component: MainDesk },
  { path: '/page3', component: Page3 },
  {path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]
const router = createRouter({
  history: createWebHistory(),
  routes: indexroutes
})

export default routerInstance
