<template>
  <div class="home">
    <div class="HomeBody">
      <HomeHero />
    </div>
    <div class="HomeBg"></div>
  </div>
</template>

<script setup>
import HomeHero from "@/components/Home/HomeHero.vue";
</script>

<style lang="scss" scoped>
.home {
  min-height: 100vh;
  position: relative;
}
.HomeBody {
  min-height: 100vh;
  max-width: var(--layoutWidth);
  margin: 0 auto;
  padding: 0 var(--layoutPadding);
  display: flex;
  flex-direction: column;
  position: relative;
}
.HomeBg {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  min-height: 100vh;
  filter: blur(200px);
  opacity: 0.15;
  z-index: -1;
  background-image: url("../assets/home_bg.png");
  background-position: 100% 0;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
