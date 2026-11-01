<script setup>
	defineProps({
		todosFilteredChecked: {
			type: Array,
			required: true
		},
		todosFilteredUnchecked: {
			type: Array,
			required: true
		}
	});
	const emit = defineEmits(['markTodo', 'unmarkTodo', 'editTodo']);
	const handleMark = (id) =>
	{
		emit('markTodo', id)
	}
	const handleUnmark = (id) =>
	{
		emit('unmarkTodo', id)
	}
	const handleEdit = (id) =>
	{
		emit('editTodo', id)
	}
</script>

<template>
	<div v-for="item in todosFilteredChecked">
		<div class="js-todo js-todo-outer">
			<button class="js-todo js-todo-inner js-todo-inner--side" @click="handleMark(item.id)" aria-label="приметить помысел: {{ item.cont }}">❎</button>
			<div class="js-todo js-todo-inner js-todo-inner--center">
				{{ item.cont }}
			</div>
			<button class="js-todo js-todo-inner js-todo-inner--side" @click="handleEdit(item.id)" aria-label="изменить помысел: {{ item.cont }}">🖉</button>
		</div>
	</div>
	<div v-for="item in todosFilteredUnchecked">
		<div class="js-todo js-todo-outer">
			<button class="js-todo js-todo-inner js-todo-inner--side" @click="handleUnmark(item.id)" aria-label="возвратить помысел: {{ item.cont }}">✅</button>
			<div class="js-todo js-todo-inner js-todo-inner--center">
				<s>{{ item.cont }}</s>
			</div>
			<button class="js-todo js-todo-inner js-todo-inner--side" @click="handleEdit(item.id)" aria-label="изменить помысел: {{ item.cont }}">🖉</button>
		</div>
	</div>
</template>