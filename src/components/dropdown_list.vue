<template>
<!-- <span class="font-semibold text-slate-900 dark:text-slate-200" @click="showDropdown = !showDropdown">{{ title }}</span>
<ul class="space-y-3 lg:space-y-1.5" ">
</ul> -->
<template v-for="category in items">
	<details class="select-none pb-4" :open="currentPath.includes(category.path)">
		<summary class="pb-2">
			<span class="inline font-bold text-sm">{{ category.headerTitle}}
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 1 16 16" width="16" height="16" aria-hidden="true" class="inline dark:fill-neutral-100">
			<path fill-rule="evenodd" d="M6.22 3.22a.75.75 0 011.06 0l4.25 4.25a.75.75 0 010 1.06l-4.25 4.25a.75.75 0 01-1.06-1.06L9.94 8 6.22 4.28a.75.75 0 010-1.06z"></path>
			</svg></span>
		</summary>
		<ul class="space-y-1 pb-3 text-sm">
			<template v-for="page in category.items">
				<li :class="page.url.includes(currentPath) ? 'font-bold text-sky-500' : 'dark:text-neutral-400'" class="list-none py-0.5"><a :href="page.url">{{ page.title }}</a></li>
			</template>
		</ul>
	</details>
</template>
</template>

<script lang="ts">
let id = 0
export default {
	props: {
		items: Object,
		currentPath: String
	}
};
</script>
<style>
details > summary {
	list-style: none;
	cursor: pointer;
}
details > summary::-webkit-details-marker {
	display: none;
}
details[open] > summary > span > svg {
	transform: rotate(90deg);
	transition: .15s transform ease;
}
details > summary > span > svg {
	transform: rotate(0);
	transition: .15s transform ease;
}
</style>