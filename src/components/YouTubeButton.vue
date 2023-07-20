<template>
    <a 
        :href="href"
        target="_blank"
        class="px-2 py-2 rounded-3xl border-2 border-orange-500 hover:bg-orange-500 hover:text-white text-orange-500 transition-colors font-semibold">
        <slot>YouTube</slot>
    </a>
</template>

<script setup>

const props = defineProps({
    href: String
})
</script>

