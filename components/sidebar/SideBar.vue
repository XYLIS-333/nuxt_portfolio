<script setup>
const data = [
  {
    title: "Home",
    link: "/",
    info: "About my Process and general direction towards design.",
    imglink: "/icons/navbar/home.svg",
  },
  {
    title: "Projects",
    link: "/projects",
    info: "Case Studies and info on recent client projects.",
    imglink: "/icons/navbar/projects.svg",
  },
  {
    title: "R&D / Craft",
    link: "/craft",
    info: "Small self driven projects and concepts derived from various areas of personal interest.",
    imglink: "/icons/navbar/r&d.svg",
  },
  {
    title: "info",
    link: "/info",
    info: "Info and contact information.",
    imglink: "/icons/navbar/info.svg",
  },
];
</script>

<template>
  <div class="w-full h-full text-base relative">
    <div class="relative border-b logo border-divider text-base px-4 pb-2 pt-6">
      <div>
        <h2 class="font-inter-light">Subham Singh</h2>
        <p class="text-contentgray text-sm font-inter-medium">Creamed Web</p>
      </div>
      <div class="absolute bottom-0 right-2">
        <img src="/images/nav_hero_png.png" class="w-[110px]" alt="hero icon" />
      </div>
    </div>
    <div
      class="px-7 pb-3 pt-10 flex items-center gap-3 border-divider border-b"
    >
      <div
        class="rounded-full border-[2px] border-[#B2CE63] w-[16px] h-[16px] p-[2.5px]"
      >
        <div class="bg-[#B2CE63] w-full h-full rounded-full"></div>
      </div>
      <div class="text-base font-inter-light">
        <p>Availiable <span class="text-contentgray"> / Q1 2024</span></p>
      </div>
    </div>
    <div class="flex flex-col justify-between p-2 py-8">
      <div>
        <ul class="flex flex-col gap-1">
          <li class="" v-for="item in data">
            <SidebarNavigationLink
              :title="item.title"
              :link="item.link"
              :imglink="item.imglink"
              :info="item.info"
            />
          </li>
        </ul>
      </div>
      <div></div>
    </div>
    <div class="font-inter-medium px-2 absolute bottom-6 w-full">
      <NuxtLink
        class="flex meeting-wrapper gap-3 items-center px-5 duration-150 py-3 rounded-lg hover:bg-[#151515] "
        to="/"
      >
        <img class="w-[16px]" src="/icons/calendar.svg" alt="meeting icon" />

        <span class="text-contentgray font-inter-light meeting-text">Set up a Meeting +</span>
      </NuxtLink>
      <div></div>
      <div></div>
    </div>
  </div>
</template>

<style scoped>
.logo {
  box-shadow: 0px -19px 54px -15px rgba(227, 246, 255, 0.1) inset;
}
.meeting-wrapper:hover .meeting-text{
  color: white;
}
</style>
