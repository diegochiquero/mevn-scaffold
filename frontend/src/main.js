/*
 * mevn-scaffold
 * 2020 Diego Chiquero Mena <chiquerodiego@gmail.com>
 * MIT Licensed
 */

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import vuetify from './plugins/vuetify'
import vueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'

Vue.use(vueSweetalert2)
Vue.config.productionTip = false
Vue.prototype.$scrollToTop = () => window.scrollTo(0, 0)

new Vue({
	router,
	store,
	vuetify,
	render: h => h(App)
}).$mount('#app')
