<script setup>


const data = [

{
    title:"Home",
    link: "/",
    info:"About my Process and general direction towards design.",
    imglink:"/icons/navbar/home.svg"
},
{
    title:"Projects",
    link:"/projects",
    info:"Case Studies and info on recent client projects.",
    imglink:"/icons/navbar/projects.svg"
},
{
    title:"R&D / Craft",
    link:"/craft",
    info:"Small self driven projects and concepts derived from various areas of personal interest.",
    imglink:"/icons/navbar/r&d.svg"
},
{
    title:"info",
    link:"/info",
    info:"Info and contact information.",
    imglink:"/icons/navbar/info.svg"
}

]

</script>


<template>

<div class="w-full h-full ">
    <div></div>
    <div class="flex flex-col justify-between py-3">
<div>
    <ul class="flex flex-col gap-2">
        <li class="" v-for="item in data">
            <SidebarNavigationLink  :title="item.title" :link="item.link" :imglink="item.imglink" :info="item.info" />
        </li>
    </ul>
</div>
<div></div>
    </div>
    <div></div>
</div>
    
</template>