<script setup>
import ThemeToggle from './../components/ThemeToggle.vue'
import { ref, toRaw } from 'vue'
import { useUserStore } from './../stores/useUserStore'
import { useTodoStore } from './../stores/useTodoStore'
const userStore = useUserStore()
const todoStore = useTodoStore()
todoStore.$patch((state) => {
	state.tds[userStore.ud.current] = JSON.parse(window.localStorage.getItem("todos"))
});
if (userStore.ud.current != "")
{
	window.localStorage.setItem("todos", "[]")
	userStore.ud = {current: "", users: userStore.ud.users}
}
window.location.href = window.location.href.substring(0, window.location.href.length - 6) + "login";
</script>

<template>
	<span>
		выходим
	</span>
</template>
