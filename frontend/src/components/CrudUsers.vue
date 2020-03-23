<template>
	<div class="users">
		<v-container class="my-5">
			<v-card flat v-if="allUsers.length !== 0">
				<template v-for="(user, index) in allUsers">
					<v-layout
						v-bind:key="user._id"
						wrap
						class="pa-3 blueBorder"
						align-center
					>
						<v-flex xs6 md5 class="ps-6">
							<div class=" blue-grey--text body-1">
								{{ user.username }}
							</div>
						</v-flex>
						<v-flex xs6 md5 class="ps-6">
							<div class="blue-grey--text body-1">
								{{ user.email }}
							</div>
						</v-flex>
						<v-flex xs6 sm6 md1 class="ps-12">
							<div class="grey--text">
								<v-btn
									@click="clickToUpDateUser(user)"
									text
									icon
									color="blue lighten-2"
								>
									<v-icon>mdi-pencil</v-icon>
								</v-btn>
							</div>
						</v-flex>
						<v-flex xs6 sm6 md1 class="ps-12">
							<v-btn
								@click="clickToDeleteUser(user)"
								text
								icon
								color="error"
							>
								<v-icon>mdi-delete</v-icon>
							</v-btn>
						</v-flex>
					</v-layout>
					<v-divider
						v-if="index + 1 < allUsers.length"
						:key="index"
					></v-divider>
				</template>
			</v-card>
			<v-card flat v-else height="60px" class="mx-auto">
				<v-card-text class="text-center error--text font-weight-regular">
					There are no users. Please enter at least one above.
				</v-card-text></v-card
			>
		</v-container>
	</div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'

export default {
	name: 'CrudUsers',
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
