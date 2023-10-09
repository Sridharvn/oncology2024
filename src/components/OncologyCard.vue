<template>
    <div class="head">

        <CCRSLogo></CCRSLogo>
        <div class="heading-wrapper">
            <div class="heading">ONCOLOGY <span class="heading-dim">2024</span><span class="heading-date">March 8, 9 & 10 @
                    Kochi</span></div>
        </div>
        <div class="details">
            <div class="list"> Venue : HOTEL Le MERIDIEN KOCHI</div>
            <div class="list"> Email :<span> <a href="mailto:oncology2024@gmail.com">oncology2024@gmail.com</a> </span>
            </div>
            <div class="list"> Web : <span> <a href="http://www.oncology2024.in">www.oncology2024.in</a> </span></div>
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
}

.heading-wrapper {
    @apply bg-white border-text-secondary m-10 rounded-xl border border-8 hover:shadow-2xl transition-all ease-in-out duration-1000 w-min flex justify-center items-center;
    /* @apply bg-white border-text-secondary m-10 rounded-xl border border-8 hover:shadow-2xl transition-all ease-in-out duration-1000 -rotate-[2deg] w-min flex justify-center items-center; */
}

.heading {
    @apply text-9xl text-text-primary text-center p-10 font-semibold flex flex-col;
}

.heading-dim {
    @apply text-text-secondary
}

.heading-date {
    @apply text-text-primary text-5xl;
}
</style>
<script lang="ts" setup>
import CCRSLogo from './CCRSLogo.vue';

</script>