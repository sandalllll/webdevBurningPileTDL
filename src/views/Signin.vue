<script setup>
import ThemeToggle from './../components/ThemeToggle.vue'
import { ref, toRaw } from 'vue'
import { useUserStore } from './../stores/useUserStore'
import { useTodoStore } from './../stores/useTodoStore'
const userStore = useUserStore()
const todoStore = useTodoStore()
const lgn = ref("")
const eml = ref("")
const pswd = ref("")
const pswd2 = ref("")
const failMsg = ref("")
const trySig = () =>
{
	const login = toRaw(lgn.value)
	if (login == "")
	{
		failMsg.value = "нужен логин"
		return
	}
	if (login.includes(" "))
	{
		failMsg.value = "пробелы в логине нельзя"
		return
	}
	if (userStore.ud.users[login] !== undefined)
	{
		failMsg.value = "такой логин уже есть"
		return
	}
	const email = toRaw(eml.value).trim()
	if (email.includes(" ") || ((email.match(/@/g) || []).length != 1))
	{
		failMsg.value = "такая почта явно не существует"
		return
	}
	const password = toRaw(pswd.value)
	if (password.length < 7)
	{
		failMsg.value = "пароль должен быть длиннее 6 символов"
		return
	}
	const password2 = toRaw(pswd2.value)
	if (password != password2)
	{
		failMsg.value = "пароли не совпадают"
		return
	}
	todoStore.$patch((state) => {
		state.tds[login] = [];
	});
	userStore.$patch((state) => {
		state.ud.users[login] = {password: password, email: email};
	});
	window.location.href = window.location.href.substring(0, window.location.href.length - 6) + "login";
}
</script>

<template>
	<link rel="stylesheet" href="src/style.css">
	<main class="main">
		<div class="head">
			Регестрация
		</div>
		<div class="list-base">
			<div class="list list-outer">
				<div class="list">
					<router-link to="/login">(назад)</router-link><br>
					Логин<br>
					<input v-model="lgn"><br>
					Почта<br>
					<input v-model="eml"><br>
					Пароль<br>
					<input type="password" v-model="pswd"><br>
					Пароль (повтор)<br>
					<input type="password" v-model="pswd2"><br>
					<button @click="trySig()">зарегестрироваться</button>
					<br>{{failMsg}}
				</div>
			</div>
		</div>
		<ThemeToggle />
	</main>
</template>
