<script setup>
	import { ref, watch } from 'vue'
	const themeSwitchState = ref(false);
	watch(themeSwitchState, (newState) => {
		if (newState)
		{
			window.localStorage.setItem("theme", "d");
			theHtml.setAttribute("data-theme", "dark");
		}
		else
		{
			window.localStorage.setItem("theme", "b");
			theHtml.setAttribute("data-theme", "bright");
		}
	})
	if (window.localStorage.getItem("theme") == "d")
		themeSwitchState.value = true;
</script>

<template>
	<div>
		2026<br>
		Полночь?<input type="checkbox" v-model="themeSwitchState" id="themeCheckbox">
		<label class="lablel" for="themeCheckbox">Нажмите что-бы сменить тему.</label>
	</div>
</template>