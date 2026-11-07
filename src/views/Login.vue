<script setup>
import ThemeToggle from './../components/ThemeToggle.vue'
import { ref, toRaw } from 'vue'
import { useUserStore } from './../stores/useUserStore'
import { useTodoStore } from './../stores/useTodoStore'
const userStore = useUserStore()
const todoStore = useTodoStore()
const lgn = ref("")
const pswd = ref("")
const fail = ref(false)
const tryIn = () =>
{
	if (userStore.ud.users[lgn.value] !== undefined && userStore.ud.users[lgn.value].password == pswd.value)
	{
		window.localStorage.setItem("todos", JSON.stringify(toRaw(todoStore.tds[lgn.value])))
		userStore.ud = {current: lgn.value, users: userStore.ud.users}
		window.location.href = window.location.href.substring(0, window.location.href.length - 5);
	}
	else
		fail.value = true;
}
</script>

<template>
	<link rel="stylesheet" href="src/style.css">
	<main class="main">
		<div class="head">
			Вход
		</div>
		<div class="list-base">
			<div class="list list-outer">
				<div class="list">
					Нет учетной записи? <router-link to="/signin">(Регистрация)</router-link><br>
					Логин<br>
					<input v-model="lgn"><br>
					Пароль<br>
					<input type="password" v-model="pswd"><br>
					<button @click="tryIn()">войти</button>
					<span v-if="fail">
						<br>Не знаем такого
					</span>
				</div>
			</div>
		</div>
		<ThemeToggle />
	</main>
</template>
