<template>
  <!-- https://drive.google.com/drive/folders/1Sh1KsRoX1ZsQl56T5RURZ_DkGWSS3NWU?usp=drive_link -->
  <div class="galleryWrapper">
    <div
      class="galleryDayWrapper"
      v-for="(image, index) in imageDirectory"
      :key="index"
    >
      <div class="galleryButton">
        <a>{{ image.day }}</a>
      </div>
      <div class="galleryImages">
        <div class="galleryImage">image</div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
const imageDirectory = [
  {
    day: "Day 1",
    link: "",
    images: [],
  },
  {
    day: "Day 2",
    link: "",
    images: [],
  },
  {
    day: "Day 3",
    link: "",
    images: [],
  },
  {
    day: "Day 4",
    link: "",
    images: [],
  },
];
</script>
