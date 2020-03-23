<template>
	<!-- Background color-->
	<v-app class="grey lighten-2">
		<TheHeader />
		<v-content class="mx-4 mb-4">
			<router-view></router-view>
		</v-content>
		<TheFooter />
	</v-app>
</template>

<script>
import TheHeader from '@/components/TheHeader'
import TheFooter from '@/components/TheFooter'

export default {
	name: 'App',
	components: {
		TheHeader,
		TheFooter
	},
	data: () => ({
		//
	})
}
</script>
