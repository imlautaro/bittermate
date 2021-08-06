<template>
	<div class="container flex flex-col py-4 space-y-4">
		<ui-card>
			<div class="p-4">
				<span class="font-bold text-xl">Account details</span>
			</div>
			<div class="flex items-center p-4 space-x-2">
				<phosphor-icons name="envelope-simple" />
				<span>{{ $auth.user.email }}</span>
			</div>
		</ui-card>
		<ui-button secondary @click="$auth.logout()">Logout</ui-button>
	</div>
</template>
