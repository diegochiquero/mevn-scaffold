import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Home = () => import('@/views/Home.vue')

export default new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	routes: [
		{
			path: '/',
			name: 'home',
			component: Home
		},
		{
			path: '/crud',
			name: 'crud',
			component: () => import('@/views/Crud.vue')
		},
		{
			path: '/team',
			name: 'team',
			component: () => import('@/views/Team.vue')
		}
	]
})
// route level code-splitting
// this generates a separate chunk (about.[hash].js) for this route
// which is lazy-loaded when the route is visited.
//import(/* webpackChunkName: "about" */ '@/views/Crud.vue')
