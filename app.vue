<script setup>

import "~/assets/styles/globals.css";
console.log("im logged");
</script>

<template>
  <main class="flex w-full h-screen overflow-hidden">
    <div class=" sidebar bg-sidebar border-r border-[#141414]">
      
      <SidebarSideBar />
    </div>

    <div class=" content-area p-4">
      <NuxtPage />
    </div>
  </main>
</template>

<style scoped>
.content-area {
  flex-grow: 1;
}
.sidebar {
  flex-basis: 240px;
}
</style>
