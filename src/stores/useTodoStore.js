import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useTodoStore = defineStore
(
	'todo',
	() =>
	{
		const tds = ref({})
		return { tds }
	},
	{ persist: true }
)