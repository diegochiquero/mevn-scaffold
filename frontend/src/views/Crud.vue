<template>
	<div class="crud">
		<AddUser />
		<CrudUsers />
	</div>
</template>

<script>
import CrudUsers from '@/components/CrudUsers.vue'
import AddUser from '@/components/AddUser.vue'

export default {
	name: 'Crud',
	components: {
		CrudUsers,
		AddUser
	}
}
</script>
<style scoped></style>
