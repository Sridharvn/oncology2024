<template>
    <div class="head">


        <div class="heading-wrapper">
            <div class="heading">ONCOLOGY <span class="heading-dim">2024</span><span class="heading-date">March 8, 9 and
                    10<br>
                    at Le Meridien, Kochi</span></div>
        </div>

    </div>
</template>
<style scoped>
.details {
    @apply text-text-primary flex flex-col justify-start;
}

.list {
    @apply p-1 px-4 my-1 bg-gradient-to-r from-[#ffffff00] via-orange to-orange;
}

.head {
    @apply flex justify-between items-center;
    @apply max-md:flex-col max-lg:flex-col max-xl:flex-col;
}

.heading-wrapper {
    @apply bg-white border-text-secondary m-10 rounded-xl border border-8 hover:shadow-2xl transition-all ease-in-out duration-1000 w-min flex justify-center items-center;
    @apply max-md:my-10 max-md:m-0;
    /* @apply bg-white border-text-secondary m-10 rounded-xl border border-8 hover:shadow-2xl transition-all ease-in-out duration-1000 -rotate-[2deg] w-min flex justify-center items-center; */
}

.heading {
    @apply text-8xl text-text-primary text-center p-10 font-semibold flex flex-col;
    @apply max-md:text-5xl max-lg:text-6xl;
}

.heading-dim {
    @apply text-text-secondary;
}

.heading-date {
    @apply text-text-primary text-5xl;
    @apply max-md:text-3xl max-lg:text-3xl;


}
</style>
<script lang="ts" setup>
import CCRSLogo from './CCRSLogo.vue';

</script>