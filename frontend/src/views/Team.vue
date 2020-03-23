<template>
	<div class="team">
		<h2 class="mx-12 subheading blue-grey--text">Team page</h2>
		<v-container class="my-5">
			<v-layout row wrap>
				<v-flex xs12 sm6 md3 v-for="person in team" :key="person.name">
					<v-card flat class="text-xs-center ma-3">
						<v-responsive class="pt-4" justify="center" align="center">
							<v-avatar size="150" class="ma-6">
								<img :src="person.avatar" />
							</v-avatar>
						</v-responsive>
						<v-card-text justify="center" align="center">
							<div class="subheading">{{ person.name }}</div>
							<div class="grey-text">{{ person.role }}</div>
						</v-card-text>
						<v-card-actions>
							<v-btn
								small
								text
								justify="center"
								align="center"
								color="primary"
							>
								<span class=" text-uppercase">Message</span>
							</v-btn>
							<v-btn
								small
								text
								justify="center"
								align="center"
								color="primary"
							>
								<span class=" text-uppercase">about</span>
							</v-btn>
						</v-card-actions>
					</v-card>
				</v-flex>
			</v-layout>
			<p class="text-justify blue-grey--text">
				Morbi mattis ullamcorper velit. Donec orci lectus, aliquam ut,
				faucibus non, euismod id, nulla. Fusce convallis metus id felis
				luctus adipiscing. Aenean massa. Vestibulum purus quam, scelerisque
				ut, mollis sed, nonummy id, metus. Nulla consequat massa quis enim.
				Praesent venenatis metus at tortor pulvinar varius.
			</p>
			<div class="text-justify blue-grey--text">
				Iconos diseñados por
				<a href="https://www.flaticon.es/autores/freepik" title="Freepik"
					>Freepik</a
				>
				from
				<a href="https://www.flaticon.es/" title="Flaticon"
					>www.flaticon.es</a
				>
			</div>
		</v-container>
	</div>
</template>

<script>
export default {
	name: 'Team',
	data: () => ({
		team: [
			{
				name: 'Jane Lane',
				role: 'Chief Executive Officer',
				avatar: '/avatar-1.png'
			},
			{
				name: 'John Doe',
				role: 'Full-Stack Developer',
				avatar: '/avatar-2.png'
			},
			{
				name: 'Elisa Dickinson',
				role: 'Graphic Design',
				avatar: '/avatar-3.png'
			},
			{
				name: 'Eric Walter',
				role: 'Chief Marketing Officer',
				avatar: '/avatar-4.png'
			}
		]
	})
}
</script>

<style scoped></style>
