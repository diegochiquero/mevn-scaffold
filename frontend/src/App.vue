<template>
	<v-app>
		<TheHeader />
		<!-- Background color-->
		<v-content class="grey lighten-5">
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
