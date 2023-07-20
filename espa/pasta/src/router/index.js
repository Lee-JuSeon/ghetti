import { createRouter, createWebHistory } from 'vue-router'
import IndexPage from "pages/IndexPage.vue";
import IntroHome from "pages/IntroHome.vue";
import DashBoard from "pages/DashBoard/DashBoard.vue";



const routes = ([
  {
    path: '/',
    component: IntroHome,

  },
  {
    path: '/login',
    component: IndexPage
    // children: ProjectRouter,
  },
  { path: '/Proj',
    component: DashBoard,
    children: [
      // { path: '/Proj', component: App }
    ]
  },
  {path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  },

])

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
})

export default router
