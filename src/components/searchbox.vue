<!-- <template>
    <div id="search">
        <input type="text" v-model="search">
        <ul>
            <li v-for="data in result">
            {{ data.title +' | '+ data.author.firstName +' '+data.author.lastName}}
            </li>
        </ul>
    </div>
</template>
<script lang="js">
    import Fuse from 'fuse.js';
    export default {
    data() {
        return {
            fuse: null,
            search: '',
            result: []
        }
    },
    props: {
        list: Object,
    },
    watch: {
    search() {
        if (this.search.trim() === '')
            this.result = []
        else
            this.result = this.fuse.search(this.search.trim())
        }
    },
    mounted() {
        window.Fuse = Fuse;
        const options = {
            shouldSort: true,
            threshold: 0.6,
            location: 0,
            distance: 100,
            maxPatternLength: 32,
            minMatchCharLength: 1,
            keys: [
                "title",
                "headerTitle",
                "url"
            ]
        }
        this.fuse = new window.Fuse(this.list, options);
        this.result = this.list
    }
    }
</script> -->

<template>
    <div id="search">
        <input type="text" v-model="search">
        <p v-if="noResults">No results found for {{ search }}</p>
        <ul>
            <li v-for="data in result">
                {{ data.title +' | '+ data.author.firstName +' '+data.author.lastName}}
            </li>
        </ul>
    </div>
</template>
<script lang="ts">
    import { useVueFuse } from 'vue-fuse';
    import { defineComponent, ref } from 'vue';
   
    export default {
        props: {
            pages: Object,
        }
    }
    export defineComponent ({
        setup(props) {
            const { search, results, noResults } = useVueFuse(ref(props.pages))

            return {
                search,
                results,
                noResults,
            }
        }
    })
</script>

