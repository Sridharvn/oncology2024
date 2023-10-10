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
                <img src="/lemeridien.jpg" alt="" class="hero-img">
            </div>
        </div>
    </div>
</template>
<style  scoped>
.hero-img {
    @apply mix-blend-multiply shadow-2xl w-auto;
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
