<template>
    <div :class="classObject">
        <slot />
    </div>
</template>
<style scoped>
.banner {
    @apply flex justify-center items-center bg-text-primary px-10 py-3 text-white font-bold text-4xl text-center;
    @apply max-lg:text-2xl max-md:text-xl;
}

.banner-secondary {
    @apply flex justify-center items-center bg-lightOrange px-10 py-3 text-black text-3xl text-center flex-wrap;
    @apply max-lg:text-2xl max-md:text-xl;

}

.banner-tertiary {
    @apply flex justify-center items-center px-10 py-3 text-text-primary text-5xl text-center;
    @apply max-lg:text-2xl max-md:text-xl;

}

.banner-four {
    @apply flex justify-center items-center px-10 py-3 text-black text-3xl text-center;
    @apply max-lg:text-2xl max-md:text-xl;

}
</style>
<script lang="ts" setup>
import { reactive, computed } from 'vue'
const props = defineProps(['color'])

const classObject = computed(() => ({
    banner: props.color === 'primary',
    'banner-secondary': props.color === 'secondary',
    'banner-tertiary': props.color === 'tertiary',
    'banner-four': props.color === 'four',
}))
</script>
