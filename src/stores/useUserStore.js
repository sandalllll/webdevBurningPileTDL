import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserStore = defineStore
(
	'user',
	() =>
	{
		const ud = ref({current: "", users: {}})
		return { ud }
	},
	{ persist: true }
)

//<script setup lang="ts">
//import { useUserStore } from '@/stores/counter'
//
//	userStore.ud = {current: "S", users: userStore.ud.users}
//const userStore = useUserStore()
//</script>
//
//<template>
//  <button @click="userStore.get()">
//    Count: {{ userStore.obj }} (Double: {{ userStore.obj }})
//  </button>
//</template>