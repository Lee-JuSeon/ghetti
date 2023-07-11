
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
import Page3 from 'pages/Page3.vue'
import MainDesk from "pages/MainDesk.vue";

const routes = [
  { path: '/page2', component: MainDesk },
  { path: '/page3', component: Page3 },
  {path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }

]



export default routes
