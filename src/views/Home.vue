<template>
  <div class="home">
    <div class="HomeBody">
      <Header />
      <HomeHero />
    </div>
    <div class="HomeBg"></div>
  </div>
</template>

<script setup>
import Header from "@/components/Header/Header.vue";
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
  padding: 0 20px;
  display: flex;
  flex-direction: column;
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
@keyframes bgChange {
  0% {
    background-position: 0 0;
  }
  50% {
    background-position: 100% 0;
  }
  100% {
    background-position: 50% 0;
  }
}
</style>
