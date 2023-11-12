<template>
  <div :class="classObject">
    <slot />
  </div>
</template>
<style scoped>
.banner {
  @apply flex justify-center items-center bg-text-primary px-10 py-3 text-white font-bold text-4xl text-center;
  @apply max-lg:text-2xl max-md:text-xl;
}

.banner-secondary {
  @apply flex justify-center items-center bg-lightOrange px-10 py-3 text-black text-3xl text-center flex-wrap text-justify;
  @apply max-lg:text-2xl max-md:text-xl max-sm:text-base max-sm:font-bold;
}

.banner-tertiary {
  @apply flex justify-center items-center px-10 py-3 text-text-primary text-5xl text-center;
  @apply max-lg:text-2xl max-md:text-xl;
}

.banner-four {
  @apply flex justify-center items-center px-10 py-3 text-black text-3xl text-center;
  @apply max-lg:text-2xl max-md:text-xl;
}
.banner-five {
  @apply flex justify-center items-center px-10 py-3 text-white bg-red text-3xl text-center;
  @apply max-lg:text-2xl max-md:text-xl;
}
.banner-six {
  @apply flex justify-end items-center px-5 py-3 text-white bg-text-primary3 text-3xl text-center;
  @apply max-lg:text-2xl max-md:text-xl;
}
</style>
<script lang="ts" setup>
import { reactive, computed } from "vue";
const props = defineProps(["color"]);

const classObject = computed(() => ({
  banner: props.color === "primary",
  "banner-secondary": props.color === "secondary",
  "banner-tertiary": props.color === "tertiary",
  "banner-four": props.color === "four",
  "banner-five": props.color === "five",
  "banner-six": props.color === "six",
}));
</script>
