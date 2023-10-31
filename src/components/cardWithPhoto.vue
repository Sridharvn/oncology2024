<template>
  <div class="rounded border md:shadow w-full md:w-64 overflow-hidden">
    <div>
      <a href="#">
        <img class="object-cover h-[300px] w-full" :src="image" :alt="name" />
      </a>
    </div>

    <div class="px-4 py-4">
      <h3 class="font-semibold text-gray-900 mb-2 truncate text-xl text-center">
        {{ name }}
      </h3>

      <!-- <div class="text-sm text-gray-800">
                Lorem ipsum dolor sit amet, conse ctetur adipiscing elit. In dignissim mi vehicula magna vulputate, sed
                placerat ex. Sit amet mattis odio.
            </div>

            <div class="text-right mt-2">
                <a href="#" class="py-2 text-indigo-600 text-xs uppercase hover:underline">Read More <span>&rarr;</span></a>
            </div> -->
    </div>
  </div>
</template>
<script setup lang="ts">
const props = defineProps<{
  image: string;
  name: string;
}>();
</script>
