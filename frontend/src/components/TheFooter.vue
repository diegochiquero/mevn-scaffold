<template>
	<v-footer color="blue-grey lighten-3" padless>
		<v-row justify="center" no-gutters>
			<router-link :to="{ name: 'home' }"
				><v-btn
					@click="$scrollToTop"
					color="grey--text text--lighten-1"
					text
					class="my-2"
				>
					Home</v-btn
				></router-link
			>
			<router-link :to="{ name: 'crud' }"
				><v-btn
					@click="$scrollToTop"
					color="grey--text text--lighten-1"
					text
					class="my-2"
				>
					Crud</v-btn
				></router-link
			>
			<router-link :to="{ name: 'team' }"
				><v-btn
					@click="$scrollToTop"
					color="grey--text text--lighten-1"
					text
					class="my-2"
				>
					Team</v-btn
				></router-link
			>
			<v-col
				class="blue-grey lighten-4 py-4 text-center grey--text text--darken-2"
				cols="12"
				><v-layout wrap
					><v-flex xs12 sm6>
						{{ new Date().getFullYear() }} —
						<span
							class="blue-grey lighten-4 text-uppercase grey--text text--darken-2"
							>Mevn</span
						>
						<span
							class="blue-grey lighten-4 font-weight-light grey--text text--darken-2"
							>Scaffold</span
						></v-flex
					>
					<v-flex xs12 sm6>
						<span
							class="blue-grey lighten-4 font-weight-light grey--text text--darken-2"
						>
							Made with </span
						><v-icon class="pb-1 ml-1" small color="pink"
							>mdi-cards-heart</v-icon
						>
						<span
							class="blue-grey lighten-4 ml-2 font-weight-light grey--text text--darken-2"
							>by</span
						>
						<span class="ml-2"
							><a href="https://about.me/diegochiquero" target="_blank"
								>Diego Chiquero</a
							></span
						>
					</v-flex>
				</v-layout>
			</v-col>
		</v-row>
	</v-footer>
</template>

<script>
export default {
	name: 'TheFooter'
}
</script>
<style scoped>
a {
	text-decoration: none;
}
</style>
