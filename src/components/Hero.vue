<template>
    <div class="hero">
        <div class="head">
            <header-nav></header-nav>
        </div>
        <div class="hero-section">
            <div class="hero-details">
                <OncologyCard />
            </div>
            <!-- <div class="hero-details">INTERNATIONAL CONFERENCE ON MULTIDISCIPLINARY MANAGEMENT OF COMMON CANCERS</div> -->
            <div class="hero-img-wrapper">
                <img src="/lemeridien3.jpg" alt="" class="hero-img">
            </div>
        </div>
    </div>
</template>
<style  scoped>
.hero-img {
    @apply shadow-2xl border border-white border-8 w-auto rounded rounded-2xl mx-3;
    @apply max-sm:mx-0
}

.hero-section {
    @apply flex justify-between items-center flex-row-reverse;
    @apply max-xl:flex-col;
}

.hero-img-wrapper {}
</style>
<script lang="ts" setup>
import OncologyCard from './OncologyCard.vue';
import HeaderNav from './HeaderNav.vue';
</script>
