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
          image
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
const imageDirectory = [
  {
    day: "Day 1",
    link: "https://drive.google.com/drive/folders/12l5PElrTJpfqva3DS8xL96Wa3S-CK_gZ",
    images: [],
  },
  {
    day: "Day 2",
    link: "https://drive.google.com/drive/folders/1Ko4upCSYmJXSOTiynlCRugGzbhMG7dnW",
    images: [],
  },
  {
    day: "Day 3",
    link: "https://drive.google.com/drive/folders/15mwgyQ5Li7WWPt4fOrgg4rC5zul1e9uX",
    images: [],
  },
  {
    day: "Day 4",
    link: "https://drive.google.com/drive/folders/1B-F8KB1LupbbYhpfAlxyIGfhoF25pljG",
    images: [],
  },
];
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
