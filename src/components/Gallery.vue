<template>
  <!-- https://drive.google.com/drive/folders/1Sh1KsRoX1ZsQl56T5RURZ_DkGWSS3NWU?usp=drive_link -->
  <div class="galleryWrapper">
    <div
      class="galleryDayWrapper"
      v-for="(item, index) in imageDirectory"
      :key="index"
    >
      <div class="galleryButton">
        <a :href="item.link" target="_blank">{{ item.day }}</a>
      </div>
      <div class="galleryImages">
        <div
          class="galleryImage"
          v-for="(image, index2) in item.images"
          :key="index2"
        >
          <img :src="image" />
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import imageDirectory from "../data/eventGallery";
</script>
<style scoped>
.galleryButton {
  @apply p-2 bg-text-primary2  text-white m-3 w-44 text-center rounded-lg transition-all;
  @apply hover:bg-text-primary;
}
.galleryDayWrapper {
}
.galleryImage {
}
.galleryImages {
}
.galleryWrapper {
  @apply flex justify-center flex-col items-center;
}
</style>
