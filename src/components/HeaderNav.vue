<template>
  <div class="nav">
    <div class="nav-logo">
      <a href="/"> <img src="/ccrs-logo.png" alt="" class="nav-logo-img" /></a>
    </div>
    <div class="nav-links">
      <div class="nav-items">
        <a href="/">Home</a>
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
  @apply max-sm:mb-10;
}

.nav-links {
  @apply flex gap-5 text-white font-bold;
  @apply max-sm:flex-col;
}
</style>
