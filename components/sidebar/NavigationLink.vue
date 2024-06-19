<script setup>
const props = defineProps(["title", "link", "info", "imglink"]);


</script>

<template>
  <NuxtLink
    active-class="currentlink"
    class="w-full h-full px-4 py-2 rounded-md text-contentgray text-base items-center flex gap-2 duration-150 hover:bg-[#151515]"
    :to="link"
  >
    <img class="w-[24px] h-[24px]" :src="imglink" alt="nav icon" />
    <span>{{ title }}</span>
  </NuxtLink>

</template>

<style scoped>
.currentlink {
  color: rgb(255, 255, 255);
  background-color: #151515;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
