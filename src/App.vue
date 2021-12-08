<template>
  <div :style="appStyle">
    <Header />
    <router-view />
  </div>
</template>

<script setup>
import Header from "@/components/Shared/Header.vue";
import { computed, onMounted, onUnmounted, ref, provide } from "vue";

const width = ref(window.innerWidth);

const onWidthChange = () => (width.value = window.innerWidth);
onMounted(() => window.addEventListener("resize", onWidthChange));
onUnmounted(() => window.removeEventListener("resize", onWidthChange));

const type = computed(() => {
  if (width.value < 600) return "xs";
  if (width.value >= 600 && width.value < 960) return "sm";
  if (width.value >= 960 && width.value < 1264) return "md";
  if (width.value >= 1264 && width.value < 1620) return "lg";
  if (width.value >= 1620) return "xl";
  return null;
});

provide("screen", { width, type });

const appStyle = {
  "--layoutWidth": "1620px",
  "--layoutPadding": width.value > 1264 ? "20px" : "12px",
  "--lightPurple": "#8E6FE2",
  "--purple": "#7253C6",
  "--textColor": "#0A2540",
  "--fontL": "36px",
  "--fontM": "24px",
  "--fontS": "18px",
  "--pillPaddingL": "16px 40px",
  "--pillPaddingM": "10px 24px",
};
</script>

<style>
#app {
  font-family: Nunito;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

* {
  padding: 0;
  margin: 0;
}

/* nunito-regular - latin */
@font-face {
  font-family: "Nunito";
  font-style: normal;
  font-weight: 400;
  src: url("../public/fonts/nunito-v20-latin-regular.eot"); /* IE9 Compat Modes */
  src: local(""),
    url("../public/fonts/nunito-v20-latin-regular.eot?#iefix")
      format("embedded-opentype"),
    /* IE6-IE8 */ url("../public/fonts/nunito-v20-latin-regular.woff2")
      format("woff2"),
    /* Super Modern Browsers */
      url("../public/fonts/nunito-v20-latin-regular.woff") format("woff"),
    /* Modern Browsers */ url("../public/fonts/nunito-v20-latin-regular.ttf")
      format("truetype"),
    /* Safari, Android, iOS */
      url("../public/fonts/nunito-v20-latin-regular.svg#Nunito") format("svg"); /* Legacy iOS */
}
/* nunito-500 - latin */
@font-face {
  font-family: "Nunito";
  font-style: normal;
  font-weight: 500;
  src: url("../public/fonts/nunito-v20-latin-500.eot"); /* IE9 Compat Modes */
  src: local(""),
    url("../public/fonts/nunito-v20-latin-500.eot?#iefix")
      format("embedded-opentype"),
    /* IE6-IE8 */ url("../public/fonts/nunito-v20-latin-500.woff2")
      format("woff2"),
    /* Super Modern Browsers */ url("../public/fonts/nunito-v20-latin-500.woff")
      format("woff"),
    /* Modern Browsers */ url("../public/fonts/nunito-v20-latin-500.ttf")
      format("truetype"),
    /* Safari, Android, iOS */
      url("../public/fonts/nunito-v20-latin-500.svg#Nunito") format("svg"); /* Legacy iOS */
}
/* nunito-600 - latin */
@font-face {
  font-family: "Nunito";
  font-style: normal;
  font-weight: 600;
  src: url("../public/fonts/nunito-v20-latin-600.eot"); /* IE9 Compat Modes */
  src: local(""),
    url("../public/fonts/nunito-v20-latin-600.eot?#iefix")
      format("embedded-opentype"),
    /* IE6-IE8 */ url("../public/fonts/nunito-v20-latin-600.woff2")
      format("woff2"),
    /* Super Modern Browsers */ url("../public/fonts/nunito-v20-latin-600.woff")
      format("woff"),
    /* Modern Browsers */ url("../public/fonts/nunito-v20-latin-600.ttf")
      format("truetype"),
    /* Safari, Android, iOS */
      url("../public/fonts/nunito-v20-latin-600.svg#Nunito") format("svg"); /* Legacy iOS */
}
</style>
