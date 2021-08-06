<template>
	<div class="bg-gray-100 flex flex-col rounded-t-md">
		<div class="flex items-center px-4 py-3 space-x-2">
			<phosphor-icons v-if="icon" class="text-gray-600" :name="icon" />
			<div class="relative w-full">
				<component
					:is="multiple != undefined ? 'textarea' : 'input'"
					:id="id"
					@focus="focus = true"
					@blur="focus = false"
					@input="(event) => $emit('input', event.target.value)"
					:value="text"
					class="duration-100 font-sans text-base p-0 bg-transparent placeholder-transparent transform w-full"
					:class="{
						'translate-y-2': active,
						'resize-y': multiple != undefined,
					}"
					:placeholder="label"
					:type="
						multiple != undefined
							? undefined
							: type == 'password'
							? showPassword
								? 'text'
								: 'password'
							: type
					"
				/>
				<label
					:for="id"
					class="absolute duration-100 left-0 top-2.5 transform"
					:class="{
						'-translate-y-4 text-xs': active,
						'text-red-600': status == 'error',
						'text-primary-600': status == 'active',
						'text-green-600': status == 'success',
						'text-gray-600': !status,
						'-translate-y-2.5': !active,
					}"
					>{{ label }}</label
				>
			</div>
			<div
				v-if="type == 'password'"
				class="flex"
				@click.prevent="showPassword = !showPassword"
			>
				<phosphor-icons
					class="text-gray-600"
					:name="showPassword ? 'eye' : 'eye-slash'"
				/>
			</div>
		</div>
		<div class="bg-gray-400 h-0.5">
			<div
				:class="{
					'!scale-x-100': status,
					'bg-red-600': status == 'error',
					'bg-primary-600': status == 'active',
					'bg-green-600': status == 'success',
				}"
				class="duration-100 h-full scale-x-0 transform w-full"
			></div>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from '@nuxtjs/composition-api'
export default defineComponent({
	props: {
		text: {
			default: '',
			type: String,
		},
		icon: {
			default: undefined,
			type: String,
		},
		multiple: {
			default: undefined,
		},
		label: {
			default: 'Email',
			type: String,
		},
		type: {
			default: 'text',
			type: String,
		},
		error: {
			default: '',
			type: String,
		},
		success: {
			default: '',
			type: String,
		},
		id: {
			default: 'input',
			type: String,
		},
	},
	model: {
		prop: 'text',
		event: 'input',
	},
	setup(props) {
		const focus = ref(false)
		const active = computed(() => !!focus.value || !!props.text.length)
		const status = computed(() => {
			if (props.error) {
				return 'error'
			}
			if (props.success) {
				return 'success'
			}
			if (!!focus.value) {
				return 'active'
			}
		})
		const showPassword = ref(false)
		return { focus, active, status, showPassword }
	},
})
</script>
