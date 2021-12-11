<template>
  <section id="Home">
    <div class="HomeContainer">
      <HomeHero />
    </div>
  </section>
</template>

<script setup>
import HomeHero from "@/components/Home/HomeHero.vue";
</script>

<style lang="scss" scoped>
#Home {
  min-height: 100vh;
  padding-top: 1rem;
  position: relative;
  background: transparent;
  .HomeContainer {
    height: 100vh;
    max-width: var(--layoutWidth);
    margin: auto;
    padding: 0 var (--layoutPadding);
    display: flex;
    flex-direction: column;
    position: relative;
  }
}
</style>
