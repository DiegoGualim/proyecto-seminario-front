import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//Import picker
import { Datepicker, Timepicker, DatetimePicker } from '@livelybone/vue-datepicker'
Vue.component('datepicker', Datepicker)
Vue.component('timepicker', Timepicker)
Vue.component('datetime-picker', DatetimePicker)

//Import BoostrapVue
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import './assets/styles/app.scss'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.config.productionTip = false
new Vue({
    data: {
        type: ''
    },
    mounted() {
        if (localStorage.type) {
            this.type = localStorage.type
        }
    },
    router,
    store,
    render: (h) => h(App)
}).$mount('#app')
