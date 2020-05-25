/*Avoid: "[Vue warn]: Unknown custom element:" when running unit tests
from vuetify syntax like (v-form - v-btn) import Vue and Vuetify*/
import Vue from 'vue'
import Vuetify from 'vuetify'

Vue.use(Vuetify)

import { shallowMount } from '@vue/test-utils'
import Home from '@/views/Home.vue'

describe('Home.vue', () => {
	test('renders props.msg when passed', () => {
		const msg = 'new message'
		const wrapper = shallowMount(Home, {
			propsData: { msg }
		})
		expect(wrapper.text()).toMatch(msg)
	})
})
