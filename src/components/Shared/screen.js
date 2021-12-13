import { computed, onMounted, onUnmounted, ref } from "vue";

export default function getScreen() {
  const width = ref(window.innerWidth);
  const scroll = ref(window.scrollY);

  const onWidthChange = () => (width.value = window.innerWidth);
  const onScrollChange = () => (scroll.value = window.scrollY);
  onMounted(() => {
    window.addEventListener("resize", onWidthChange);
    window.addEventListener("scroll", onScrollChange);
  });
  onUnmounted(() => {
    window.removeEventListener("resize", onWidthChange);
    window.removeEventListener("scroll", onScrollChange);
  });

  const type = computed(() => {
    if (width.value < 600) return "xs";
    if (width.value >= 600 && width.value < 960) return "sm";
    if (width.value >= 960 && width.value < 1264) return "md";
    if (width.value >= 1264 && width.value < 1620) return "lg";
    if (width.value >= 1620) return "xl";
    return null;
  });

  return { width, type, scroll };
}
