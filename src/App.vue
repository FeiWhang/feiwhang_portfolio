<template>
  <Loading v-if="isLoading" />
  <div id="content" v-if="!isLoading" :style="contentStyle">
    <Header />
    <Home />
    <About />
    <div class="tmp"></div>
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
    // isLoading.value = false;
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
    "--sectionSpace": "5rem",
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
    "--activeTextColor": isDark.value ? "#D5C6FF" : "#8E6FE2",
    "--bgColor": isDark.value ? "#2d2d2e" : "#f6f2ff",
    "--secondBgColor": isDark.value ? "#272729" : "#F8F7FD",
    "--fontL": screen.type.value != "xs" ? "36px" : "32px",
    "--fontM": screen.type.value != "xs" ? "24px" : "20px",
    "--fontS": screen.type.value != "xs" ? "18px" : "16px",
    "--fontXS": screen.type.value != "xs" ? "16px" : "15px",
    "--fontXXS": screen.type.value != "xs" ? "15px" : "14px",
    "--fontXXXS": screen.type.value != "xs" ? "14px" : "13px",
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
  letter-spacing: 0.1px;
}

* {
  padding: 0;
  margin: 0;
}
.tmp {
  min-height: 100vh;
}

#content {
  background-color: var(--bgColor);
  transition: var(--bgTransition);
  color: var(--textColor);
}

@keyframes fadeUp {
  0% {
    opacity: 0;
    transform: translate3d(0, 10vh, 0);
  }
  100% {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
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

@font-face {
  font-family: "Lexend Deca";
  src: url("../public/fonts/LexendDeca-Bold.eot");
  src: url("../public/fonts/LexendDeca-Bold.eot?#iefix")
      format("embedded-opentype"),
    url("../public/fonts/LexendDeca-Bold.woff2") format("woff2"),
    url("../public/fonts/LexendDeca-Bold.woff") format("woff"),
    url("../public/fonts/LexendDeca-Bold.ttf") format("truetype"),
    url("../public/fonts/LexendDeca-Bold.svg#LexendDeca-Bold") format("svg");
  font-weight: bold;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "Lexend Deca";
  src: url("../public/fonts/LexendDeca-SemiBold.eot");
  src: url("../public/fonts/LexendDeca-SemiBold.eot?#iefix")
      format("embedded-opentype"),
    url("../public/fonts/LexendDeca-SemiBold.woff2") format("woff2"),
    url("../public/fonts/LexendDeca-SemiBold.woff") format("woff"),
    url("../public/fonts/LexendDeca-SemiBold.ttf") format("truetype"),
    url("../public/fonts/LexendDeca-SemiBold.svg#LexendDeca-SemiBold")
      format("svg");
  font-weight: 600;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "Lexend Deca";
  src: url("../public/fonts/LexendDeca-Medium.eot");
  src: url("../public/fonts/LexendDeca-Medium.eot?#iefix")
      format("embedded-opentype"),
    url("../public/fonts/LexendDeca-Medium.woff2") format("woff2"),
    url("../public/fonts/LexendDeca-Medium.woff") format("woff"),
    url("../public/fonts/LexendDeca-Medium.ttf") format("truetype"),
    url("../public/fonts/LexendDeca-Medium.svg#LexendDeca-Medium") format("svg");
  font-weight: 500;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "Lexend Deca";
  src: url("../public/fonts/LexendDeca-Regular.eot");
  src: url("../public/fonts/LexendDeca-Regular.eot?#iefix")
      format("embedded-opentype"),
    url("../public/fonts/LexendDeca-Regular.woff2") format("woff2"),
    url("../public/fonts/LexendDeca-Regular.woff") format("woff"),
    url("../public/fonts/LexendDeca-Regular.ttf") format("truetype"),
    url("../public/fonts/LexendDeca-Regular.svg#LexendDeca-Regular")
      format("svg");
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}
</style>
