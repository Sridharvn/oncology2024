<template>
    <div class="home">
        <!-- <div class="header">

        </div> -->
        <oncology-card></oncology-card>
        <Banner color="primary">INTERNATIONAL CONFERENCE ON MULTIDISCIPLINARY MANAGEMENT OF COMMON CANCERS</Banner>
        <Banner color="secondary">Pre-conference teaching programs on Clinical Molecular Oncology & Hitech Precision
            Radiation Oncology on 7th
            March 2024</Banner>
        <Banner color="tertiary">Organised by : Cancer Control & Research Society</Banner>
        <Banner color="four">Conference Secretariate : C M C Hospital, Perumbaikkad P O, Kottayam 686016. Mob :
            9447073203/9562084100</Banner>
        <ListCard></ListCard>
        <!-- Content to load -->
        <Footer></Footer>
    </div>
</template>
<style scoped>
.home {}
</style>
<script lang="ts" setup>
import OncologyCard from './OncologyCard.vue';
import Banner from './Banner.vue';
import ListCard from './ListCard.vue';
import Footer from './Footer.vue';
</script>
