<template>
  <section id="Home">
    <div class="Home__bg" :class="isDark ? 'Home__bg--dark' : ''"></div>
    <div class="HomeContainer">
      <HomeHero />
    </div>
  </section>
</template>

<script setup>
import { inject } from "vue";
import HomeHero from "@/components/Home/HomeHero.vue";

const isDark = inject("isDark");
</script>

<style lang="scss" scoped>
#Home {
  min-height: 100vh;
  position: relative;
  .Home__bg {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-image: url("../assets/home_bg.svg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    opacity: 0.2345;
    transition: opacity 0.25s ease-in-out;
    &--dark {
      opacity: 0.069;
    }
  }

  .HomeContainer {
    height: 100vh;
    max-width: var(--layoutWidth);
    margin: auto;
    padding: 0 var(--layoutPadding);
    padding-top: 1rem;
    display: flex;
    flex-direction: column;
    position: relative;
  }
}
</style>
