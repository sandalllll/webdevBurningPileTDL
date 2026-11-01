<script setup>
	import { ref, watch } from 'vue'
	import SearchBar from './SearchBar.vue'
	import TodosContainer from './TodosContainer.vue'
	let substring = ref("");
	const substringSet = (value) => {
		substring.value = value;
	};
	const substringGet = (value) => {
		return substring.value;
	};
	
	const todosRaw = ref([]);
	
	const todosFilteredUnchecked = ref([]);
	const todosFilteredChecked = ref([]);
	
	const filterTodos = () =>
	{
		const sbs = substring.value.replace(/[\W_]+/g," ");
		{
			const toAddList = [];
			for (const i in todosRaw.value)
			{
				if (!(todosRaw.value[i].cmp) || sbs && !(todosRaw.value[i].cont.replace(/[\W_]+/g," ").toLowerCase().includes(sbs)))
					continue;
				toAddList.push({ id: i, cmp: todosRaw.value[i].cmp, cont: todosRaw.value[i].cont });
			}
			todosFilteredUnchecked.value = toAddList;
		}
		{
			const toAddList = [];
			for (const i in todosRaw.value)
			{
				if (todosRaw.value[i].cmp || sbs && !(todosRaw.value[i].cont.replace(/[\W_]+/g," ").toLowerCase().includes(sbs)))
					continue;
				toAddList.push({ id: i, cmp: todosRaw.value[i].cmp, cont: todosRaw.value[i].cont });
			}
			todosFilteredChecked.value = toAddList;
		}
	};
	
	watch(substring, () =>
	{
		filterTodos();
	});
	watch(todosRaw, () =>
	{
		window.localStorage.setItem("todos", JSON.stringify(todosRaw.value));
		filterTodos();
	}, { deep: true });
	
	{
		let str = window.localStorage.getItem("todos");
		if (str == null)
			str = "";
		if (str.trim() == "")
			window.localStorage.setItem("todos", "[]");
		else
		{
			let tmp;
			try
			{
				tmp = JSON.parse(str);
				todosRaw.value = tmp;
			}
			catch (e)
			{
				window.localStorage.setItem("todos", "[]");
			}
		}
	}
	
	const markTodo = (id) =>
	{
		todosRaw.value[id].cmp = true;
	};
	
	const unmarkTodo = (id) =>
	{
		todosRaw.value[id].cmp = false;
	};
	
	const textareaTrigger = (evt) =>
	{
		if (evt.keyCode == 13 && !evt.shiftKey)
		{
			evt.preventDefault();
			const id_ = parseInt(window.localStorage.getItem("editIndex"));
			if (editorTextarea.value.replace(/^\s+|\s+$/g, '') == "")
			{
				if (id_ >= 0)
					todosRaw.value.splice(id_, 1);
			}
			else
			{
				if (id_ >= 0)
					todosRaw.value[id_].cont = editorTextarea.value;
				else
					todosRaw.value.push({cmp: false, cont: editorTextarea.value});
			}
			editorDialog.close();
			return true;
		}
	}
	
	let once = true;
	const editTodo = (id) =>
	{
		if (once)
		{
			once = false;
			editorTextarea.addEventListener("keypress", textareaTrigger);
		}
		window.localStorage.setItem("editIndex", id);
		if (id < 0)
			editorTextarea.value = "";
		else
			editorTextarea.value = todosRaw.value[id].cont;
		editorDialog.showModal();
	};
</script>

<template>
	<SearchBar @substringGet="substringGet" @substringSet="substringSet" />
	<TodosContainer @markTodo="markTodo" @unmarkTodo="unmarkTodo" @editTodo="editTodo" :todosFilteredChecked="todosFilteredChecked" :todosFilteredUnchecked="todosFilteredUnchecked" />
	<div>
		<dialog id="editorDialog">
			<label class="lablel" for="editorTextarea">Введите название нового помысла чтобы добавить или измените существующий. Сотрите всё что-бы удалить.</label>
			<textarea id="editorTextarea" class="field" placeholder="новый помысел"></textarea>
		</dialog>
		<button class="button button-element" @click="editTodo(-1)" aria-label="новый помысел">
			+
		</button>
	</div>
	
	
	
</template>