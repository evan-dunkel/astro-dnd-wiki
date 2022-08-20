<template>
<aside class="w-48 px-2 shrink-0 sm:block" :class="($isMenuOpen)?'block w-screen sm:w-48':'hidden'">
	<div class="sticky top-0 px-4 py-2 sm:border-r border-neutral-900/10 dark:border-neutral-100/10">
		<!-- left-sidebar -->
		<ul class="flex flex-col">
			<template v-for="category in props.items">
				<details class="pb-4 select-none " :open="props.currentPath.includes(category.url)">
					<summary class="pb-2">
						<span class="text-sm font-bold">{{ category.headerTitle}}
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 1 16 16" width="16" height="16" aria-hidden="true" class="inline dark:fill-neutral-100">
						<path fill-rule="evenodd" d="M6.22 3.22a.75.75 0 011.06 0l4.25 4.25a.75.75 0 010 1.06l-4.25 4.25a.75.75 0 01-1.06-1.06L9.94 8 6.22 4.28a.75.75 0 010-1.06z"></path>
						</svg></span>
					</summary>
					<ul class="pb-3 space-y-1 text-sm">
						<template v-for="page in category.items">
							<li :class="page.url.includes(props.currentPath) ? 'font-bold text-sky-500' : 'dark:text-neutral-400'" class="list-none py-0.5"><a :href="page.url">{{ page.title }}</a></li>
						</template>
					</ul>
				</details>
			</template>
		</ul>
	</div>
</aside>
</template>

<script lang="ts" setup>
	import { useStore } from '@nanostores/vue';
	import { isMenuOpen } from './stores/menu_store';

	let id = 0;
	const props = defineProps({
		items: Object,
		currentPath: String
	});
	const $isMenuOpen = useStore(isMenuOpen);
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