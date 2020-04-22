import ApiService from '@/services/api.service'
//TODO: UPPERCASE
//initial state
const state = {
	users: []
}

//getters
const getters = {
	// eslint-disable-next-line
	allUsers: (state) => state.users
}

// action
const actions = {
	async getAllUsers({ commit }) {
		const response = await ApiService.fetchUsers()
		commit('setUsers', response.data.user)
	},
	async addUser({ commit }, user) {
		const response = await ApiService.sumUpUser(user)
		commit('newUser', response.data.user)
	},
	async deleteUser({ commit }, id) {
		await ApiService.removeUser(id)
		commit('eliminateUser', id)
	},
	async updateUser({ commit }, updUser) {
		const response = await ApiService.actualize(updUser)
		commit('upToDateUser', response.data.user)
	}
}

// mutations
const mutations = {
	setUsers: (state, users) => (state.users = users),
	newUser: (state, user) => state.users.unshift(user),
	eliminateUser: (state, id) =>
		(state.users = state.users.filter(user => user._id !== id)),
	upToDateUser: (state, updUser) => {
		const index = state.users.findIndex(user => user._id === updUser._id)
		if (index !== -1) {
			state.users.splice(index, 1, updUser)
		}
	}
}

export default {
	//namespaced: true,
	state,
	getters,
	actions,
	mutations
}
