<template>
    <button @click="changeTheme">
        <slot/>
    </button>
</template>
<script lang="ts">
    export default {
        data() {
            return {
                theme: "",
            }
        },
        mounted() {
            this.initializeTheme();
        },
        methods: {
            applyTheme() {
                if (this.theme === "dark") {
                    document.documentElement.classList.add("dark");
                } else {
                    document.documentElement.classList.remove("dark");
                }
                localStorage.setItem("theme", this.theme);
            },
            changeTheme() {
                this.theme = (this.theme == 'dark') ? this.theme = 'light' : this.theme = 'dark';
                this.applyTheme();
            },
            initializeTheme() {
                this.theme = localStorage.getItem("theme")
                this.applyTheme()
            }
        }
    }
</script>
<style>
button {
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
}
</style>