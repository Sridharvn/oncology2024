<template>
    <div :class="classObject">
        <slot />
    </div>
</template>
<style scoped>
.banner {
    @apply flex justify-center items-center bg-text-primary px-10 py-3 text-white font-bold text-4xl text-center;
}

.banner-secondary {
    @apply flex justify-center items-center bg-lightOrange px-10 py-3 text-black text-3xl text-center;
}
</style>
<script lang="ts" setup>
import { reactive, computed } from 'vue'
const props = defineProps(['color'])

const classObject = computed(() => ({
    banner: props.color === 'primary',
    'banner-secondary': props.color === 'secondary'
}))
</script>
