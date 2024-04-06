<template>
  <!-- https://drive.google.com/drive/folders/1Sh1KsRoX1ZsQl56T5RURZ_DkGWSS3NWU?usp=drive_link -->
  <br />
  <Banner color="tertiary">Event Gallery</Banner>
  <br />
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
          v-for="(image, index2) in item.images.slice(0, 15)"
          :key="index2"
        >
          <img
            :src="getImage(image)"
            :alt="getImage(image)"
            class="galleryImageItem"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import imageDirectory from "../data/eventGallery";
import Banner from "./Banner.vue";
function getImage<String>(gDriveUrl: string) {
  let fileId = gDriveUrl.split("/")[5]; // Extracts the file ID from the URL
  return `https://drive.google.com/thumbnail?export=view&id=${fileId}`;

  //   return `https://drive.usercontent.google.com/download?id=${fileId}&export=view&authuser=0`;
}
</script>
<style scoped>
.galleryButton {
  @apply p-2 bg-text-primary2  text-white m-3 w-56 text-center rounded-lg transition-all mb-12 mt-6 font-bold text-xl;
  @apply hover:bg-text-primary;
}
.galleryDayWrapper {
  @apply flex flex-col-reverse justify-center items-center;
}
.galleryImage {
}
.galleryImages {
  @apply flex flex-wrap gap-5 justify-center items-center;
}
.galleryImageItem {
  @apply h-72 w-96;
}
.galleryWrapper {
  @apply flex justify-center flex-col items-center rounded-md shadow-xl gap-12;
}
</style>
