<template>
	<div class="addUser">
		<h2 class="mx-12 subheading blue-grey--text">
			Users CRUD
		</h2>
		<v-form v-model="isValid" ref="form">
			<v-container class="my-5">
				<v-row>
					<v-col cols="12" md="5">
						<v-text-field
							type="input"
							data-testid="username-input"
							v-model="username"
							:counter="20"
							label="First name"
							:rules="nameRules"
							required
						></v-text-field>
					</v-col>
					<v-col cols="12" md="5">
						<v-text-field
							type="input"
							data-testid="email-input"
							v-model="email"
							label="E-mail"
							:rules="emailRules"
							required
						></v-text-field>
					</v-col>
					<v-col cols="12" md="2">
						<v-spacer></v-spacer>
						<v-btn
							type="submit"
							:disabled="!isValid"
							depressed
							color="primary"
							class="mt-3"
							@click="submit"
							>submit</v-btn
						>
					</v-col>
				</v-row>
			</v-container>
		</v-form>
	</div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
	name: 'AddUser',
	data: () => ({
		isValid: true,
		username: '',
		nameRules: [
			v => !!v || 'Name is required',
			v => (v && v.length <= 20) || 'Name must be less than 20 characters'
		],
		email: '',
		emailRules: [
			v => !!v || 'E-mail is required',
			v =>
				/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
				'E-mail must be valid'
		]
	}),
	methods: {
		...mapActions(['addUser']),
		submit(e) {
			e.preventDefault()
			this.addUser({
				user: {
					username: this.username,
					email: this.email
				}
			})
			this.$refs.form.reset()
			this.$swal('Great', `Your user has been added`, 'success')
		}
	}
}
</script>

<style></style>
