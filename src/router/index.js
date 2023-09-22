import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/InfoEdecri.vue'
import Login from '../views/Login.vue'
import { Role } from '../helpers/helpersRole'
//---Proyecto Seminario Rafa--------
import User from '../views/User.vue'
import Citas from '../views/Cita.vue'
import ReporteCitas from '../views/ReporteCitas.vue'

//-----------------------------------
//PERFIL PRUBLICO
import DisponibilidadDoc from '../views/DisponibilidadDoc.vue'
import PerfilPublicoApa from '../views/pruebaDemo.vue'
import Medicamentos  from '../views/Medicamentos.vue'
import pdfProductos from '../views/ProductosLentes.vue'
import graficasExternas from '../views/Dashboard.vue'

/*
import InfoAbcdario from '../views/InfoAbcdario.vue'
import InfoImagenes from '../views/InfoImg.vue'
import InfoColores from '../views/InfoColores.vue'
import InfoNumeros from '../views/InfoNumeros.vue'
import InfoPronombres from '../views/InfoPronombres.vue'
import InfoVideo from '../views/InfoVideo.vue'
import VideoAbcdario from '../views/VideosAbcdario.vue'
import VideoColores from '../views/VideoColores.vue'
import VideoPronombres from '../views/VideoPronombres.vue'
import PruebaLevel1 from '../views/EvaluacionLvl1.vue'
import PruebaLevel2 from '../views/EvaluacionLvl2.vue'
import ResultadosAlumnos from '../views/ResultadosAlumnos.vue'
import PracticaenVivo from '../views/PracticaenVivo.vue'
//DEMOOOOO
import PruebaDemo from '../views/pruebaDemo.vue'
import InfoVideoDemo from '../views/InfoVideoDemo.vue'
import InfoImagenesDemo from '../views/InfoImgDemo.vue'
import PruebaLevel1Demo from '../views/EvaluacionLvl1D.vue'
import PruebaLevel2Demo from '../views/EvaluacionLvl2D.vue'
import InfoAbecedarioDemo from '../views/InfoAbcdarioDemo.vue'
import InfoColoresDemo from '../views/InfoColoresDemo.vue'
import InfoNumerosDemo from '../views/InfoNumerosDemo.vue'
import InfoPronombresDemo from '../views/InfoPronombresDemo.vue'
import VideoAbcdarioDemo from '../views/VideosAbcdarioDemo.vue'
import VideoColoresDemo from '../views/VideoColoresDemo.vue'
import VideoPronombresDemo from '../views/VideoPronombresDemo.vue'
import Traductor from '../views/Traductor.vue'
import PracticaenVivoDemo from '../views/PracticaenVivoDemo.vue'
import TraductorDemo from '../views/TraductorDemo.vue'
import ResultadosAlumnosExternos from '../views/ResultadosAlumnosExternos.vue'*/
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
        meta: { authorize: [Role.admin]}
    },
    {
        path: '/reporteCitas',
        name: 'reporteCitas',
        component: ReporteCitas,
        meta: { authorize: [Role.admin]}
    },
    {
        path: '/disponibilidadDoc',
        name: 'DisponibilidadDoc',
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
    /*
    {
        path: '/infoabcdario',
        name: 'Imagenes Abecedario',
        component: InfoAbcdario
    },
    {
        path: '/infoimg',
        name: 'Imagenes',
        component: InfoImagenes,
        meta: { authorize: [Role.user, Role.admin] }
    },
    {
        path: '/infocolores',
        name: 'InfoColores',
        component: InfoColores
    },
    {
        path: '/infonumeros',
        name: 'InfoNumeros',
        component: InfoNumeros
    },
    {
        path: '/infopronombres',
        name: 'InfoPronombres',
        component: InfoPronombres
    },
    {
        path: '/infovideo',
        name: 'InfoVideo',
        component: InfoVideo,
        meta: { authorize: [Role.user, Role.admin] }
    },
    {
        path: '/videoabcdario',
        name: 'VideoAbcdario',
        component: VideoAbcdario
    },
    {
        path: '/videcolores',
        name: 'VideoColores',
        component: VideoColores
    },
    {
        path: '/videpronombres',
        name: 'VideoPronombres',
        component: VideoPronombres
    },
    {
        path: '/pruebanivel1',
        name: 'PruebaLevel1',
        component: PruebaLevel1,
        meta: { authorize: [Role.user, Role.admin] }
    },
    {
        path: '/pruebanivel2',
        name: 'PruebaLevel2',
        component: PruebaLevel2,
        meta: { authorize: [Role.user, Role.admin] }
    },
    {
        path: '/resultadosalumnos',
        name: 'ResultadosAlumnos',
        component: ResultadosAlumnos,
        meta: { authorize: [Role.user, Role.admin] }
    },
    {
        path: '/PracticaenVivo',
        name: 'PracticaenVivo',
        component: PracticaenVivo,
        meta: { authorize: [Role.user, Role.admin] }
    },
    {
        path: '/Traductor',
        name: Traductor,
        component: Traductor,
        meta: { authorize: [Role.user] }
    },
    //demoooooo
    {
        path: '/demo',
        name: 'PruebaDemo',
        component: PruebaDemo
    },
    {
        path: '/InfoVideosDemo',
        name: 'InfoVideoDemo',
        component: InfoVideoDemo
    },
    {
        path: '/infoimgDemo',
        name: InfoImagenesDemo,
        component: InfoImagenesDemo
    },
    {
        path: '/pruebaLevel1Demo',
        name: PruebaLevel1Demo,
        component: PruebaLevel1Demo
    },
    {
        path: '/PruebaLevel2Demo',
        name: PruebaLevel2Demo,
        component: PruebaLevel2Demo
    },
    {
        path: '/InfoAbecedarioDemo',
        name: InfoAbecedarioDemo,
        component: InfoAbecedarioDemo
    },
    {
        path: '/InfoColoresDemo',
        name: InfoColoresDemo,
        component: InfoColoresDemo
    },
    {
        path: '/InfoNumerosDemo',
        name: InfoNumerosDemo,
        component: InfoNumerosDemo
    },
    {
        path: '/InfoPronombresDemo',
        name: InfoPronombresDemo,
        component: InfoPronombresDemo
    },
    {
        path: '/InfoVideoAbcdarioDemo',
        name: VideoAbcdarioDemo,
        component: VideoAbcdarioDemo
    },
    {
        path: '/VideoColoresDemo',
        name: VideoColoresDemo,
        component: VideoColoresDemo
    },
    {
        path: '/VideoPronombresDemo',
        name: VideoPronombresDemo,
        component: VideoPronombresDemo
    },
    {
        path: '/TraductorDemo',
        name: TraductorDemo,
        component: TraductorDemo
    },
    {
        path: '/PracticaenVivoDemo',
        name: 'PracticaenVivoDemo',
        component: PracticaenVivoDemo
    },
    {
        path: '/ResultadosAlumnosExternos',
        name: 'ResultadosAlumnosExternos',
        component: ResultadosAlumnosExternos
    }, */
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
