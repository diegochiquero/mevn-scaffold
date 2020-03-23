<template>
	<div class="home">
		<v-container class="my-5">
			<v-row class="mt-1">
				<v-col
					cols="12"
					md="3"
					justify="center"
					align="center"
					v-for="logo in logos"
					:key="logo.alt"
				>
					<v-img
						max-heigth="250"
						max-width="250"
						:alt="logo.alt"
						:src="logo.src"
					/>
				</v-col>
			</v-row>
		</v-container>
		<h1 class="font-weight-light display-2" justify="center" align="center">
			Welcome to MEVN scaffold
		</h1>
		<h2 class="font-weight-thin" justify="center" align="center">
			MongoDB + Express + Vue + NodeJS + Vuetify + Docker
		</h2>
		<h3 class="subtitle-1 mb-12" justify="center" align="center">
			Frontend / Backend
		</h3>
	</div>
</template>

<script>
// @ is an alias to /src

export default {
	name: 'Home',
	data: () => ({
		logos: [
			{ src: '/mongodb-logo.png', alt: 'mongo logo' },
			{ src: '/expressjs-logo.png', alt: 'express logo' },
			{ src: '/vue-logo.png', alt: 'vue logo' },
			{ src: '/node-logo.png', alt: 'node logo' }
		]
	})
}
</script>
