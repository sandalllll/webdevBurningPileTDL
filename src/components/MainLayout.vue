<script setup>
import ThemeToggle from './ThemeToggle.vue'
import ListBase from './ListBase.vue'
import { useUserStore } from './../stores/useUserStore'
const userStore = useUserStore()
if (userStore.ud.current == "")
{
	window.location.href += "login";
}
</script>

<template>
	<link rel="stylesheet" href="src/style.css">
	<main class="main">
		<router-link to="/about">О списке</router-link>
		<router-link to="/logout">Выйти</router-link>
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
