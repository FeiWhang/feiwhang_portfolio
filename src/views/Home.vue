<template>
  <section id="Home">
    <div
      class="HomeBg"
      :class="'HomeBg--' + screen.type.value"
      key="HomeBg"
      rel="preload"
    ></div>
    <div class="HomeContainer">
      <HomeHero />
    </div>
  </section>
</template>

<script setup>
import { inject } from "vue";
import HomeHero from "@/components/Home/HomeHero.vue";

const screen = inject("screen");
</script>

<style lang="scss" scoped>
#Home {
  min-height: 100vh;
  position: relative;
  .HomeBg {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    filter: blur(200px);
    opacity: 0.2;
    background-image: url("../assets/home_bg.webp");
    background-repeat: no-repeat;
    background-size: cover;
    &--sm {
      filter: blur(100px);
    }
    &--xs {
      opacity: 0.3;
      filter: blur(80px);
    }
  }
  .HomeContainer {
    min-height: 100vh;
    max-width: var(--layoutWidth);
    margin: 0 auto;
    padding: 0 var(--layoutPadding);
    display: flex;
    flex-direction: column;
    position: relative;
  }
}
</style>
