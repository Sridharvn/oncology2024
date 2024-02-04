<template>
  <div class="dayWrapper">
    <h1 class="heading">
      <slot></slot>
    </h1>
    <h6 class="underHeading">
      There maybe minor changes in the Scientific Programme.
    </h6>
    <table class="listWrapper">
      <tr class="listHeading">
        <th class="listHeadingItem" v-if="timeProvided == 'true'">Time</th>
        <th class="listHeadingItem">Topic</th>
        <th class="listHeadingItem">Speaker</th>
      </tr>

      <tr class="listItems" v-for="(item, index) in sessionsList" :key="index">
        <td class="listItemsItem" v-if="timeProvided == 'true'">
          {{ item.time }}
        </td>
        <td class="listItemsItem">{{ item.topic }}</td>
        <td class="listItemsItem">{{ item.speaker }}</td>
      </tr>
    </table>
  </div>
</template>
<style scoped>
* {
  /* border: 1px solid red; */
}
.dayWrapper {
  @apply border border-text-primary rounded-lg m-2 border-4;
}
.heading {
  @apply text-text-primary text-3xl px-4 pt-4 text-center;
}
.underHeading {
  @apply text-text-primary text-sm pt-1 px-4 pb-4 italic text-center border-b-2;
}
.listHeading {
  /* display: grid;
  grid-template-columns: repeat(2, 1fr); */
  /* grid-template-rows: ; */
  /* grid-column-gap: 130px;
  grid-row-gap: 20px; */
  /* margin-left: 180px; */
  /* padding-block: 10px; */
}
.listHeadingItem {
  @apply text-text-primary text-3xl  underline text-left px-4;
}
.listItems {
  /* display: grid;
  grid-template-columns: repeat(2, 1fr); */
  /* grid-template-rows: ; */
  /* grid-column-gap: 200px;
  grid-row-gap: 20px; */
  /* margin-left: 10%; */
  /* padding-block: 10px; */
}
.listItemsItem {
  text-align: left;
  @apply text-text-primary text-base py-2 px-4;
}
.listItemsWrapper {
}
.listWrapper {
  @apply max-w-6xl;
}

.wrapper {
  @apply flex justify-center flex-wrap flex-auto;
}
</style>
<script setup>
const props = defineProps(["sessionsList", "timeProvided"]);
</script>
