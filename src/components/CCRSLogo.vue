<template>
    <div class="logo-wrapper">
        <!--  -->
        <img src="/ccrs-logo.png" alt="" class="logo">
        <div class="under-logo">Cancer Control & Research Society</div>
    </div>
</template>
<style scoped>
.logo-wrapper {
    @apply flex flex-col justify-center items-center m-3;
}

.under-logo {
    @apply text-text-primary w-4/6 text-center text-lg font-bold;
}


.logo {
    @apply h-36;
    /* @apply h-36 bg-white rounded-full p-3; */
}
</style>