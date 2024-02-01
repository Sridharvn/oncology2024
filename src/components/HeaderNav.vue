<template>
  <!-- http://www.oncology2024.in/brochure-2024.pdf -->

  <div class="nav">
    <div class="nav-logo">
      <a href="/"> <img src="/ccrs-logo.png" alt="" class="nav-logo-img" /></a>
    </div>
    <div class="nav-links">
      <div class="nav-items">
        <a href="/">Home Page</a>
      </div>
      <div class="nav-items">
        <a href="/InternationalFaculty">International Faculty</a>
      </div>
      <div class="nav-items">
        <a href="/NationalFaculty">National Faculty</a>
      </div>
      <div class="nav-items">
        <a href="/SteeringCommittee">Steering Committee</a>
      </div>
      <div class="nav-items">
        <a href=" http://www.oncology2024.in/brochure-2024.pdf" target="_blank"
          >Download Brochure</a
        >
      </div>
    </div>
  </div>
</template>
<style scoped>
.nav {
  @apply flex justify-between items-center px-4 py-3 bg-text-primary;
  /* @apply flex justify-between items-center px-4 py-3 bg-text-primary bg-gradient-to-b from-cream to-[#E5E8B000]; */
  @apply max-sm:justify-center max-sm:flex-col max-sm:justify-center max-sm:items-center max-sm:text-center;
}

.nav-logo {
  @apply w-28 bg-white rounded rounded-full p-3;
  @apply max-sm:mb-4;
}

.nav-links {
  @apply flex gap-5 text-white font-bold justify-center items-center text-center;
  @apply max-sm:flex max-sm:text-xs max-sm:gap-2 max-sm:justify-center max-sm:flex-wrap;
}
.nav-items {
  @apply bg-text-primary2 rounded-md p-2;
}
</style>
