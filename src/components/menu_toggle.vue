<template>
  <!--write to the imported store using `.set`-->
  <button @click="isMenuOpen.set(!$isMenuOpen)" class="sm:hidden translate-y-[-.5px]"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="-2 -4 24 24" stroke="currentColor" class="stroke-neutral-500"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg></button>
</template>

<script lang="ts" setup>
    import { isMenuOpen } from './stores/menu_store';
    import { useStore } from '@nanostores/vue';
    // import { onMounted, computed } from 'vue';
    // read the store value with the `useStore` hook
    const $isMenuOpen = useStore(isMenuOpen);
    // let windowWidth = 0;
    // function updateWindowSize() {
    //     windowWidth = window.innerWidth;
    // };
    // onMounted(() => {
    //     window.addEventListener('resize', updateWindowSize())
    // });
    // const menuVisible = computed(() => {
    //     return windowWidth < 640 ? true : false
    // })
</script>