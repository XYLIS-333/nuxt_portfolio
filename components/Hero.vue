<script setup>
const { gsap } = useGsap();
const target = ref(null);

let isHovered = ref(false);
let isMouseDown = ref(false);

function handledown() {
  isMouseDown.value = !isMouseDown.value;
  gsap.to(target.value, {
    scale: 0.5,
    rotation: 210,
    duration: 2,
    ease: "elastic.out(1,0.3)",
  });
}
function handleup() {
  if (isMouseDown.value) {
    isMouseDown.value = !isMouseDown.value
    gsap.to(target.value, {
      scale: 1.2,
      rotation: 0,
      duration: 2,
      ease: "elastic.out(1,0.3)",
    });
  } else {
    return;
  }
}

onMounted(() => {
  document.addEventListener("mouseup", handleup);
});
</script>

<template>
  <div
    @mousedown="handledown"
    @mouseover="() => (isHovered = !isHovered)"
    @mouseout="() => (isHovered = !isHovered)"
    ref="target"
    :class="{ hovered: isHovered }"
    class="w-[100px] target cursor-pointer h-[100px] bg-blue-500 rounded-lg m-8"
  ></div>
  <h1 class="text-5xl" :style="{ color: isHovered ? 'green' : 'red' }">
    {{ isHovered }}
  </h1>
  <h1>
    {{ isMouseDown }}
  </h1>
</template>

<style scoped>
.target{
    transform: scale(1)
}
.hovered {
  transform: scale(1.2);
}

</style>
