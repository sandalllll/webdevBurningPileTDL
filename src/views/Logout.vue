<script setup>
import ThemeToggle from './../components/ThemeToggle.vue'
import { ref, toRaw } from 'vue'
import { useUserStore } from './../stores/useUserStore'
import { useTodoStore } from './../stores/useTodoStore'
const userStore = useUserStore()
const todoStore = useTodoStore()
const arrs = JSON.parse(JSON.stringify(toRaw(todoStore.tds)))
console.log(arrs)
console.log(userStore.ud.current)
arrs[userStore.ud.current] = JSON.parse(window.localStorage.getItem("todos"))
console.log(arrs)
todoStore.tds = arrs
window.localStorage.setItem("todos", "[]")
userStore.ud = {current: "", users: userStore.ud.users}
window.location.href += "/../login";
</script>

<template>
	<span>
		выходим
	</span>
</template>
