//To Avoid: "[Vue warn]: Unknown custom element:" when running unit tests from vuetify syntax like (v-form - v-b)
//Need to import Vue and Vuetify - vuetify doesn't work properly with createLocalVue
import Vue from 'vue'
import Vuetify from 'vuetify'

Vue.use(Vuetify)

import { mount } from '@vue/test-utils'
import AddUser from '@/components/AddUser'

describe('AddUser', () => {
	it('enter text and check the value of input username and email', () => {
		const wrapper = mount(AddUser)
		const inputUsername = wrapper.find('[data-testid="username-input"]')
		const inputEmail = wrapper.find('[data-testid="email-input"]')
		inputUsername.setValue('Adam Jahr')
		inputEmail.setValue('adam@mail.com')
		expect(wrapper.vm.username).toBe('Adam Jahr')
		expect(wrapper.vm.email).toBe('adam@mail.com')
	})
})
