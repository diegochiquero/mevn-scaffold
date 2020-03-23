<template>
	<nav>
		<v-app-bar app elevate-on-scroll class="grey lighten-5">
			<router-link :to="{ name: 'home' }">
				<v-img
					@click="$scrollToTop"
					alt="Vuetify Logo"
					src="@/assets/v-logo.svg"
					contain
					transition="scale-transition"
					height="38px"
					width="38px"
				/>
			</router-link>
			<v-toolbar-title class="text-uppercase blue-grey--text">
				<span>Mevn</span>
				<span class="font-weight-light blue-grey--text">Scaffold</span>
			</v-toolbar-title>
			<v-spacer></v-spacer>
			<v-toolbar-items @click="$scrollToTop" class="hidden-sm-and-down">
				<router-link :to="{ name: 'home' }"
					><v-btn text color="blue-grey" float class="my-3"
						>Home</v-btn
					></router-link
				>
				<router-link :to="{ name: 'crud' }"
					><v-btn text color="blue-grey" float class="my-3"
						>Crud</v-btn
					></router-link
				>
				<router-link :to="{ name: 'team' }"
					><v-btn text color="blue-grey" float class="my-3"
						>Team</v-btn
					></router-link
				>
			</v-toolbar-items>
			<v-menu top offset-y>
				<template v-slot:activator="{ on }">
					<v-app-bar-nav-icon
						class="hidden-md-and-up"
						color="blue-grey"
						dark
						v-on="on"
					></v-app-bar-nav-icon>
				</template>
				<v-list>
					<v-list-item @click="$scrollToTop">
						<router-link :to="{ name: 'home' }">
							<v-icon class="mr-2" color="blue lighten-2"
								>mdi-home</v-icon
							><v-list-item-action-text
								class="blue-grey--text text--darken-2 body-1"
								>Home</v-list-item-action-text
							></router-link
						>
					</v-list-item>
					<v-divider></v-divider>
					<v-list-item @click="$scrollToTop">
						<router-link :to="{ name: 'crud' }">
							<v-icon class="mr-2" color="teal lighten-1"
								>mdi-account-edit</v-icon
							><v-list-item-action-text
								class="blue-grey--text text--darken-2 body-1"
								>Crud</v-list-item-action-text
							></router-link
						>
					</v-list-item>
					<v-divider></v-divider>
					<v-list-item @click="$scrollToTop">
						<router-link :to="{ name: 'team' }">
							<v-icon class="mr-2" color="red lighten-2"
								>mdi-account-group</v-icon
							><v-list-item-action-text
								class="blue-grey--text text--darken-2 body-1"
								>Team</v-list-item-action-text
							></router-link
						>
					</v-list-item>
				</v-list>
			</v-menu>
		</v-app-bar>
	</nav>
</template>
<script>
export default {
	name: 'TheHeader'
}
</script>
<style scoped>
a {
	text-decoration: none;
}
</style>
