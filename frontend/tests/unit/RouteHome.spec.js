//To Avoid: "[Vue warn]: Unknown custom element:" when running unit tests from vuetify syntax like (v-form - v-b)
//Need to import Vue and Vuetify - vuetify doesn't work properly with createLocalVue
import Vue from 'vue'
import Vuetify from 'vuetify'
import VueRouter from 'vue-router'

Vue.use(Vuetify)

import { createLocalVue, mount } from '@vue/test-utils'
import Home from '@/views/Home.vue'

const localVue = createLocalVue()
localVue.use(VueRouter)

describe('Home', () => {
	const routes = [{ path: '/', component: Home }]
	it('render a component via routing', () => {
		const router = new VueRouter({ routes })
		const wrapper = mount(Home, {
			localVue,
			router
		})
		expect(wrapper.find(Home).exists()).toBe(true)
	})
})
