<template>
	<div class="users">
		<v-container class="my-5">
			<v-data-table
				:headers="headers"
				:items="allUsers"
				:page.sync="page"
				:items-per-page="itemsPerPage"
				hide-default-footer
				class="elevation-1 font-weight-regular"
				@page-count="pageCount = $event"
			>
				<template
					v-if="allUsers.length !== 0"
					v-slot:item.actions="{ item }"
				>
					<v-btn
						@click="clickToUpDateUser(item)"
						text
						icon
						color="blue lighten-2"
					>
						<v-icon>mdi-pencil</v-icon>
					</v-btn>
					<v-btn @click="clickToDeleteUser(item)" text icon color="error">
						<v-icon>mdi-delete</v-icon>
					</v-btn>
				</template>
				<template v-else v-slot:no-data>
					<v-alert type="error">
						Sorry, nothing to display here :( Please, enter at least one
						user.
					</v-alert>
				</template></v-data-table
			>
			<div class="text-center pt-2">
				<v-pagination v-model="page" :length="pageCount"></v-pagination>
				<v-text-field
					:value="itemsPerPage"
					label="Items per page"
					type="number"
					min="-1"
					max="15"
					@input="itemsPerPage = parseInt($event, 10)"
				></v-text-field>
			</div>
		</v-container>
	</div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'

export default {
	name: 'CrudUsers',
	data() {
		return {
			page: 1,
			pageCount: 0,
			itemsPerPage: 3,
			headers: [
				{
					text: 'Name',
					align: 'start',
					value: 'username',
					width: '40%'
				},
				{ text: 'Email', value: 'email', width: '40%' },
				{
					text: 'Actions',
					value: 'actions',
					width: '20%',
					align: 'right',
					sortable: false
				}
			]
		}
	},

	methods: {
		...mapActions(['getAllUsers', 'deleteUser', 'updateUser']),
		clickToDeleteUser(user) {
			this.$swal({
				title: `Are you sure to delete ${user.username}`,
				text: "You won't be able to revert this!",
				type: 'warning',
				showCancelButton: true,
				confirmButtonColor: '#3085d6',
				cancelButtonColor: '#d33',
				confirmButtonText: 'Yes, delete it!'
			}).then(result => {
				if (result.value) {
					this.$swal('Deleted!', 'Your file has been deleted.', 'success')
					this.deleteUser(user._id)
				}
			})
		},
		clickToUpDateUser(user) {
			const emailIsValid = email => {
				return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
			}
			this.$swal({
				title: 'Ready to update user?',
				html:
					`<input id="swal-input1" class="swal2-input" value="${user.username}">` +
					`<input id="swal-input2" class="swal2-input" value="${user.email}">`,
				confirmButtonText: 'Yes, update it!',
				showCancelButton: true,
				cancelButtonColor: '#d33',
				preConfirm: () => {
					let username = this.$swal
						.getPopup()
						.querySelector('#swal-input1').value
					let email = this.$swal.getPopup().querySelector('#swal-input2')
						.value
					if (username.trim() === '') {
						this.$swal.showValidationMessage(`Name is required`)
					}
					if (email.trim() === '' || emailIsValid(email) === false) {
						this.$swal.showValidationMessage(`Empty or invalid email`)
					}
					return { username: username, email: email }
				}
			}).then(result => {
				if (result.value) {
					this.$swal(
						`Username: ${result.value.username} \nEmail ${result.value.email}`
					)
					const updUser = {
						user: {
							_id: user._id,
							username: result.value.username,
							email: result.value.email
						}
					}
					this.updateUser(updUser)
				}
			})
		}
	},
	computed: mapGetters(['allUsers']),
	created() {
		this.getAllUsers()
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
