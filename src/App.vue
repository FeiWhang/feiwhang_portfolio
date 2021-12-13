<template>
  <Loading v-if="isLoading" />
  <div id="content" v-if="!isLoading" :style="contentStyle">
    <Header />
    <Home />
    <About />
    <!-- <Project /> -->
  </div>
</template>

<script setup>
import Loading from "@/components/Shared/Loading.vue";
import Header from "@/components/Header/Header.vue";
import getScreen from "@/components/Shared/screen";
import Home from "@/views/Home.vue";
import About from "@/components/About/About.vue";
// import Project from "@/views/Project.vue";
import { provide, ref, computed, onMounted } from "vue";

const isLoading = ref(true);
onMounted(() => {
  setTimeout(() => {
    isLoading.value = false;
  }, 2750);
});

const screen = getScreen();

// set default dark to device theme
const isDark = ref(window.matchMedia("(prefers-color-scheme: dark)").matches);
// detect user-theme and set to isDark
const userTheme = localStorage.getItem("user-theme");
if (userTheme) {
  userTheme === "dark" ? (isDark.value = true) : (isDark.value = false);
}

const contentStyle = computed(() => {
  return {
    "--layoutWidth": "1264px",
    "--secondLayoutWidth": "960px",
    "--layoutPadding": screen.width.value > 1264 ? "32px" : "16px",
    "--sectionSpace": "4rem",
    "--lightestPurple": "#ece4ff",
    "--lighterPurple": "#D5C6FF",
    "--lightPurple": "#8E6FE2",
    "--purple": "#7253C6",
    "--darkPurple": "#24285B",
    "--greyPurple": "#E6E2EE",
    "--textColorLight": "#fdfdff",
    "--textColorDark": "#0A2540",
    "--textColor": isDark.value ? "#fdfdff" : "#0A2540",
    "--fadeColor": isDark.value ? "#ece4ff10" : "#ece4ff",
    "--activeTextColor": isDark.value ? "#D5C6FF" : "#7253C6",
    "--bgColor": isDark.value ? "#2d2d2e" : "#f6f2ff",
    "--secondBgColor": isDark.value ? "#272729" : "#F8F7FD",
    "--fontL": screen.type.value != "xs" ? "36px" : "32px",
    "--fontM": screen.type.value != "xs" ? "24px" : "20px",
    "--fontS": screen.type.value != "xs" ? "18px" : "16px",
    "--fontXS": "16px",
    "--fontXXS": "15px",
    "--fontXXXS": "14px",
    "--pillPaddingL": "16px 40px",
    "--pillPaddingM": "10px 24px",
    "--pillPaddingS": "8px 16px",
    "--bgTransition": " background-color 0.3s ease-in-out",
    "--vh": window.innerHeight * 0.01 + "px",
  };
});

document
  .querySelector("body")
  .setAttribute("style", "background:" + contentStyle.value["--bgColor"]);

provide("screen", screen);
provide("isDark", isDark);
</script>

<style lang="scss">
html {
  scroll-behavior: smooth;
  background-color: none;
}
#app {
  font-family: Nunito;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  position: relative;
  text-align: left;
  letter-spacing: 0.2px;
}

* {
  padding: 0;
  margin: 0;
}

#content {
  background-color: var(--bgColor);
  transition: var(--bgTransition);
  color: var(--textColor);
}

/* nunito-regular - latin */
@font-face {
  font-family: "Nunito";
  font-style: normal;
  font-weight: 400;
  font-display: swap;
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
  font-display: swap;
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
  font-display: swap;
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
