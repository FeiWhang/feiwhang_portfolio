<template>
  <div class="HomeBody">
    <HomeHero />
  </div>
</template>

<script setup>
import HomeHero from "@/components/Home/HomeHero.vue";
</script>

<style lang="scss" scoped>
.HomeBody {
  min-height: 100vh;
  max-width: var(--layoutWidth);
  margin: 0 auto;
  padding: 0 var(--layoutPadding);
  display: flex;
  flex-direction: column;
  position: relative;
}
</style>
