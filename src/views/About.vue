<script setup>
import ThemeToggle from './../components/ThemeToggle.vue'
</script>

<template>
	<link rel="stylesheet" href="src/style.css">
	<main class="main">
		<router-link to="/">Назад</router-link>
		<div class="head">
			Что же это такое?
		</div>
		<div class="list-base">
			<div class="list list-outer">
				<div class="list">
					Созданый чуджаком, ненавидящим фронтенд программистом<br>по указивке сверху сайт для ваших заметок<br>(сайт локальный, учетных записей на сервере нет).
				</div>
			</div>
		</div>
		<ThemeToggle />
	</main>
</template>
