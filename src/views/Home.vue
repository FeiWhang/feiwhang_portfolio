<template>
  <div id="Home">
    <div class="Home__bg" :class="'home__bg--' + screen.type.value"></div>
    <HomeBody />
  </div>
</template>

<script setup>
import { inject } from "vue";
import HomeBody from "@/components/Home/HomeBody.vue";

const screen = inject("screen");
</script>

<style lang="scss" scoped>
#Home {
  min-height: 100vh;
  position: relative;
  &__bg {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    filter: blur(200px);
    opacity: 0.1;
    background-image: url("../assets/home_bg.png");
    background-repeat: no-repeat;
    background-size: cover;
    &--sm {
      filter: blur(100px);
    }
    &--xs {
      opacity: 0.4;
      filter: blur(80px);
    }
  }
}
</style>
