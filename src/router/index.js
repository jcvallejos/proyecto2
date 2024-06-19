import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../components/HelloWorld.vue'
import Login from '../components/IngresoSistema.vue'
import MarcoUsuario1 from '../components/usr1/MarcoUsuario.vue'
import BienVenido1 from '../components/usr1/BienVenido.vue'
import TablaUsuarios from '../components/usr1/TablaUsuario.vue'
import SalirSistema from '../components/SalirSistema.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/logout',
    name: 'logout',
    component: SalirSistema
  },
  {
    path: '/usr1/',
    component: MarcoUsuario1,
    children: [
      {
        path:'inicio',
        component: BienVenido1,
        meta: {RequiereLogin:true, tipos:[1,2]}
      },
      {
        path: 'tablausuarios',
        component: TablaUsuarios,
        meta: {RequiereLogin:true, tipos:[1]}
      }
    ]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
router.beforeEach((to, from, next) => {
  const usr = JSON.parse(localStorage.getItem('usr'));
  if (to.matched.some(record => record.meta.RequiereLogin)) {
    if (!usr) {
      next('/login');
    } else {
      const TipoUsuario = usr.tipo;
      if (to.matched.some(record => record.meta.tipos && !record.meta.tipos.includes(TipoUsuario))) {
        next('/');
      } else {
        next();
      }
    }
  } else {
    next();
  }
})
export default router
