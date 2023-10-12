<template>
    <div class="nav">
        <div class="nav-logo"><img src="/ccrs-logo.png" alt="" class="nav-logo-img">
        </div>
        <!-- <div class="nav-links">
            <div class="nav-items">
                <a href="">Faculty</a>
            </div>
            <div class="nav-items"> <a href="">Sessions</a></div>
            <div class="nav-items"> <a href="">QR Code</a></div>
        </div> -->
    </div>
</template>
<style scoped>
.nav {
    @apply flex justify-between items-center px-4 py-3 bg-text-primary;
    /* @apply flex justify-between items-center px-4 py-3 bg-text-primary bg-gradient-to-b from-cream to-[#E5E8B000]; */
    @apply max-sm:justify-center;

}

.nav-logo {
    @apply w-28 bg-white rounded rounded-full p-3;
}

.nav-links {
    @apply flex gap-5 text-white font-bold;
    @apply max-sm:hidden;
}
</style>