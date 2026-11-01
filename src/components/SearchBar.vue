<script setup>
	import { computed, watch } from 'vue'
	const emit = defineEmits(['substringSet', 'substringGet']);
	const substring = computed({
		get()
		{
			return emit('substringGet');
		},
		set(newValue)
		{
			emit('substringSet', newValue);
		}
	});
</script>

<template>
	<div>
		<label class="lablel" for="searchBar">Введите название помысла чтобы найти его.</label>
		<input type="text" id="searchBar" class="field field-element" placeholder="найти" v-model="substring">
	</div>
</template>