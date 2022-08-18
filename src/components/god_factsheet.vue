<template>
    <table>
        <tbody class="p-10">
            <tr>
                <th colspan="2" class="text-2xl md:text-base">{{factObj.name}}</th>
            </tr>
            <tr>
                <td colspan="2" class="p-1">
                    <a :href="factObj.image" :data-pswp-height="imageHeight" :data-pswp-width="imageWidth" data-cropped="true" target="_blank" class="pswp-gallery"><img :src="factObj.image" class="rounded-sm"></a>
                </td>
            </tr>
            <tr class="text-left">
                <th scope="row" class="text-sm pl-1.5">Alignment:</th>
                <td class="text-sm">{{factObj.alignment}}</td>
            </tr>
            <tr class="text-left align-top">
                <th scope="row" class="text-sm pl-1.5">Domains:</th>
                <td class="text-sm">
                    <p v-for="domain in factObj.domains" class="">{{ domain }}</p>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script lang='ts'>
    export default {
        data() {
            return {
            }
        },
        props: {
            currentPath: String,
            factObj: Object,
        },
        computed() {
        }
    }
</script>