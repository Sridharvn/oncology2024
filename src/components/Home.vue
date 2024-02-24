<template>
  <div class="home">
    <!-- <div class="header">

        </div> -->
    <Hero></Hero>
    <OncologyDetails></OncologyDetails>
    <Banner color="primary"
      >INTERNATIONAL CONFERENCE ON MULTIDISCIPLINARY MANAGEMENT OF COMMON
      CANCERS</Banner
    >
    <p class="m-5 text-xl">
      We are extremely happy to inform you that we are organising “Oncology
      2024” the international conference on multidisciplinary management of
      common cancers on 8th 9th and 10th of March 2024 at Hotel Le Meridian
      Kochi. The conference will be addressing to most relevant clinical
      situations in the day to day management of cancers in every oncology unit.
      There will be preconference scientific session on
      <strong
        >“Target Volume Delineation and Treatment Planning in Radiation
        Oncology”</strong
      >
      on 7th March 2024 at Nayanar Hall, Hotel LeMeridian, Kochi.
      <br /><br />There will be an exciting Molecular Oncology scientific
      session on 8th March. Learn from the expert programme in Medical Oncology
      on advancements in CART Cell therapy, Immunotherapy & Targeted therapy on
      9th March as breakfast session where the delegates will get an opportunity
      to interact with renowned international and national faculty.<br /><br />
      Case based interactive E contouring session on radiation oncology and
      learn from the expert session on common clinical situation in radiation
      oncology of relevant to India on 9th March will be giving opportunity to
      get awareness on Modem approach to common clinical problems.
      <br /><br />There will be a free paper / poster session where the
      clinicians, scientists and students can present their papers and posters.
      Special prizes and cash awards will be given for the best poster, best
      paper etc. (separately for Surgical Oncology / Medical Oncology /
      Radiation Oncology / Cancer research including genetics related
      topics).<br /><br />
      Oncology quiz for RG. residents in Medical Oncology, Radiation Oncology
      and Surgical Oncology will be conducted on 10th March. Interested RG.
      residents and Doctors who have passed their qualifying RG. degrees within
      one year also are eligible to appear for fellowship interview separate for
      every specialty and the same is open for Medical Oncology, Radiation
      Oncology, Surgical Oncology, Gynec Oncology and Onco Pathology / Cancer
      research and Genetics.<br /><br />
      There will be a Career guidance sessions for young Medical Oncology &
      Radiation Oncology PG students & Jr. Consultants on 1 Oth March especially
      giving tips for FRCR - Clinical Oncology examination and jobs abroad.<br /><br />
      Kindly block the conference dates in your calender& register as early as
      possible. Please refer to the website www.oncology2024.in periodically for
      updated information.
    </p>
    <Banner color="secondary"
      >Pre-conference teaching programs on Clinical Molecular Oncology & Hitech
      Precision Radiation Oncology on 7th March 2024</Banner
    >
    <Banner color="tertiary"
      >Organised by : Cancer Control & Research Society</Banner
    >
    <Banner color="four"
      >Conference Secretariate : C M C Hospital, Perumbaikkad P O, Kottayam
      686016. Mob : 9447073203/9562084100</Banner
    >
    <!-- <ListCard></ListCard> -->
    <!-- Content to load -->
    <scientific-sessions></scientific-sessions>
    <Banner color="four">Registration Details</Banner>
    <div class="imageWrapper">
      <img src="/RegistrationDetails.png" class="detailsImage" />
      <Banner color="six"
        >Note: Registration for the Conference is mandatory for attending the
        pre-conference workshops. Please inform your participation now itself as
        the seats are limited. Subsidised accommodation can be arranged for PGs
        & Residents on request. Contact Mr.Abey - 9447073203 Email:
        oncology2024india@gmail.com Kindly inform us the date of your arrival
        and departure (Flight/Train etc) in advance. (Please fill in the
        fellowship application in the prescribed format which is attached
        separately).<br /><br />
        Bank Account Details : Cancer Control and Research Society A/c No.
        0930073000000064 The South Indian Bank IFSC : SIBL0000930
      </Banner>
      <img src="/HotelsNear.png" class="detailsImage" />
    </div>
    <Footer></Footer>
  </div>
</template>
<style scoped>
.home {
}
.imageWrapper {
  @apply flex flex-col items-center gap-10;
}
.detailsImage {
  @apply w-2/3 bg-cover;
  /*@apply max-lg:w-[350px];*/
  @apply max-lg:w-full;
  @apply mix-blend-darken;
}
</style>
<script lang="ts" setup>
import OncologyDetails from "./OncologyDetails.vue";
import Banner from "./Banner.vue";
// import ListCard from './ListCard-without-tabs.vue';
import Footer from "./Footer.vue";
import Hero from "./Hero.vue";
import ScientificSessions from "./ScientificSessions.vue";
</script>
