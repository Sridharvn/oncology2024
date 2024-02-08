<template>
  <div class="wrapper">
    <h1 class="heading">
      INSTRUCTIONS FOR ABSTRACT PREPARATION - PLEASE VISIT WEBSITE.
    </h1>
    <p class="description">
      All abstracts must be printed in proper format to be considered for
      presentation. The abstract including title, author(s) name and text should
      be typed should not exceed 250 words.
    </p>
    <p class="description">
      <strong>Heading:</strong> Type the title in CAPITAL LETTERS. Immediately
      after the title, list the authors and their Institutional affiliation.
    </p>
    <p class="description">
      Do not include academic titles or degrees. Underline the name of
      presenting author.
    </p>
    <p class="description">
      <strong> Content:</strong> The abstract must adequately describe the
      objectives and results of the study. The title of the abstract should be
      fully informative of the contents and contain keywords necessary to allow
      indexing of the abstract.
    </p>
    <p class="description">
      The abstract should be typed as a single paragraph without subheadings but
      should consist of the following:
    </p>
    <h1 class="subHeading"></h1>
    <ol class="list">
      <li class="listItem">Introduction that presents the aim of the study;</li>
      <li class="listItem">Brief description of materials & methods;</li>
      <li class="listItem">Summary of the results, and</li>
      <li class="listItem">Conclusions.</li>

      <p class="description">Do not include references.</p>
      <h1 class="subHeading">Poster:</h1>

      <p class="description">
        An area of 90cm (height) x 60cm (width) will be available for each
        poster presentation (digital poster alone is not acceptable).
      </p>
      <p class="description">
        Poster display must indicate title, name of aufhor(s), aim of the study,
        materials and methods, results and conclusions.
      </p>
      <p class="description">
        Title of charts, drawings and paragraphs must be readable from a
        distance of 2 meters. Letter and numbers should be of 12 mm (1/2 inch)
        size.
      </p>
      <h1 class="subHeading">Abstract deadline: 15th February 2024</h1>
    </ol>
  </div>
</template>
<style scoped>
.description {
  @apply text-base text-text-primary3;
}
.heading {
  @apply text-4xl text-center text-text-primary;
}
.list {
  @apply text-justify text-text-primary3;
}
.listItem {
  @apply list-item;
}
.subHeading {
  @apply font-bold italic underline;
}
.wrapper {
  @apply w-1/2 flex flex-col items-start my-6 border border-text-primary rounded-lg m-2 border-4 p-3 px-6;
}
ol {
  list-style-type: decimal;
}
</style>
