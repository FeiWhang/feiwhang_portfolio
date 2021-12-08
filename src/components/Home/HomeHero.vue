<template>
  <div class="HomeHero" :style="heroStyle">
    <div class="HomeHero__left">
      <h2 class="HomeHero__greet">Hi, I</h2>
      <h1 class="HomeHero__title">
        Design, <br />Develop & <br />Deliver great experience
      </h1>
      <p class="HomeHero__subtitle">
        Computer Science student at MUIC based in Bangkok
      </p>
      <LinkGo
        to="/contact"
        title="Contact Me"
        bgColor="var(--purple)"
        hoverColor="var(--lightPurple)"
        padding="var(--pillPaddingM)"
        elemColor="white"
        fontSize="var(--fontS)"
      />
    </div>
    <div class="HomeHero__right">
      <img
        src="@/assets/hero.svg"
        alt=""
        class="HomeHero__img"
        draggable="false"
      />
    </div>
  </div>
</template>

<script setup>
import { reactive } from "vue";
import LinkGo from "@/components/Shared/LinkGo.vue";
import getScreen from "@/components/Shared/screen.js";

const screen = reactive(getScreen());
const heroStyle = reactive({
  "--imgSize": screen.width / 2.5 + "px",
});
</script>

<style lang="scss" scoped>
.HomeHero {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: auto 0;
  padding-bottom: 128px;
  &__img {
    width: var(--imgSize);
  }
}
</style>
