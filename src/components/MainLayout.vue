<script setup>
import ThemeToggle from './ThemeToggle.vue'
import ListBase from './ListBase.vue'
</script>

<template>
	<link rel="stylesheet" href="src/style.css">
	<main class="main">
		<div class="head">
			Дела, домыслы и прочие, прочие, прочие...
		</div>
		<div class="list-base">
			<div class="list list-outer">
				<div class="list">
					<div class="margin"></div>
					<ListBase />
				</div>
			</div>
		</div>
		<ThemeToggle />
	</main>
</template>
