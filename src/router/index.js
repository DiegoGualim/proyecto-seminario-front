import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/InfoEdecri.vue'
import Login from '../views/Login.vue'
import { Role } from '../helpers/helpersRole'
//---Proyecto Seminario Rafa--------
import User from '../views/User.vue'
import Citas from '../views/Cita.vue'
import ReporteCitas from '../views/ReporteCitas.vue'
import ModuloDateDocInt from '../views/Iframe.vue'

//-----------------------------------
//PERFIL PRUBLICO
import DisponibilidadDoc from '../views/DisponibilidadDoc.vue'
import PerfilPublicoApa from '../views/pruebaDemo.vue'
import Medicamentos from '../views/Medicamentos.vue'
import pdfProductos from '../views/ProductosLentes.vue'
import graficasExternas from '../views/Dashboard.vue'
import serviciosMedicos from '../views/ServiciosMedicos.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        meta: { authorize: [Role.user, Role.admin, Role.libre] }
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/user',
        name: 'User',
        component: User,
        meta: { authorize: [Role.admin] }
    },
    {
        path: '/creacionCita',
        name: 'Citas',
        component: Citas,
        meta: { authorize: [Role.user, Role.admin] }
    },
    {
        path: '/reporteCitas',
        name: 'reporteCitas',
        component: ReporteCitas,
        meta: { authorize: [Role.user, Role.admin] }
    },
    {
        path: '/ModuloDateDocInt',
        name: 'ModuloDateDocInt',
        component: ModuloDateDocInt,
        meta: { authorize: [Role.user, Role.admin] }
    },
    {
        path: '/disponibilidadDoc',
        name: 'ModuloDateDocInt',
        component: DisponibilidadDoc
    },
    //demoooooo
    {
        path: '/PerfilPublicoApa',
        name: 'PerfilPublicoApa',
        component: PerfilPublicoApa
    },
    {
        path: '/Medicamentos',
        name: 'Medicamentos',
        component: Medicamentos
    },
    {
        path: '/pdfProductos',
        name: 'pdfProductos',
        component: pdfProductos
    },
    {
        path: '/graficasExternas',
        name: 'graficasExternas',
        component: graficasExternas
    },
    {
        path: '/serviciosMedicos',
        name: 'serviciosMedicos',
        component: serviciosMedicos
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

router.beforeEach((to, from, next) => {
    // redirect to login page if not logged in and trying to access a restricted page
    const { authorize } = to.meta
    const currentUser = localStorage.type

    if (authorize) {
        if (!currentUser) {
            // not logged in so redirect to login page with the return url
            return next({ path: '/login', query: { returnUrl: to.fullPath } })
        }
        // check if route is restricted by role authorize.includes(currentUser.role)
        if (authorize.length && !authorize.some((r) => currentUser == r)) {
            // role not authorised so redirect to home page
            return next({ path: '/' })
        }
    }
    next()
})

export default router
