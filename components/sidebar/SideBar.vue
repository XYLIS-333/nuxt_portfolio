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
  <div class="w-full h-full">
    <div class="relative border-b border-divider text-base px-4 pb-2 pt-6">
      <div>
        <h2>Subham Singh</h2>
        <p class="text-contentgray text-sm font-inter-medium">Creamed Web</p>
      </div>
      <div class="absolute bottom-0 right-0">
        <img src="/images/nav_hero.svg" class="w-[110px]" alt="hero icon" />
      </div>
    </div>
    <div class="px-7 pb-3 pt-10 flex items-center gap-3 border-divider border-b">
      <div
        class="rounded-full border-[2px] border-[#B2CE63] w-[16px] h-[16px] p-[2.5px]"
      >
        <div class="bg-[#B2CE63] w-full h-full rounded-full"></div>
      </div>
      <div class="text-base">
        <p>Availiable  <span class="text-contentgray">  / Q1 2024</span></p>
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
    <div></div>
  </div>
</template>
